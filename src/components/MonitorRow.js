import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {StatusBadge} from "./StatusBadge";
import {ConfirmPopup} from "./ConfirmPopup";

export class MonitorRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {popupShow: false}
    };

    render(){
        let popupClose = () => this.setState({ popupShow: false });
        return (
            <Container>
                <p/>
                <div className="list-group">
                    <div className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between text-secondary">
                            <div>
                                <b>Date:</b> {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(this.props.deliverygood.deliveryDate))}
                            </div>
                            <div><b>Price:</b> {this.props.deliverygood.price} €</div>
                        </div>
                        <p/>
                        <Row>
                            <Col className="align-self-center text-center h3">
                                <p className="h3 font-weight-bold">
                                    {this.props.deliverygood.name}
                                </p>
                                <StatusBadge deliveryState={this.props.deliverygood.deliveryState}/>
                            </Col>
                            <Col>
                                <div className="font-weight-bold">Sender</div>
                                <p>
                                    {this.props.deliverygood.origination.name}<br/>
                                    {this.props.deliverygood.origination.street}
                                    {" "}{this.props.deliverygood.origination.houseNumber}<br/>
                                    {this.props.deliverygood.origination.postalCode}
                                    <span> </span>
                                    {this.props.deliverygood.origination.city}<br/>
                                </p>
                                <div className="font-weight-bold">Recipient</div>
                                <p>
                                    {this.props.deliverygood.destination.name}<br/>
                                    {this.props.deliverygood.destination.street}
                                    {" "}{this.props.deliverygood.destination.houseNumber}<br/>
                                    {this.props.deliverygood.destination.postalCode}
                                    <span> </span>
                                    {this.props.deliverygood.destination.city}<br/>
                                </p>
                            </Col>
                            <Col className="align-self-center text-center">
                                <p>
                                    <Button href={`/deliverydetails/${this.props.deliverygood._id}`} variant="secondary" size="xs">More Info</Button>
                                </p>
                                {this.props.deliverygood.deliveryState === "Waiting for Routing" ?
                                <p>
                                    <Button href="#" variant="danger" onClick={() => {
                                        this.setState({popupShow: true})}
                                    } size="xs">Delete</Button>
                                    <ConfirmPopup
                                        show={this.state.popupShow}
                                        onHide={popupClose}
                                        id={this.props.deliverygood._id}
                                        onSubmit={() => {
                                            popupClose();
                                            this.props.deleteitem(this.props.deliverygood._id);
                                        }}
                                    />
                                </p> : <span/>}
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        )
    }
}
