import React from 'react';
import {AuctionStatusService} from "../services/AuctionStatusService";

export class AuctionStatusImage extends React.Component {

    render() {
        let auctionStatus;
        if (this.props.biddingState === undefined) {
            auctionStatus = AuctionStatusService.getBidStatus(this.props.route, this.props.driverID);
        } else {
            auctionStatus = this.props.biddingState;
        }

        if (auctionStatus === "winner") {
            return <img
                src="/Images/winner.png"
                height={this.props.scale}
                alt="Winner"
                title="Congratulation, you won the auction!"
            />;
        } else if (auctionStatus === "leader") {
            return <img
                src="/Images/leader.png"
                height={this.props.scale}
                alt="CheckBox"
                title="You are currently leading the auction!"
            />;
        } else if (auctionStatus === "looser") {
            return <img
                src="/Images/looser.png"
                height={this.props.scale}
                alt="Thumps down"
                title="Your bid was to high. You lost the auction!"
            />;
        } else if (auctionStatus === "nonleader") {
            return <img
                src="/Images/nonleader.png"
                height={this.props.scale}
                alt="Red Cross"
                title="You are currently not leading the auction. Enter a lower bid to become the leader!"
            />;
        }
    }
}