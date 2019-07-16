import React from 'react';
import {DeliveryGoodService} from '../services/DeliveryGoodService';
import {DeliveryDetails} from '../components/DeliveryDetails';
import {Col, Container, Row} from 'react-bootstrap';
import {Page} from '../components/Page';
import DeliveryGoodMap from '../components/DeliveryGoodMap';
import {StatusBadge} from '../components/StatusBadge';
import Geocode from 'react-geocode';
import {Error} from '../components/Error';

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
            currentLocation: {},
            noDriver: true
        };
        Geocode.setApiKey("AIzaSyAf7aIGVns1ktVf5sw__NGaygucuRsqCiw");
    };

    componentWillMount() {
        this.setState({
            loading: true
        });
        this.refreshDelGoodData();
        this.refreshDelState();
    }

    componentDidMount() {
        this.interval = setInterval(() => this.refreshDelState(), 5000);
        this.interval2 = setInterval(() => this.refreshDelGoodData(), 30000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.interval2)
    }

    refreshDelState(){
        let id = this.props.match.params.id;
        DeliveryGoodService.getDeliveryState(id).then((deliveryState) => {
            if(this.state.deliveryState !== deliveryState.deliveryState) {
                this.setState({
                    deliveryState: deliveryState.deliveryState
                });
            }
            if(deliveryState.deliveryState === "Waiting for Routing" || deliveryState.deliveryState === "In Bidding Process"){
                this.setState({
                    noDriver: true
                });
            } else{
                this.setState({
                    noDriver: false
                });
            }
        }).catch((e) => {
            this.setState({error: e});
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
            this.setState({error: e});
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

    createAddress(element) {
        return element.street + " " + element.houseNumber + ", " + element.postalCode + " " + element.city;
    }

    render() {
        if(this.state.error){
            return <Error message={this.state.error}/>
        }
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <Page activetab="delivery">
                <Container>
                    <Row>
                        <Col>
                            <span className="h2">
                                {this.state.data.deliverygood.name}
                                {" "}
                                <StatusBadge deliveryState={this.state.deliveryState}/>
                            </span>
                        </Col>
                        <Col className="text-right">
                            <div>
                                <b>Delivery Date:</b> {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(this.state.data.deliverygood.deliveryDate))}
                            </div>
                        </Col>
                    </Row>
                    <p/>
                    <Row>
                        <Col sm={8} className="d-flex">
                            <DeliveryGoodMap sender={this.state.senderAddress}
                                             recipient={this.state.recipientAddress}
                                            currentLoc={this.state.currentLocation}/>
                        </Col>
                        <Col className="d-flex ml-2">
                            <DeliveryDetails loading={this.state.loading}
                                             data={this.state.data}
                                             noDriver={this.state.noDriver}/>
                        </Col>
                    </Row>
                </Container>
            </Page>
        );
    }
}