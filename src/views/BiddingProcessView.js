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
        let id = "5d113c9630a226405c460868";
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
                            <BiddingInformation route={this.state.route} onSubmit={(id) => this.submitBidByID(id)}/>
                        </Col>
                    </Row>
                </Container>
            </Page>
        );
    }

    submitBidByID(id){
        alert("Bid made for " + id);
    }


}