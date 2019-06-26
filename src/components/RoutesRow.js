import React from 'react';
import {VehicleImage} from './VehicleImage';
import Button from 'react-bootstrap/Button';

export class RoutesRow extends React.Component {


    render() {
        return (
            <tr>
                <td><VehicleImage type={this.props.route.vehicleType}/></td>
                <td>{`${this.props.route.kilometers} km`}</td>
                <td>{this.props.route.items.length}</td>
                <td>{this.props.route.items[0].origination.street}</td>
                <td>{this.props.route.items[this.props.route.items.length - 1 ].destination.street}</td>
                <td>{`${this.props.route.auctionBids.sort((first, sec) => {
                    return first.bid > sec.bid;
                })[0].bid} € `}
                </td>
                <td><Button variant="success" onClick={() => this.props.onMoreInfo(this.props.route._id)}>More
                    Info</Button>
                </td>
            </tr>
        );
    }
}
