import React from 'react';
import {RoutesList} from '../components/RoutesList';
import {RouteService} from '../services/RouteService';
import {UserService} from "../services/UserService";
import {Error} from "../components/Error";
import {AuctionStatusService} from "../services/AuctionStatusService";

export class RoutesListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingDone: false,
            data: [],
            driverID: ''
        };
    }

    componentDidMount() {
        UserService.getDriverId().then((id) => {
            this.setState({
                driverID: id
            });
            this.loadRoutes();
            this.interval = setInterval(() => this.loadRoutes(true), 1000);
        }).catch((e) => {
            this.setState({error: e});
            console.error(e);
        });
    }

    loadRoutes(interval) {
        RouteService.getRoutes()
            .then((data) => {
                let dirty = false;
                if (interval) {
                    if (this.state.data.length !== data.length) {
                        dirty = true;
                    } else {
                        dirty = this.state.data.reduce(
                            (total, route, i) =>
                                total || route._id !== data[i]._id || route.currentBid !== data[i].currentBid ||
                                AuctionStatusService.getBidStatus(route, this.state.driverID) !== AuctionStatusService.getBidStatus(data[i], this.state.driverID),
                            false);
                    }
                }

                this.setState({
                    data: [...data],
                    loadingDone: true,
                    dirtyData: dirty
                });
            }).catch((e) => {
            this.setState({error: e});
            console.error(e);
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if (this.state.error) {
            return <Error message={this.state.error}/>
        }
        return (
            <RoutesList loadingDone={this.state.loadingDone} data={this.state.data}
                        dirtyData={this.state.dirtyData} driverID={this.state.driverID}/>
        );
    }
}