import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import GoogleMaps from '../components/GoogleMaps'
import {RouteDetails} from "../components/RouteDetails";
import {PackageList} from "../components/PackageList";
import {BiddingInformation} from "../components/BiddingInformation";
import {RouteService} from "../services/RouteService";
import {Page} from "../components/Page";
import styled from 'styled-components/macro';
import {UserService} from "../services/UserService";

const StyledRow = styled(Row)`height:"350px"`;
const StyledCard = styled(Card)`height:"350px"`;

export class BiddingProcessView extends React.Component{

    constructor(props) {
        super(props);

        UserService.getDriverId().then((data) => {
            this.state = {
                loading: false,
                route: {},
                driverID: data
            };
        }).catch((e) => {
            console.error(e);
        });
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        this.refreshRouteData();
    }

    refreshRouteData(){
        let id = this.props.match.params.id;
        RouteService.getRoute(id).then((data) => {
            this.setState({
                route: data,
                loading: false,
                driverID: this.state.driverID
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.refreshRouteData(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    getBiddingStatusImage(){
        const currentBid = this.state.route.currentBid;
        const ownBids = this.state.route.auctionBids.filter(bid => bid.owner === this.state.driverID);
        let lowestBid;
        if (ownBids.length === 0){
            lowestBid = currentBid + 1;
        } else{
            lowestBid = ownBids.reduce(function (a, b) { return a.bid < b.bid ? a.bid : b.bid; }).bid;
        }
        const auctionOver = this.state.route.auctionOver;

        if(auctionOver && (currentBid === lowestBid)){
            return <img
                src="/Images/Winner.jpg"
                width="80%"
                height="80%"
                alt="Winner"
            />;
        } else if(!auctionOver && (currentBid === lowestBid)){
            return <img
                src="/Images/Green Checkmark.png"
                width="80%"
                height="80%"
                alt="CheckBox"
            />;
        } else if(auctionOver && (currentBid < lowestBid)){
            return <img
                src="/Images/Thumps down.svg"
                width="80%"
                height="80%"
                alt="Thumps down"
            />;
        } else if(!auctionOver && (currentBid < lowestBid)){
            return <img
                src="/Images/Red Cross.png"
                width="60%"
                height="80%"
                alt="Red Cross"
            />;
        }
    }


    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Page activetab="driver">
                <Container>
                    <StyledRow>
                        <Col sm={8}>
                            <StyledCard>
                                <GoogleMaps route={this.state.route}/>
                            </StyledCard>
                        </Col>
                        <Col>
                            <RouteDetails route={this.state.route}/>
                            <PackageList route={this.state.route}/>
                        </Col>
                    </StyledRow>
                    <Row>
                        <Col sm={8}>
                            <BiddingInformation route={this.state.route} onSubmit={(id, newBid) => this.submitBidByID(id, newBid)}/>
                        </Col>
                        <Col>
                            {this.getBiddingStatusImage()}
                        </Col>
                    </Row>
                </Container>
            </Page>
        );
    }

    submitBidByID(id, newBid) {
        let route = {
            "_id": id,
            "bid": newBid
        };
        RouteService.updateRoute(route).then(() => {
            RouteService.getRoute(id).then((data) => {
                this.setState({
                    route: data,
                    loading: false,
                    driverID: this.state.driverID
                });
            }).catch((e) => {
                console.error(e);
            });
        }).catch((e) => {
            console.error(e);
        });
    }

}