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
    constructor(props) {
        super(props);

        this.state = {
            searchCriteria: {}
        };
    }

    onInputChanged(identifier, newValue) {
        const state = this.state;
        state.searchCriteria[identifier] = newValue;

        this.setState({...state});
        this.props.triggerFilterOnInput(this.state.searchCriteria);
    }

    createFilterCriteria(event, resolver) {
        return {inputValue: event.target.value, resolveAttribute: resolver}
    }

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
                            <StyledCell><Form.Control as="input" placeholder="Distance" type="text"
                                                      defaultValue={this.state.searchCriteria.distance ? this.state.searchCriteria.distance.inputValue : ""}
                                                      onInput={(event) => {
                                                          this.onInputChanged("distance", this.createFilterCriteria(event, (row) => row.kilometers + " km"));
                                                      }}/></StyledCell>
                            <StyledCell><Form.Control as="input" placeholder="Items" type="text"
                                                      defaultValue={this.state.searchCriteria.items ? this.state.searchCriteria.items.inputValue : ""}
                                                      onInput={(event) => {
                                                          this.onInputChanged("items", this.createFilterCriteria(event, (row) => String(row.items.length)))
                                                      }}/></StyledCell>
                            <StyledCell><Form.Control as="input" placeholder="Start" type="text"
                                                      defaultValue={this.state.searchCriteria.start ? this.state.searchCriteria.start.inputValue : ""}
                                                      onInput={(event) => {
                                                          this.onInputChanged("start", this.createFilterCriteria(event, (row) => row.items[0].origination.street))
                                                      }}/></StyledCell>
                            <StyledCell><Form.Control as="input" placeholder="End" type="text"
                                                      defaultValue={this.state.searchCriteria.end ? this.state.searchCriteria.end.inputValue : ""}
                                                      onInput={(event) => {
                                                          this.onInputChanged("end", this.createFilterCriteria(event, (row) => row.items[row.items.length - 1].destination.street))
                                                      }}/></StyledCell>
                            <StyledCell><Form.Control as="input" placeholder="Payment" type="text"
                                                      defaultValue={this.state.searchCriteria.payment ? this.state.searchCriteria.payment.inputValue : ""}
                                                      onInput={(event) => {
                                                          this.onInputChanged("payment", this.createFilterCriteria(event, (row) => row.minBid + ' €'))
                                                      }}/></StyledCell>
                            <StyledCell><StyledDeleteFilter variant="danger">Delete
                                Filters</StyledDeleteFilter></StyledCell>
                        </tr>
                        </thead>
                        <tbody>

                        {this.props.loadingDone ? this.props.data.map((route, i) => <RoutesRow key={i}
                                                                                               route={route}/>) :
                            <EmptyRow/>}
                        </tbody>
                    </StyledTable>
                </Container>
            </Page>
        );
    }
}
