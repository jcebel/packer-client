import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import VehicleDropdown from './VehicleDropdown';
import Form from 'react-bootstrap/Form';
import {RoutesRow} from './RoutesRow';
import Page from './Page';
import {EmptyRow} from './EmptyRow'
import Container from "react-bootstrap/Container";
import {StyledCell} from './StyledCell';
import styled from 'styled-components/macro';

export class RoutesList extends React.Component {
    // TODO Define Css Stylings!


    render() {

        const StyledDeleteFilter = styled(Button)`width:max-content`;
        const StyledTable = styled(Table)`vertical-align:middle;`;
        return (
            <Page>
                <Container>
                    <StyledTable>
                        <thead>
                        <tr>
                            <StyledCell><VehicleDropdown/></StyledCell>
                            <StyledCell><Form.Control as="input" placeholder="Distance" type="text"/></StyledCell>
                            <StyledCell><Form.Control as="input" placeholder="Items" type="text"/></StyledCell>
                            <StyledCell><Form.Control as="input" placeholder="Start" type="text"/></StyledCell>
                            <StyledCell><Form.Control as="input" placeholder="End" type="text"/></StyledCell>
                            <StyledCell><Form.Control as="input" placeholder="Payment" type="text"/></StyledCell>
                            <StyledCell><StyledDeleteFilter variant="danger">Delete Filters</StyledDeleteFilter></StyledCell>
                        </tr>
                        </thead>
                        <tbody>

                        {this.props.loadingDone ? this.props.data.map((route, i) => <RoutesRow key={i} route={route}/>) :
                            <EmptyRow/>}
                        </tbody>
                    </StyledTable>
                </Container>
            </Page>
        );
    }
}
