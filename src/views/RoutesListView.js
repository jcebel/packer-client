import React from 'react';
import {RoutesList} from '../components/RoutesList';
import {RouteService} from '../services/RouteService';
export class RoutesListView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loadingDone: true,
            data: []
        };
    }

    componentDidMount() {
        this.setState({
            loadingDone: false
        });
        this.loadRoutes();
        this.interval = setInterval(() => this.loadRoutes(), 5000);
    }

    loadRoutes() {
        //TODO: USe getRoutesByDate, when the Database contains real data.
        RouteService.getRoutes()
            .then((data) => {
                this.setState({
                    data: [...data],
                    loadingDone: true
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
            <RoutesList loadingDone={this.state.loadingDone} data={this.state.data}/>
        );
    }
}