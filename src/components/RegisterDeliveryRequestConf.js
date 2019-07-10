import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, OverlayTrigger, ToggleButton, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
import Page from './Page';
import {History} from "react-router-dom";
import {DeliveryGoodService} from "../services/DeliveryGoodService";


class RegisterDeliveryRequestConf extends Component{

    

    constructor(props) {
        super(props);
        if(this.props.datadr !== undefined) {
            this.state = {
                what: this.props.datadr.what,
                start: this.props.datadr.start,
                startnum: this.props.datadr.startnum,
                startcity: this.props.datadr.startcity,
                end: this.props.datadr.end,
                endnum: this.props.datadr.endnum,
                endcity: this.props.datadr.endcity,
                size: this.props.datadr.size,
                weight: this.props.datadr.weight,
                date: this.props.datadr.date.toLocaleDateString()
            };
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
        var size = this.state.size;
        var weight = this.state.weight;

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

      submitRequest = () => {
        let DeliveryRequest = {
            "name": this.props.datadr.what,
            "deliveryDate": this.props.datadr.date,
            "weight": this.props.datadr.weight, //small, medium, large
            "size": this.props.datadr.size,   //light, medium, heavy
            "price": this.priceCalculation(),
            "deliveryState": "Waiting for Routing",
            destination: {
                "city": this.props.datadr.startcity,
                "street": this.props.datadr.start,
                "houseNumber": this.props.datadr.startnum,
                "postalCode": "80331"
              },
              "origination": {
                "city": this.props.datadr.endcity,
                "street": this.props.datadr.end,
                "houseNumber": this.props.datadr.endnum,
                "postalCode": "80331"
              }
        };
        /*
        DeliveryGoodService.createDeliveryRequest(DeliveryRequest).then(() => {
        }).catch((e) => {
            console.error(e);
        });   */
        console.log(DeliveryRequest);
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
                            <FormControl readOnly placeholder = {this.priceCalculation()}/>
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