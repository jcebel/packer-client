import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import VehicleDropdown from './VehicleDropdown';
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'

export default class RoutesList extends React.Component {
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
                    <tr>
                        <td><Image src="Images/van.svg"/></td>
                        <td>22,5 km</td>
                        <td>30</td>
                        <td>Some Street</td>
                        <td>Other Street</td>
                        <td>40€</td>
                        <td><Button variant="success">More Info</Button></td>
                    </tr>
                    <tr>
                        <td><Image src="Images/car.svg"/></td>
                        <td>30 km</td>
                        <td>15</td>
                        <td>New Street</td>
                        <td>Main Street</td>
                        <td>30€</td>
                        <td><Button variant="success">More Info</Button></td>
                    </tr>
                    <tr>
                        <td><Image src="Images/bike.svg"/></td>
                        <td>10 km</td>
                        <td>5</td>
                        <td>Some Road</td>
                        <td>Funny Street</td>
                        <td>20€</td>
                        <td><Button variant="success">More Info</Button></td>
                    </tr>
                </tbody>
            </Table>
            </Container>
        );
    }
}