import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {ButtonVehicleType} from "./ButtonVehicleType";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {RouteService} from "../services/RouteService";
import UserService from "../services/UserService";

export class BiddingInformation extends React.Component{

    render() {
        var lowestBid = this.props.route.auctionBids.reduce(function (a, b) {
            return a.bid < b.bid ? a.bid : b.bid;
        });

        return (
            <div>
                <h4>
                    Bidding Information
                </h4>
                <Container>
                    <Row>
                        <Col>
                            <div className="font-weight-bold">Current Bid</div>
                            <p>
                                {this.props.route.auctionBids.reduce(function (a, b) { return a.bid < b.bid ? a.bid : b.bid; })} €
                            </p>
                        </Col>

                        <Col>
                            <div className="font-weight-bold">Number of Bids</div>
                            <p>
                                {this.props.route.auctionBids.length}
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
                                        .lessThan(lowestBid, "Bid must be lower than ${less} €.")
                                        .moreThan(0,"Your are not allowed to drive for free.")
                                        .typeError('Bid must be a number.')
                                })}
                                onSubmit={(values, {resetForm}) => {
                                    this.props.onSubmit(this.props.route._id, values.Bid);
                                    resetForm({Bid:''});
                                }}
                                render={({ errors, touched }) => (
                                    <Form>
                                        <div className="form-group">
                                            <label htmlFor="Bid"><b>Your Bid</b></label>
                                            <div className="form-inline">
                                                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                                <Field name="Bid" type="text" className={'form-control' + (errors.Bid && touched.Bid ? ' is-invalid' : '')} />
                                                <ErrorMessage name="Bid" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }


}
