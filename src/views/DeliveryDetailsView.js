import React, {Suspense} from 'react';
import {DeliveryGoodService} from '../services/DeliveryGoodService';
import {DeliveryDetails} from '../components/DeliveryDetails';
import {Col, Container, OverlayTrigger, Row, Tooltip} from 'react-bootstrap';
import {Page} from '../components/Page';
// import DeliveryGoodMap from '../components/DeliveryGoodMap';
import {StatusBadge} from '../components/StatusBadge';
import Geocode from 'react-geocode';
import {Error} from '../components/Error';


const DeliveryGoodMap = React.lazy(() => import('../components/DeliveryGoodMap'));

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
        this.refreshDelStatus();
    }

    componentDidMount() {
        this.interval = setInterval(() => this.refreshDelStatus(), 5000);
        this.interval2 = setInterval(() => this.refreshDelGoodData(), 30000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.interval2)
    }

    refreshDelStatus(){
        let id = this.props.match.params.id;
        DeliveryGoodService.getDeliveryStatus(id).then((deliveryStatus) => {
            if(this.state.deliveryState !== deliveryStatus.deliveryState) {
                this.setState({
                    deliveryState: deliveryStatus.deliveryState
                });
            }
            if(deliveryStatus.deliveryState === "Waiting for Routing" || deliveryStatus.deliveryState === "In Bidding Process"){
                this.setState({
                    noDriver: true
                });
            } else{
                this.setState({
                    noDriver: false
                });
            }
            this.setCurrentLocation(deliveryStatus);
        }).catch((e) => {
            this.setState({error: e});
            console.error(e);
        });
    }

    refreshDelGoodData(){
        let id = this.props.match.params.id;
        DeliveryGoodService.getDeliveryGood(id).then((data) => {
            this.setState({
                data: data,
                loading: false
            });
            this.getCoordinates(data.deliverygood.origination, "senderAddress");
            this.getCoordinates(data.deliverygood.destination, "recipientAddress");
        }).catch((e) => {
            this.setState({error: e});
            console.error(e);
        });
    }

    getCoordinates(address, key){
        Geocode.fromAddress(this.createAddress(address)).then(resp => {
            const { lat, lng } = resp.results[0].geometry.location;
            this.setState({
                [key]: {
                    lat: lat,
                    lng: lng
                }
            })
        });
    }

    setCurrentLocation(deliveryStatus){
        if(deliveryStatus.deliveryState === "In Delivery"){
            this.setState({
                currentLocation: deliveryStatus.currentLoc
            })
        } else{
            this.getCoordinates(deliveryStatus.currentLoc, "currentLocation");
        }
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
                            {/*<OverlayTrigger*/}
                            {/*    key="top"*/}
                            {/*    placement="top"*/}
                            {/*    overlay={*/}
                            {/*        <Tooltip id={"tooltip-top"}>*/}
                            {/*            If the map appears grey, please reload the page.*/}
                            {/*        </Tooltip>*/}
                            {/*    }*/}
                            {/*>*/}
                                <div>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <DeliveryGoodMap sender={this.state.senderAddress}
                                                 recipient={this.state.recipientAddress}
                                                 currentLoc={this.state.currentLocation}/>
                                    </Suspense>
                                </div>
                            {/*</OverlayTrigger>*/}

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