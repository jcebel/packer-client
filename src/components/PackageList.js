import React from 'react';
import {Table} from "react-bootstrap";
import {PackageListRow} from "./PackageListRow";
import {StyledHeaderCell} from "./StyledHeaderCell";

export class PackageList extends React.Component {

    render() {
        return (
            <div>
                <h4>Package List</h4>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <StyledHeaderCell><b>#</b></StyledHeaderCell>
                        <StyledHeaderCell>Item</StyledHeaderCell>
                        <StyledHeaderCell>Size</StyledHeaderCell>
                        <StyledHeaderCell>Weight</StyledHeaderCell>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.route.items.map((route, i) => <PackageListRow key={i} index={i + 1} route={route}/>)}
                    </tbody>
                </Table>
            </div>
        );
    }

}