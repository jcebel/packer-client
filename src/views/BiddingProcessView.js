import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GoogleMaps from '../components/GoogleMaps'
import {RouteDetails} from "../components/RouteDetails";
import {PackageList} from "../components/PackageList";
import {BiddingInformation} from "../components/BiddingInformation";
import {RouteService} from "../services/RouteService";
import Page from "../components/Page";



const mapStyle = {
    width: '100%',
    height: '100%',
};

const rowStyle = {
    height: '350px',
};

export class BiddingProcessView extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            route: {}
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        let id = this.props.match.params.id;
        RouteService.getRoute(id).then((data) => {
            this.setState({
                route: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <Page>
                <Container>
                    <Row style= {rowStyle} >
                        <Col sm={8}>
                            <Card style={rowStyle}>
                                Map outcommented to be able to work offline
                                {/*<GoogleMaps/>*/}
                            </Card>
                        </Col>
                        <Col>
                            <RouteDetails route={this.state.route}/>
                            <PackageList route={this.state.route}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <BiddingInformation route={this.state.route} onSubmit={(id, newBid) => this.submitBidByID(id, newBid)}/>
                        </Col>
                    </Row>
                </Container>
            </Page>
        );
    }

    submitBidByID(id, newBid){
        if(isNaN(newBid)){
            alert("Please enter a Number to sumbit a new bid");
        } else{
            var auctionBids = [];
            var currentBid = -1;
            RouteService.getRoute(id).then((data) => {
                auctionBids = data.auctionBids;
                currentBid = auctionBids.reduce(function (a, b) { return a.bid < b.bid ? a.bid : b.bid; });
                if( newBid >= currentBid){
                    alert("Your bid must be under " + currentBid + " €.");
                } else{
                    let route = {
                        "_id": id,
                        "owner": "5d19fdb047ec6c05280c8541",
                        "bid": newBid
                    };
                    RouteService.updateRoute(route).then(() => {
                        RouteService.getRoute(id).then((data) => {
                            this.setState({
                                route: data,
                                loading: false
                            });
                            alert("Route successfully updated");
                            console.log("Route successfully updated");
                        }).catch((e) => {
                            console.error(e);
                        });
                    }).catch((e) => {
                        console.error(e);
                    });
                }
            }).catch((e) => {
                console.error(e);
            });


        }



    }


}