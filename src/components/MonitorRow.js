import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export class MonitorRow extends React.Component {

    statusButtonVariant(){
        if(this.props.deliverygood.deliveryState === "In Delivery"){
            return "info";
        }
        else if(this.props.deliverygood.deliveryState === "Delivered"){
            return "success";
        }
        else if(this.props.deliverygood.deliveryState === "Waiting for Routing"){
            return "warning";
        }
        else if(this.props.deliverygood.deliveryState === "Waiting for Pickup"){
            return "primary";
        }
        else{
            return "dark";
        }
    }

    render(){
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
                                <Badge variant={this.statusButtonVariant()}>{this.props.deliverygood.deliveryState}</Badge>
                            </Col>
                            <Col>
                                <div className="font-weight-bold">Sender</div>
                                <p>
                                    {this.props.deliverygood.origination.name}<br/>
                                    {this.props.deliverygood.origination.street}<br/>
                                    {this.props.deliverygood.origination.postalCode}
                                    <span> </span>
                                    {this.props.deliverygood.origination.city}<br/>
                                </p>
                                <div className="font-weight-bold">Recipient</div>
                                <p>
                                    {this.props.deliverygood.destination.name}<br/>
                                    {this.props.deliverygood.destination.street}<br/>
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
                                        if(window.confirm("Are you sure you wish to delete this delivery request?"))
                                        this.props.onDelete(this.props.deliverygood._id)}} size="xs">Delete</Button>
                                </p> : <span/>}
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        )
    }
}