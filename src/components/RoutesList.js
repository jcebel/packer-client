import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {RoutesRow} from './RoutesRow';
import {Page} from './Page';
import {EmptyRow} from './EmptyRow'
import Container from "react-bootstrap/Container";
import {StyledCell} from './StyledCell';
import styled from 'styled-components/macro';
import {FilterInput} from './FilterInput';
import {AuctionStatusImage} from "./AuctionStatusImage";
import Image from "react-bootstrap/Image";
import {DropdownFilter} from "./DropdownFilter";

const StyledDeleteFilter = styled(Button)`width:max-content`;
const StyledTable = styled(Table)`vertical-align:middle;`;

const imageSize = "65px";

function dropDown(eventKey, child, itemResolver) {
    return {eventKey: eventKey, child: child, itemResolver: itemResolver};
}

const vehicleTypeItems = [];
vehicleTypeItems.push(
    dropDown("bike", <Image src="Images/bike.svg"/>),
    dropDown("car", <Image src="Images/car.svg"/>),
    dropDown("van", <Image src="Images/van.svg"/>));

const auctionFilterItems = [];
auctionFilterItems.push(
    dropDown("winner", <Image src="Images/winner.png" height={imageSize}/>),
    dropDown("looser", <Image src="Images/looser.png" height={imageSize}/>),
    dropDown("leader", <Image src="Images/leader.png" height={imageSize}/>),
    dropDown("nonleader", <Image src="Images/nonleader.png" height={imageSize}/>));

const distanceFilterItems = [];
distanceFilterItems.push(
    dropDown("low05", "0 - 5 km", (attrValue) => {
        return (attrValue >= 0 && attrValue < 5)
    }),
    dropDown("low10", "5 - 10 km", (attrValue) => {
        return (attrValue >= 5 && attrValue < 10)
    }),
    dropDown("low15", "10 - 15 km", (attrValue) => {
        return (attrValue >= 10 && attrValue < 15)
    }),
    dropDown("low20", "15 - 20 km", (attrValue) => {
        return (attrValue >= 15 && attrValue < 20)
    }),
    dropDown("upp20", "> 20 km", (attrValue) => {
        return (attrValue >= 20)
    })
);


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
                return filterCriteria[criteriaName].compareTo(attribute, filterCriteria[criteriaName].inputValue);
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
                                <DropdownFilter items={auctionFilterItems} identifier="auctionStatus"
                                                title="Auction Status"
                                                resolver={(row) => AuctionStatusImage.getBidStatus(row, this.props.driverID) + ".png"}
                                                compareTo={(attribute, inputValue) => {
                                                    return attribute.toLowerCase().startsWith(inputValue.toLowerCase());
                                                }}
                                                triggerFilter={this.onInputChanged}/>
                            </StyledCell>
                            <StyledCell>
                                <DropdownFilter items={vehicleTypeItems} identifier="vehicleType" title="Vehicle Type"
                                                resolver={(row) => row.vehicleType + ".svg"}
                                                compareTo={(attribute, inputValue) => {
                                                    return attribute.toLowerCase().startsWith(inputValue.toLowerCase());
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
