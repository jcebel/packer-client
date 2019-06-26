import React from 'react';
import {VehicleImage} from './VehicleImage';
import Button from 'react-bootstrap/Button';

export class RoutesRow extends React.Component {


    render() {
        var minBid = 0;
        if(this.props.route.auctionBids.length > 1) {
            minBid = this.props.route.auctionBids.reduce(function (a, b) { return a.bid < b.bid ? a.bid : b.bid; })
        } else{
            minBid = this.props.route.auctioBids;
            console.log(minBid);
        }
        return (
            <tr>
                <td><VehicleImage type={this.props.route.vehicleType}/></td>
                <td>{`${this.props.route.kilometers} km`}</td>
                <td>{this.props.route.items.length}</td>
                <td>{this.props.route.items[0].origination.street}</td>
                <td>{this.props.route.items[this.props.route.items.length - 1 ].destination.street}</td>
                <td>
                    {minBid} €
                </td>
                <td><Button variant="success" href={`/route/${this.props.route._id}`}>More Info</Button>
                </td>
            </tr>
        );
    }
}
