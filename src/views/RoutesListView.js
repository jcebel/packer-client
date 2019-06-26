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

    componentWillMount() {
        this.setState({
            loadingDone: false
        });
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


    render() {
        return (
            <RoutesList loadingDone={this.state.loadingDone} data={this.state.data}
                        onMoreInfo={(id) => this.moreInfoPressed(id)}/>
        );
    }

    moreInfoPressed(id) {
        console.log('More info pressed ' + id);
    }

}