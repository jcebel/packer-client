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

function dropDown(eventKey, child, itemComparer) {
    return {eventKey: eventKey, child: child, compareItemBased: itemComparer};
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
    dropDown("upp20", "more than 20 km", (attrValue) => {
        return (attrValue >= 20)
    })
);
const numberFilterItems = [];
numberFilterItems.push(
    dropDown("low05", "0 - 5 Items", (attrValue) => {
        return (attrValue >= 0 && attrValue < 5)
    }),
    dropDown("low10", "5 - 10 Items", (attrValue) => {
        return (attrValue >= 5 && attrValue < 10)
    }),
    dropDown("low15", "10 - 15 Items", (attrValue) => {
        return (attrValue >= 10 && attrValue < 15)
    }),
    dropDown("upp15", "more than 15 Items", (attrValue) => {
        return (attrValue >= 15)
    })
);

const paymentFilterItems = [];
paymentFilterItems.push(
    dropDown("low20", "0 - 20 €", (attrValue) => {
        return (attrValue >= 0 && attrValue < 20)
    }),
    dropDown("low10", "20 - 40 €", (attrValue) => {
        return (attrValue >= 20 && attrValue < 40)
    }),
    dropDown("low15", "40 - 60 €", (attrValue) => {
        return (attrValue >= 40 && attrValue < 60)
    }),
    dropDown("upp15", "more than 60 €", (attrValue) => {
        return (attrValue >= 60)
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
                                <DropdownFilter items={vehicleTypeItems}
                                                identifier="vehicleType"
                                                title="Vehicle Type"
                                                resolver={(row) => row.vehicleType + ".svg"}
                                                compareTo={(attribute, inputValue) => {
                                                    return attribute.toLowerCase().startsWith(inputValue.toLowerCase());
                                                }}
                                                triggerFilter={this.onInputChanged}/>
                            </StyledCell>
                            <StyledCell>
                                <DropdownFilter items={distanceFilterItems}
                                                identifier="distance"
                                                title="Distance"
                                                resolver={(row) => row.meters / 1000}
                                                compareTo={(attribute, inputValue) => {
                                                    return distanceFilterItems.find((item) => {
                                                        return (item.eventKey === inputValue)
                                                    }).compareItemBased(attribute);
                                                }}
                                                triggerFilter={this.onInputChanged}/>
                            </StyledCell>
                            <StyledCell>
                                <DropdownFilter items={numberFilterItems}
                                                identifier="items"
                                                title="Items"
                                                resolver={(row) => String(row.items.length)}
                                                compareTo={(attribute, inputValue) => {
                                                    return numberFilterItems.find((item) => {
                                                        return (item.eventKey === inputValue)
                                                    }).compareItemBased(attribute);
                                                }}
                                                triggerFilter={this.onInputChanged}/>
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
                                <DropdownFilter items={paymentFilterItems}
                                                identifier="payment"
                                                title="Payment"
                                                resolver={(row) => row.currentBid}
                                                compareTo={(attribute, inputValue) => {
                                                    return paymentFilterItems.find((item) => {
                                                        return (item.eventKey === inputValue)
                                                    }).compareItemBased(attribute);
                                                }}
                                                triggerFilter={this.onInputChanged}/>
                            </StyledCell>
                            <StyledCell>
                                <StyledDeleteFilter variant="danger" onClick={this.deleteFilters}>Delete
                                    Filters</StyledDeleteFilter>
                            </StyledCell>
                        </tr>
                        </thead>
                        <tbody>

                        {this.props.loadingDone ? (
                                this.state.data.length > 0 ?
                                    this.state.data.map((route) => {
                                        return <RoutesRow key={route._id}
                                                          route={route}
                                                          scale={imageSize}
                                                          biddingState={route.auctionState}
                                                          driverID={this.props.driverID}/>;
                                    }) : <EmptyRow text={"There are no Routes available for today, yet..."}/>)
                            : <EmptyRow text={"We are still loading...."}/>}
                        </tbody>
                    </StyledTable>
                </Container>
            </Page>
        );
    }
}


