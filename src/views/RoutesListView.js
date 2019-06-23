import React from 'react';
import {RoutesList} from '../components/RoutesList';

export class RoutesListView extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount()
    {
        this.setState({
            loading: true,

            data: [{type: "car", distance: "22,5 km", numberOfItems:30, start:"Some Street", end: "Other street", payment:"40 "}]
        });

       //Call service
    }


    render () {
        return (
          <RoutesList data={this.state.data} onMoreInfo={(id) => this.moreInfoPressed(id)}/>
        );
    }

    moreInfoPressed(id) {
        console.log('More info pressed ' + id);
    }

}