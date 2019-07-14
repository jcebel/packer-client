import React from 'react';
import {RoutesList} from '../components/RoutesList';
import {RouteService} from '../services/RouteService';
import {UserService} from "../services/UserService";
import {AuctionStatusImage} from "../components/AuctionStatusImage";

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
            this.setState( {
                loadingDone: false,
                data: [],
                driverID: id
            });
            this.loadRoutes();
            this.interval = setInterval(() => this.loadRoutes(true), 1000);
        }).catch((e) => {
            console.error(e);
        });
    }

    loadRoutes(interval) {
        //TODO: USe getRoutesByDate, when the Database contains real data.
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
                                AuctionStatusImage.getBidStatus(route, this.state.driverID) !== AuctionStatusImage.getBidStatus(data[i], this.state.driverID),
                            false);
                    }
                }

                this.setState({
                    data: [...data],
                    loadingDone: true,
                    dirtyData: dirty,
                    driverID: this.state.driverID
                });
            }).catch((e) => {
            console.log(e);
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <RoutesList loadingDone={this.state.loadingDone} data={this.state.data}
                        dirtyData={this.state.dirtyData} driverID={this.state.driverID}
                        scale={"65px"}/>
        );
    }
}