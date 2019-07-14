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
            deleted: false
        };
        this.onInputChanged = this.onInputChanged.bind(this);
        this.deleteFilters = this.deleteFilters.bind(this);
    }

    filter(data, filterCriteria) {
        const doesAttributeMatch = (criteriaName, row) => {
            const attribute = filterCriteria[criteriaName].resolveAttribute(row);
            if (attribute) {
                return attribute.toLowerCase().startsWith(filterCriteria[criteriaName].inputValue.toLowerCase());
            }
            return false;
        };
        return data.filter((row) => {
            const array = Object.getOwnPropertyNames(filterCriteria).map((criteria) =>
                doesAttributeMatch(criteria, row));
            return array.reduce((total, currentValue) => total && currentValue, true);
        });
    };

    onInputChanged(identifier, newValue) {
        const filterCriteria = {...this.state.searchCriteria};
        filterCriteria[identifier] = newValue;
        const filteredData = this.filter(this.props.data, filterCriteria);
        this.setState({
            data: filteredData,
            searchCriteria: filterCriteria
        });
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.loadingDone && this.props.loadingDone) {
            this.setState({data: this.props.data});
        } else if (!prevProps.dirtyData && this.props.dirtyData) {
            console.log('Should now rerender with filtering');
            this.setState((state,props) => {return {data: this.filter(props.data, state.searchCriteria)}})
        }
    }

    deleteFilters() {
        this.setState(function (state, props) {
            return ({data: props.data, searchCriteria: {}, deleted: !state.deleted});
        })
    }

    render() {
        return (
            <Page activetab="driver">
                <Container>
                    <StyledTable>
                        <thead>
                        <tr>
                            <StyledCell>Auction Status</StyledCell>
                            <StyledCell><VehicleDropdown triggerFilter={this.onInputChanged}
                                                         resolver={(row) => row.vehicleType + ".svg"}/></StyledCell>
                            <StyledCell>
                                <FilterInput
                                    triggerUpdate={this.state.deleted}
                                    placeholder="Distance"
                                    triggerFilter={this.onInputChanged}
                                    resolver={(row) => row.meters / 1000 + " km"}
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
                                    resolver={(row) => row.collect[0].street}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    triggerUpdate={this.state.deleted}
                                    placeholder="End"
                                    triggerFilter={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => row.deliver[row.deliver.length - 1].street}
                                />
                            </StyledCell>
                            <StyledCell>
                                <FilterInput
                                    triggerUpdate={this.state.deleted}
                                    placeholder="Payment"
                                    triggerFilter={(identifier, searchCriteria) => this.onInputChanged(identifier, searchCriteria)}
                                    resolver={(row) => row.currentBid + ' €'}
                                />
                            </StyledCell>
                            <StyledCell>
                                <StyledDeleteFilter variant="danger" onClick={this.deleteFilters}>Delete
                                    Filters</StyledDeleteFilter>
                            </StyledCell>
                        </tr>
                        </thead>
                        <tbody>

                        {this.props.loadingDone ? this.state.data.map((route, i) => <RoutesRow key={route._id}
                                                                                               route={route}
                                                                                               scale={this.props.scale}
                                                                                               driverID={this.props.driverID}/>) :
                            <EmptyRow/>}
                        </tbody>
                    </StyledTable>
                </Container>
            </Page>
        );
    }
}
