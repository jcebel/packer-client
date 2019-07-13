import React from 'react';
import {RoutesList} from '../components/RoutesList';
import {RouteService} from '../services/RouteService';

export class RoutesListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingDone: false,
            data: []
        };
    }

    componentDidMount() {
        this.loadRoutes();
        this.interval = setInterval(() => this.loadRoutes(true), 5000);
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
                                total || route._id !== data[i]._id || route.currentBid !== data[i].currentBid,
                            false);
                    }
                }

                this.setState({
                    data: [...data],
                    loadingDone: true,
                    dirtyData: dirty
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
                        dirtyData={this.state.dirtyData}/>
        );
    }
}