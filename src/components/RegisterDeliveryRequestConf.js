import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, OverlayTrigger, ToggleButton, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
import Page from './Page';
import {History} from "react-router-dom";


class RegisterDeliveryRequestConf extends Component{

    

    constructor(props) {
        super(props);
        this.state = {};
    }
/*  
Price Calculation:
Basic is 1$
Small = 1$
Medium = 2$
Large = 5$

Light = 1$
Medium = 2$
Large is 5$
*/
    priceCalculation() {
        var size = this.props.datadr.size;
        var weight = this.props.datadr.weight;

        var price = 1;
        if(size == "Small") {
            price = price + 1;
        } else if(size == "Medium") {
            price = price + 2;
        } else if(size == "Large") {
            price = price + 5;
        }
        if(weight == "Light") {
            price = price + 1;
        } else if(weight == "Medium") {
            price = price + 2;
        } else if (weight == "Heavy") {
            price = price + 5;
        }

        return price;
      }

    render() {
        try{
        return (
            <p class="text-dark">
            <Page>
                <Container>
                <p>
                <Row>
                    Hello User, here is a summary of your package
                </Row>
                </p>
                <p>
                  <Row>
                    <Col>
                    <label>
                    <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Costs</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder = {this.priceCalculation()}/>
                        </InputGroup>
                    </label>
                    </Col>
                  </Row>
                </p>
                <p>
                <Row>
                    <Col>
                    <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>What is it?</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.props.datadr.what}/>
                        </InputGroup>
                    </label>
                    </Col>
                </Row>
                </p>
                <p>
                <Row>
                    <Col>
                <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Start (Street. Number)</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.props.datadr.start}/>
                        
                        <InputGroup.Prepend>
                                <InputGroup.Text>End (Street. Number)</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.props.datadr.end}/>
                        </InputGroup>
                    </label>
                    </Col>
                </Row>
                </p>
                <p>
                    <Row>
                        <Col>
                        <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Size:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.props.datadr.size}/>
                        
                        <InputGroup.Prepend>
                                <InputGroup.Text>Weight:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.props.datadr.weight}/>
                        </InputGroup>
                    </label>
                        </Col>
                    </Row>
                </p>
                <p>
                    <Row>
                        <Col>
                        <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Date</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.props.datadr.date}/>
                        </InputGroup>
                        </label>
                        </Col>
                    </Row>
                </p>
                <p>
                <Row>
                    <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Enter your e-mail for confirmation</InputGroup.Text>
                            </InputGroup.Prepend>
                        <FormControl/>
                        </InputGroup>
                    </label>
                </Row>
                </p>
                <p>
                  <Row>
                    <label>
                    <ButtonToolbar>
                      <Button variant="success">Accept</Button>
                      <Button href = "/sendanything" variant="danger">Reject</Button>
                    </ButtonToolbar>
                    </label>
                  </Row>
                </p>
                </Container>
            </Page>
            </p>
        );
    }catch(e){
        return(
            <p>
                Fehler 404: Keine Daten, weil du die Seite refresht hast du Eumel! Geh zurück
            </p>
        );   
    }
    };

}
export default RegisterDeliveryRequestConf;