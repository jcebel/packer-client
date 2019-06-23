import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GoogleMaps from '../components/GoogleMaps'
import RouteDetails from "../components/RouteDetails";
import PackageList from "../components/PackageList";
import BiddingInformation from "../components/BiddingInformation";
import RouteService from "../services/RouteService";



const mapStyle = {
    width: '100%',
    height: '100%',
};

const rowStyle = {
    height: '350px',
};

export class BiddingProcessView extends Component{

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.setState({
            loading: false
        });
        let id = "5d0a3e2893aa731d20e2b26a";
        RouteService.getRoute(id).then((data) => {
            this.setState({
                route: data,
                loading: false
            });
            console.log(this.state.route);
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <Container>
                <Row style= {rowStyle} >
                    <Col sm={8}>
                        <Card style={rowStyle}>
                            Map outcommented to be able to work offline
                            {/*<GoogleMaps/>*/}
                        </Card>
                    </Col>
                    <Col>
                        <RouteDetails route={this.state.route}
                        />
                        <PackageList/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <BiddingInformation/>
                    </Col>
                </Row>
            </Container>

        );
    }

}