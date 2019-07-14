import React from 'react';
import {DeliveryGoodService} from "../services/DeliveryGoodService";
import {DeliveryDetails} from "../components/DeliveryDetails";
import {Col, Container, Row} from "react-bootstrap";
import {Page} from "../components/Page";
import DeliveryGoodMap from "../components/DeliveryGoodMap";
import {StatusBadge} from "../components/StatusBadge";
import Geocode from "react-geocode";

const currentLocation = {
    street: "Ludwigstraße",
    houseNumber: "27",
    postalCode: "80539",
    city: "München"
};

export class DeliveryDetailsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: {},
            senderAddress: {},
            recipientAddress: {},
            currentLocation: {}
        };
        Geocode.setApiKey("AIzaSyAf7aIGVns1ktVf5sw__NGaygucuRsqCiw");
    };

    componentWillMount() {
        this.setState({
            loading: true
        });
        this.refreshDelGoodData();
    }

    refreshDelState(){
        let id = this.props.match.params.id;
        DeliveryGoodService.getDeliveryState(id).then((deliveryState) => {
            this.setState({
                deliveryState: deliveryState.deliveryState
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    refreshDelGoodData(){
        let id = this.props.match.params.id;
        DeliveryGoodService.getDeliveryGood(id).then((data) => {
            this.getCoordinates(data);
            this.setState({
                data: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    getCoordinates(data){
        Geocode.fromAddress(this.createAddress(data.deliverygood.origination)).then(resp => {
            const { lat, lng } = resp.results[0].geometry.location;
            this.setState({
                senderAddress: {
                    lat: lat,
                    lng: lng
                }
            })
        });
        Geocode.fromAddress(this.createAddress(data.deliverygood.destination)).then(resp => {
            const { lat, lng } = resp.results[0].geometry.location;
            this.setState({
                recipientAddress: {
                    lat: lat,
                    lng: lng
                }
            })
        });
        Geocode.fromAddress(this.createAddress(currentLocation)).then(resp => {
            const { lat, lng } = resp.results[0].geometry.location;
            this.setState({
                currentLocation: {
                    lat: lat,
                    lng: lng
                }
            })
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.refreshDelState(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    createAddress(element) {
        return element.street + " " + element.houseNumber + ", " + element.postalCode + " " + element.city;
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <Page activetab="delivery">
                <Container>
                    <span className="h2">
                        {this.state.data.deliverygood.name}
                        {" "}
                        <StatusBadge deliveryState={this.state.deliveryState}/>
                    </span>
                    <p/>
                    <Row>
                        <Col sm={8} className="d-flex">
                            <DeliveryGoodMap sender={this.state.senderAddress}
                                             recipient={this.state.recipientAddress}
                                            currentLoc={this.state.currentLocation}/>
                        </Col>
                        <Col className="d-flex ml-2">
                            <DeliveryDetails loading={this.state.loading} data={this.state.data}/>
                        </Col>
                    </Row>
                </Container>
            </Page>
        );
    }
}