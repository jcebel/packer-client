import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ButtonVehicleType} from "./ButtonVehicleType";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {BiddingConfirmationPopup} from "./BiddingConfirmationPopup";
import {AuctionStatusImage} from "./AuctionStatusImage";
import Button from "react-bootstrap/Button";
import {AuctionStatusService} from "../services/AuctionStatusService";
import Alert from "react-bootstrap/Alert";

export class BiddingInformation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            startedDriving: false
        };

        this.startDriving = this.startDriving.bind(this);
    }

    getPersonalLowestBid(route, driverID) {
        const ownBids = route.auctionBids.filter(bid => bid.owner === driverID);
        if (ownBids.length === 0) {
            return "No bids submitted";
        }
        if (ownBids.length === 1) {
            return ownBids[0].bid;
        } else {
            return ownBids.reduce(function (a, b) {
                return a.bid < b.bid ? a.bid : b.bid;
            });
        }
    }

    startDriving() {
        this.setState({startedDriving:true});
        this.props.startDriving();
    }

    isInDriving() {
        return this.state.startedDriving || ["In Delivery", "Delivered"].includes(this.props.route.items[0].deliveryState);
    }

    render() {
        return (
            <div>
                <h4>
                    Bidding Information
                </h4>
                <Container>
                    <Row>
                        <Col>
                            <div className="font-weight-bold">Global Lowest Bid</div>
                            <p>
                                {`${this.props.route.currentBid} €`}
                            </p>
                        </Col>

                        <Col>
                            <div className="font-weight-bold">Number of Bids</div>
                            <p>
                                {this.props.route.auctionBids.length}
                            </p>
                        </Col>
                        <Col>
                            <div className="font-weight-bold">Auction Status</div>
                            <p>
                                <AuctionStatusImage route={this.props.route} driverID={this.props.driverID}
                                                    scale={"40px"}/>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="font-weight-bold">Vehicle Type</div>
                            <ButtonVehicleType vehicleType={this.props.route.vehicleType}/>
                        </Col>

                        <Col>
                            <Formik
                                initialValues={{
                                    Bid: ''
                                }}
                                validationSchema={Yup.object().shape({
                                    Bid: Yup.number()
                                        .required('Please enter a Bid.')
                                        .lessThan(this.props.route.currentBid, `Bid must be lower than ${this.props.route.currentBid} €.`)
                                        .moreThan(0, "Your are not allowed to drive for free.")
                                        .typeError('Bid must be a number.')
                                })}
                                onSubmit={(values, {resetForm}) => {
                                    this.props.onSubmit(this.props.route._id, values.Bid);
                                    resetForm({Bid: ''});
                                }}
                                render={({errors, touched}) => (
                                    <Form autoComplete="off">
                                        <div className="form-group">
                                            <label htmlFor="Bid"><b>Your Bid</b></label>
                                            <div className="form-inline" hidden={this.props.route.auctionOver}>
                                                <BiddingConfirmationPopup/>
                                                <Field name="Bid" type="text"
                                                       className={'form-control' + (errors.Bid && touched.Bid ? ' is-invalid' : '')}/>
                                                <ErrorMessage name="Bid" component="div" className="invalid-feedback"/>
                                            </div>
                                            <div className="form-inline" hidden={!this.props.route.auctionOver}>
                                                {`${this.getPersonalLowestBid(this.props.route, this.props.driverID)} €`}
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            />
                        </Col>
                        {AuctionStatusService.getBidStatus(this.props.route, this.props.driverID) ?
                            <Col><Button variant={"success"} onClick={this.startDriving} disabled={this.isInDriving()}>Start
                                Delivering Now</Button></Col>
                            : null}
                    </Row>
                    {this.state.startedDriving ? <Alert variant={"success"}>Now go and deliver all Packages!</Alert>:null}

                </Container>
            </div>
        );
    }


}
