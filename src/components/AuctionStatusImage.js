import React from 'react';

export class AuctionStatusImage extends React.Component {

     static getBidStatus(route, driverID){
        const currentBid = route.currentBid;
        const ownBids = route.auctionBids.filter(bid => bid.owner === driverID);
        let lowestBid;
        if (ownBids.length === 0){
            lowestBid = currentBid + 1;
        } else if (ownBids.length === 1){
            lowestBid = ownBids[0].bid;
        } else{
            lowestBid = ownBids.reduce(function (a, b) { return a.bid < b.bid ? a.bid : b.bid; });
        }
        const auctionOver = route.auctionOver;

        if(auctionOver && (currentBid === lowestBid)){
            return "Winner";
        } else if(!auctionOver && (currentBid === lowestBid)){
            return "Leader";
        } else if(auctionOver && (currentBid < lowestBid)){
            return "Looser";
        } else if(!auctionOver && (currentBid < lowestBid)) {
            return "NoLeader";
        }
    }
    render() {
        let auctionStatus;
        if(this.props.biddingState === undefined) {
            auctionStatus = AuctionStatusImage.getBidStatus(this.props.route, this.props.driverID);
        } else{
            auctionStatus = this.props.biddingState;
        }

        if(auctionStatus === "Winner"){
            return <img
                src="/Images/winner.png"
                height={this.props.scale}
                alt="Winner"
                title="Auction Winner"
            />;
        } else if(auctionStatus === "Leader"){
            return <img
                src="/Images/leader.png"
                height={this.props.scale}
                alt="CheckBox"
                title="Current Auction Leader"
            />;
        } else if(auctionStatus === "Looser"){
            return <img
                src="/Images/looser.png"
                height={this.props.scale}
                alt="Thumps down"
                title="Auction Lost"
            />;
        } else if(auctionStatus === "NoLeader") {
            return <img
                src="/Images/nonLeader.png"
                height={this.props.scale}
                alt="Red Cross"
                title="Not Auction Leader"
            />;
        }
    }
}