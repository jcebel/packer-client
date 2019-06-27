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
import {FilterInput} from './FilterInput';

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

    createFilterCriteria(event) {
        return {inputValue: event.target.value, resolveAttribute: this.props.resolver}
    }

    /*
    <Form.Control as="input" placeholder="Distance" type="text"
                                                          defaultValue={this.state.searchCriteria.distance ? this.state.searchCriteria.distance.inputValue : ""}
                                                          onInput={(event) => {
                                                              this.onInputChanged("distance", this.createFilterCriteria(event, (row) => row.kilometers + " km"));
                                                          }}/>
     */


    render() {

        const StyledDeleteFilter = styled(Button)`width:max-content`;
        const StyledTable = styled(Table)`vertical-align:middle;`;
        return (
            <Page key="RoutesListPage">
                <Container>
                    <StyledTable>
                        <thead>
                        <tr>
                            <StyledCell><VehicleDropdown/></StyledCell>
                            <StyledCell>
                                <FilterInput
                                    identifier="distance"
                                    defaultValue={this.state.searchCriteria.distance ? this.state.searchCriteria.distance.inputValue : ""}
                                    placeholder="Distance"
                                    onInputChanged={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => row.kilometers + " km"}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    identifier="items"
                                    defaultValue={this.state.searchCriteria.items ? this.state.searchCriteria.items.inputValue : ""}
                                    placeholder="Items"
                                    onInputChanged={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => String(row.items.length)}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    identifier="start"
                                    defaultValue={this.state.searchCriteria.start ? this.state.searchCriteria.start.inputValue : ""}
                                    placeholder="Start"
                                    onInputChanged={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => row.items[0].origination.street}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    identifier="end"
                                    defaultValue={this.state.searchCriteria.end ? this.state.searchCriteria.end.inputValue : ""}
                                    placeholder="End"
                                    onInputChanged={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => row.items[row.items.length - 1].destination.street}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    identifier="payment"
                                    defaultValue={this.state.searchCriteria.payment ? this.state.searchCriteria.payment.inputValue : ""}
                                    placeholder="Payment"
                                    onInputChanged={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => row.minBid + ' €'}
                                />
                            </StyledCell>
                            <StyledCell>
                                <StyledDeleteFilter variant="danger">Delete Filters</StyledDeleteFilter>
                            </StyledCell>
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
