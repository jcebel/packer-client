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
import {AuctionStatusDropdown} from "./AuctionStatusDropdown";
import {AuctionStatusImage} from "./AuctionStatusImage";
import Image from "react-bootstrap/Image";
import {DropdownFilter} from "./DropdownFilter";

const StyledDeleteFilter = styled(Button)`width:max-content`;
const StyledTable = styled(Table)`vertical-align:middle;`;

const imageSize = "65px";

function dropDown(eventKey, child) {
    return {eventKey: eventKey, child: child};
}

const vehicleTypeItems = [];
vehicleTypeItems.push(dropDown("bike", <Image src="Images/bike.svg"/>), dropDown("car", <Image
    src="Images/car.svg"/>), dropDown("van", <Image src="Images/van.svg"/>));


const auctionFilterItems = [];
auctionFilterItems.push(
    dropDown("winner", <Image src="Images/winner.png" height={imageSize}/>),
    dropDown("looser", <Image src="Images/looser.png" height={imageSize}/>),
    dropDown("leader", <Image src="Images/leader.png" height={imageSize}/>),
    dropDown("nonleader", <Image src="Images/nonleader.png" height={imageSize}/>));


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
        const filteredData = this.filter(this.state.data, filterCriteria);
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
            this.setState((state, props) => {
                return {data: this.filter(props.data, state.searchCriteria)}
            })
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
                            <StyledCell>
                                <DropdownFilter items={auctionFilterItems} identifer="auctionStatus"
                                                title="Auction Status"
                                                resolver={(row) => row.auctionState + ".png"}
                                                compareTo={() => {
                                                }}
                                                triggerFilter={this.onInputChanged}/>
                            </StyledCell>
                            <StyledCell>
                                <DropdownFilter items={vehicleTypeItems} identifer="vehicleType" title="Vehicle Type"
                                                resolver={(row) => row.vehicleType + ".svg"}
                                                compareTo={() => {
                                                }}
                                                triggerFilter={this.onInputChanged}/>
                            </StyledCell>
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

                        {this.props.loadingDone ? this.state.data.map((route) => {
                                route.auctionState = AuctionStatusImage.getBidStatus(route, this.props.driverID);
                                return <RoutesRow key={route._id}
                                                  route={route}
                                                  scale={imageSize}
                                                  biddingState={route.auctionState}
                                                  driverID={this.props.driverID}/>;
                            }) :
                            <EmptyRow/>}
                        </tbody>
                    </StyledTable>
                </Container>
            </Page>
        );
    }
}
