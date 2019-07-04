import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GoogleMaps from '../components/GoogleMaps'
import {RouteDetails} from "../components/RouteDetails";
import {PackageList} from "../components/PackageList";
import {BiddingInformation} from "../components/BiddingInformation";
import {RouteService} from "../services/RouteService";
import Page from "../components/Page";

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
                    <Row style= {rowStyle} >
                        <Col sm={8}>
                            <Card style={rowStyle}>
                                <GoogleMaps route={mockedRoute}/>
                            </Card>
                        </Col>
                        <Col>
                            <RouteDetails route={this.state.route}/>
                            <PackageList route={this.state.route}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <BiddingInformation route={this.state.route}/>
                        </Col>
                    </Row>
                </Container>
            </Page>
        );
    }
}