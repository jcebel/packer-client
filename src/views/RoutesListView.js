import React from 'react';
import {RoutesList} from '../components/RoutesList';
import {RouteService} from '../services/RouteService';

export class RoutesListView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });

        RouteService.getRoutes()
            .then((data) => {
                this.setState({
                    data: [...data],
                    loading: false
                });
            }).catch((e) => {
            console.log(e);
        });
    }


    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <RoutesList data={this.state.data} onMoreInfo={(id) => this.moreInfoPressed(id)}/>
        );
    }

    moreInfoPressed(id) {
        console.log('More info pressed ' + id);
    }

}