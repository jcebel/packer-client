import React from 'react';
import {VehicleImage} from './VehicleImage';
import Button from 'react-bootstrap/Button';

export class RoutesRow extends React.Component{


    render() {
        return(
            <tr>
                <td><VehicleImage type={this.props.route.type}/></td>
                <td>{this.props.route.distance}</td>
                <td>{this.props.route.numberOfItems}</td>
                <td>{this.props.route.start}</td>
                <td>{this.props.route.end}</td>
                <td>{this.props.route.payment}</td>
                <td><Button variant="success" onClick={() => this.props.onMoreInfo(this.props.route._id)}>More Info</Button></td>
            </tr>
        )
    }
}