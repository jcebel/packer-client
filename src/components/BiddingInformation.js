import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {ButtonVehicleType} from "./ButtonVehicleType";

export class BiddingInformation extends React.Component{

    render() {
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
                                {this.props.route.auctionBids.sort((first, sec) => {
                                return first.bid > sec.bid;
                            })[0].bid} €
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
                            <div className="font-weight-bold">Your bid</div>
                            <p>
                                <input type="text"/>
                                <Button variant="success" onClick={() => this.props.onSubmit(this.props.route._id)}>Submit</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }


}
