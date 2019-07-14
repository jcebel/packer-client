import React from 'react';
import {VehicleImage} from './VehicleImage';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components/macro';
import {StyledCell} from './StyledCell';
import {AuctionStatusImage} from "./AuctionStatusImage";

export class RoutesRow extends React.Component {

    render() {
        const StyledInfoButton = styled(Button)`display:block`;
        return (
            <tr>
                <StyledCell><AuctionStatusImage route={this.props.route} driverID={this.props.driverID} biddingState={this.props.biddingState} scale={this.props.scale}/></StyledCell>
                <StyledCell><VehicleImage vehicleType={this.props.route.vehicleType}/></StyledCell>
                <StyledCell>{`${this.props.route.meters / 1000} km`}</StyledCell>
                <StyledCell>{this.props.route.items.length}</StyledCell>
                <StyledCell>{this.props.route.collect[0].street}</StyledCell>
                <StyledCell>{this.props.route.deliver[this.props.route.deliver.length - 1].street}</StyledCell>
                <StyledCell>
                    {this.props.route.currentBid} €
                </StyledCell>
                <StyledCell><StyledInfoButton variant="success" href={`/route/${this.props.route._id}`}>More Info</StyledInfoButton>
                </StyledCell>
            </tr>
        );
    }
}
