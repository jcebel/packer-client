import React, { Component } from 'react';
import {Table} from "react-bootstrap";

class PackageList extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <p>
                <h4>Package List</h4>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Weight</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dish Set</td>
                        <td>Medium</td>
                        <td>Heavy</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Smartphone</td>
                        <td>Small</td>
                        <td>Light</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Wine Bottle</td>
                        <td>Medium</td>
                        <td>Light</td>
                    </tr>
                    </tbody>
                </Table>
            </p>
        );
    }

}

export default PackageList;