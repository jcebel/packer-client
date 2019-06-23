import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import VehicleDropdown from './VehicleDropdown';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import {RoutesRow} from './RoutesRow';

export class RoutesList extends React.Component {
    // TODO Define Css Stylings!
    // TODO Create the row as a single component
    render() {
        return (
            <Container>
                <Table>
                    <thead>
                    <tr>
                        <td><VehicleDropdown/></td>
                        <td><Form.Control as="input" placeholder="Distance" type="text"/></td>
                        <td><Form.Control as="input" placeholder="Number of Items" type="text"/></td>
                        <td><Form.Control as="input" placeholder="Start" type="text"/></td>
                        <td><Form.Control as="input" placeholder="End" type="text"/></td>
                        <td><Form.Control as="input" placeholder="Payment" type="text"/></td>
                        <td><Button variant="danger">Delete Filters</Button></td>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.data.map((route, i) => <RoutesRow key={i} route={route}
                                                                  onMoreInfo={(id) => this.props.onMoreInfo(id)}/>)}
                    </tbody>
                </Table>
            </Container>
        );
    }
}
