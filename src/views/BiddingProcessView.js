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
import {AuctionStatusImage} from "../components/AuctionStatusImage";

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
                            <BiddingInformation route={this.state.route} driverID={this.state.driverID} onSubmit={(id, newBid) => this.submitBidByID(id, newBid)}/>
                        </Col>
                        <Col>
                            <AuctionStatusImage route={this.state.route} driverID={this.state.driverID} scale={"200px"}/>
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