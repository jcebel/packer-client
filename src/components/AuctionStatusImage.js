import React from 'react';

export class AuctionStatusImage extends React.Component {

    render() {
        const currentBid = this.props.route.currentBid;
        const ownBids = this.props.route.auctionBids.filter(bid => bid.owner === this.props.driverID);
        let lowestBid;
        if (ownBids.length === 0){
            lowestBid = currentBid + 1;
        } else{
            lowestBid = ownBids.reduce(function (a, b) { return a.bid < b.bid ? a.bid : b.bid; });
        }
        const auctionOver = this.props.route.auctionOver;

        if(auctionOver && (currentBid === lowestBid)){
            return <img
                src="/Images/Winner.jpg"
                height={this.props.scale}
                alt="Winner"
            />;
        } else if(!auctionOver && (currentBid === lowestBid)){
            return <img
                src="/Images/Green Checkmark.png"
                height={this.props.scale}
                alt="CheckBox"
            />;
        } else if(auctionOver && (currentBid < lowestBid)){
            return <img
                src="/Images/Thumps down.png"
                height={this.props.scale}
                alt="Thumps down"
            />;
        } else if(!auctionOver && (currentBid < lowestBid)) {
            return <img
                src="/Images/Red Cross.jpg"
                height={this.props.scale}
                alt="Red Cross"
            />;
        }
    }
}