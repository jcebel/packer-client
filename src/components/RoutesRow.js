import React from 'react';
import {VehicleImage} from './VehicleImage';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components/macro';
import {StyledCell} from './StyledCell';

export class RoutesRow extends React.Component {

    render() {
        const StyledInfoButton = styled(Button)`display:block`;
        if(this.props.route.auctionBids.length > 1) {
            this.props.route.minBid = this.props.route.auctionBids.reduce(function (a, b) { return a.bid < b.bid ? a.bid : b.bid; })
        } else{
            this.props.route.minBid = this.props.route.auctionBids;

        }
        return (
            <tr>
                <StyledCell><VehicleImage vehicleType={this.props.route.vehicleType}/></StyledCell>
                <StyledCell>{`${this.props.route.kilometers} km`}</StyledCell>
                <StyledCell>{this.props.route.items.length}</StyledCell>
                <StyledCell>{this.props.route.items[0].origination.street}</StyledCell>
                <StyledCell>{this.props.route.items[this.props.route.items.length - 1 ].destination.street}</StyledCell>
                <StyledCell>
                    {this.props.route.minBid} €
                </StyledCell>
                <StyledCell><StyledInfoButton variant="success" href={`/route/${this.props.route._id}`}>More Info</StyledInfoButton>
                </StyledCell>
            </tr>
        );
    }
}