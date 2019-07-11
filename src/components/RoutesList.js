import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {VehicleDropdown} from './VehicleDropdown';
import {RoutesRow} from './RoutesRow';
import {Page} from './Page';
import {EmptyRow} from './EmptyRow'
import Container from "react-bootstrap/Container";
import {StyledCell} from './StyledCell';
import styled from 'styled-components/macro';
import {FilterInput} from './FilterInput';

const StyledDeleteFilter = styled(Button)`width:max-content`;
const StyledTable = styled(Table)`vertical-align:middle;`;

export class RoutesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            searchCriteria: {},
            deleted:false
        };
        this.onInputChanged = this.onInputChanged.bind(this);
        this.deleteFilters = this.deleteFilters.bind(this);
    }

    onInputChanged(identifier, newValue) {
        const doesAttributeMatch = (criteriaName, row) => {
            const attribute = filterCriteria[criteriaName].resolveAttribute(row);
            if (attribute) {
                return attribute.startsWith(filterCriteria[criteriaName].inputValue);
            }
            return false;
        };
        const filter = (data) => {
            return data.filter((row) => {
                const array = Object.getOwnPropertyNames(filterCriteria).map((criteria) =>
                    doesAttributeMatch(criteria, row));
                return array.reduce((total, currentValue) => total && currentValue, true);
            });
        };
        const filterCriteria = {...this.state.searchCriteria};
        filterCriteria[identifier] = newValue;
        if (filterCriteria) {
            const filteredData = filter(this.props.data);
            this.setState({
                data: filteredData,
                searchCriteria: filterCriteria
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.loadingDone && this.props.loadingDone) {
            this.setState({data: this.props.data});
        }
    }

    deleteFilters() {
        this.setState(function(state,props) {
            return ({data: props.data, searchCriteria: {}, deleted: !state.deleted });
        })
    }

    render() {

        return (
            <Page activetab="driver">
                <Container>
                    <StyledTable>
                        <thead>
                        <tr>
                            <StyledCell><VehicleDropdown triggerFilter={this.onInputChanged} resolver={(row) => row.vehicleType + ".svg"}/></StyledCell>
                            <StyledCell>
                                <FilterInput
                                    triggerUpdate={this.state.deleted}
                                    placeholder="Distance"
                                    triggerFilter={this.onInputChanged}
                                    resolver={(row) => row.kilometers + " km"}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    triggerUpdate={this.state.deleted}
                                    placeholder="Items"
                                    triggerFilter={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => String(row.items.length)}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    triggerUpdate={this.state.deleted}
                                    placeholder="Start"
                                    triggerFilter={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => row.items[0].origination.street}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    triggerUpdate={this.state.deleted}
                                    placeholder="End"
                                    triggerFilter={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => row.items[row.items.length - 1].destination.street}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    triggerUpdate={this.state.deleted}
                                    placeholder="Payment"
                                    triggerFilter={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => row.minBid + ' €'}
                                />
                            </StyledCell>
                            <StyledCell>
                                <StyledDeleteFilter variant="danger" onClick={this.deleteFilters}>Delete Filters</StyledDeleteFilter>
                            </StyledCell>
                        </tr>
                        </thead>
                        <tbody>

                        {this.props.loadingDone ? this.state.data.map((route, i) => <RoutesRow key={route._id}
                                                                                               route={route}/>) :
                            <EmptyRow/>}
                        </tbody>
                    </StyledTable>
                </Container>
            </Page>
        );
    }
}
