import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import GoogleMaps from '../components/GoogleMaps'
import {RouteDetails} from "../components/RouteDetails";
import {PackageList} from "../components/PackageList";
import {BiddingInformation} from "../components/BiddingInformation";
import {RouteService} from "../services/RouteService";
import Page from "../components/Page";
import UserService from "../services/UserService";
import styled from 'styled-components/macro';

const StyledRow = styled(Row)`height:"350px"`;
const StyledCard = styled(Card)`height:"350px"`;

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
        this.refreshRouteData();

    }

    refreshRouteData(){
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
        var mockedRoute = {
            origin: 'Regensburg HBF',
            destination: 'Leiherkasten',
            waypoints: ['Kehlheim', 'Elsendorf', 'Pfaffenhofen'],
            travelMode: 'Driving'
        };

        return (
            <Page activetab="driver">
                <Container>
                    <StyledRow>
                        <Col sm={8}>
                            <StyledCard>
                                <GoogleMaps route={mockedRoute}/>
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
                    </Row>
                </Container>
            </Page>
        );
    }

    submitBidByID(id, newBid) {
        console.log(UserService.getCurrentUser());
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
            }).catch((e) => {
                console.error(e);
            });
        }).catch((e) => {
            console.error(e);
        });
    }

}