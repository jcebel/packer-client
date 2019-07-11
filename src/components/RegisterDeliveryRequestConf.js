import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, OverlayTrigger, ToggleButton, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
import Page from './Page';
import {History} from "react-router-dom";
import {DeliveryGoodService} from "../services/DeliveryGoodService";
import {PriceService} from "../services/PriceService";


class RegisterDeliveryRequestConf extends Component{

    

    constructor(props) {
        super(props);
        if(this.props.datadr !== undefined) {
            this.state = {
                what: this.props.datadr.what,
                sender: this.props.datadr.sender,
                receiver: this.props.datadr.receiver,
                start: this.props.datadr.start,
                startnum: this.props.datadr.startnum,
                startcity: this.props.datadr.startcity,
                end: this.props.datadr.end,
                price: 0,
                endnum: this.props.datadr.endnum,
                endcity: this.props.datadr.endcity,
                size: this.props.datadr.size,
                weight: this.props.datadr.weight,
                date: this.props.datadr.date
            };
            this.priceCalculation();
        }
        
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

        let parameters = {
            size: this.state.size,
            weight: this.state.weight,
            distance: 10
        };

        PriceService.createPriceCalculation(parameters).then((data) => {
            console.log(data);
            this.setState({
                price : data.price
            });
        }).catch((e) => {
            console.error(e);
        });   
        
        /*var size = this.state.size;
        var weight = this.state.weight;*/

       /* if(size == "Small") {
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
        }*/
      }

      submitRequest = () => {
        let deliveryRequest = {
            "name": this.state.what,
            "deliveryDate": this.state.date,
            "weight": this.state.weight, //small, medium, large
            "size": this.state.size,   //light, medium, heavy
            "price": this.priceCalculation(),
            "deliveryState": "Waiting for Routing",
            "destination": {
                "name": this.state.sender,
                "city": this.state.startcity,
                "street": this.state.start,
                "houseNumber": this.state.startnum,
                "postalCode": "80331"
              },
              "origination": {
                "name": this.state.receiver,
                "city": this.state.endcity,
                "street": this.state.end,
                "houseNumber": this.state.endnum,
                "postalCode": "80331"
              }
        };/*
        let deliveryRequest = {
            "name": "Smartphone123",
            "deliveryDate": "2019-07-17T16:54:00.000Z",
            "weight": "80",
            "size": "3",
            "price": 28,
            "deliveryState": "Waiting for Routing",
            "destination": {
                    "name":"Max",
              "city": "Muenchen",
              "street": "Theresienstrasse",
              "houseNumber": 5,
              "postalCode": "84762"
            },
            "origination": {
                    "name": "Jonas",
              "city": "München",
              "street": "Arcisstrasse",
              "houseNumber": 28,
              "postalCode": "86361"
            }
          };*/
        
        DeliveryGoodService.createDeliveryGood(deliveryRequest).then((data) => {
            console.log(data);
        }).catch((e) => {
            console.error(e);
        });   
        console.log(deliveryRequest);
    }

    render() {
        try{
        return (
            <div class="text-dark">
            <Page activetab = "send">
                <Container>
                <div>
                <Row>
                    Hello User, here is a summary of your package
                </Row>
                </div>
                <div>
                  <Row>
                    <Col>
                    <label>
                    <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Costs</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder = {this.state.price}/>
                        </InputGroup>
                    </label>
                    </Col>
                  </Row>
                </div>
                <div>
                <Row>
                    <Col>
                    <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>What is it?</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.state.what}/>
                        </InputGroup>
                    </label>
                    </Col>
                </Row>
                </div>
                <div>
                <Row>
                <label>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Sender</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder = {this.state.sender}/>
                        <InputGroup.Prepend>
                                <InputGroup.Text>Receiver</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder = {this.state.receiver}/>
                        </InputGroup>
                    </Col>
                    </label>
                </Row>
                </div>
                <div>
                <Row>
                    <Col>
                <label>
                    <div class="input-group input-group-lg">
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Start</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.state.start + " " + this.state.startnum + ", " + this.state.startcity}/>
                        
                        <InputGroup.Prepend>
                                <InputGroup.Text>End (Street. Number)</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.state.end + " " + this.state.endnum + ", " + this.state.endcity}/>
                        </InputGroup>
                        </div>
                    </label>
                    </Col>
                </Row>
                </div>
                <div>
                    <Row>
                        <Col>
                        <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Size:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.state.size}/>
                        
                        <InputGroup.Prepend>
                                <InputGroup.Text>Weight:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.state.weight}/>
                        </InputGroup>
                    </label>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col>
                        <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Date</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.state.date}/>
                        </InputGroup>
                        </label>
                        </Col>
                    </Row>
                </div>
                <div>
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
                </div>
                <div>
                  <Row>
                    <label>
                    <ButtonToolbar>
                      <Button 
                      onClick={this.submitRequest} variant="success">Accept</Button>
                      <Button href = "/sendanything" variant="danger">Reject</Button>
                    </ButtonToolbar>
                    </label>
                  </Row>
                </div>
                </Container>
            </Page>
            </div>
        );
    }catch(e){
        return(
            <div>
                Fehler 404
            </div>
        );   
    }
    };

}
export default RegisterDeliveryRequestConf;