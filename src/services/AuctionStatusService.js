export class AuctionStatusService {
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
            return "winner";
        } else if(!auctionOver && (currentBid === lowestBid)){
            return "leader";
        } else if(auctionOver && (currentBid < lowestBid)){
            return "looser";
        } else if(!auctionOver && (currentBid < lowestBid)) {
            return "nonleader";
        }
    }
}