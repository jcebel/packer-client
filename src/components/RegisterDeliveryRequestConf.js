import React, { Component } from 'react';
import { Alert, Container, Row, Col, InputGroup, FormControl, Button, ButtonToolbar} from 'react-bootstrap';
import {Page} from './Page';
import {DeliveryGoodService} from "../services/DeliveryGoodService";
import {PriceService} from "../services/PriceService";

    

class RegisterDeliveryRequestConf extends Component{

    
    

    constructor(props) {
        super(props);
        if(this.props.datadr !== undefined) {
            this.state = {
                show: false,
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
                date: this.props.datadr.date.toLocaleDateString(),
            };
            this.priceCalculation();
        } else {
            this.state = {
                show: false,
                what: "",
                sender: "",
                receiver: "",
                start: "",
                startnum: "",
                startcity: "",
                end: "",
                price: 0,
                endnum: "",
                endcity: "",
                size: "",
                weight: "",
                date: ""
                    }
                    
                }
            }

    
    priceCalculation() {

        let parameters = {
            size: this.state.size,
            weight: this.state.weight,
            orig: this.state.start + this.state.startnum + ", " + this.state.startcity,
            dest: this.state.end + this.state.endnum + ", " + this.state.endcity
        };

        PriceService.createPriceCalculation(parameters).then((data) => {
                //console.log(data);
                this.setState({
                    price : data.price
                });
            }).catch((e) => {
                console.error(e);
            });   
            
          }

      submitRequest = () => {
        let deliveryRequest = {
            "name": this.state.what,
            "deliveryDate": this.state.date,
            "weight": this.state.weight, //small, medium, large
            "size": this.state.size,   //light, medium, heavy
            "price": this.state.price,
            "deliveryState": "Waiting for Routing",
            "destination": {
                "name": this.state.sender,
                "city": this.state.startcity,
                "street": this.state.start,
                "houseNumber": this.state.startnum,
                "postalCode": ""
              },
              "origination": {
                "name": this.state.receiver,
                "city": this.state.endcity,
                "street": this.state.end,
                "houseNumber": this.state.endnum,
                "postalCode": ""
              }
        };
         //prevents double sending
           // console.log("Success");
        DeliveryGoodService.createDeliveryGood(deliveryRequest).then((data) => {
            console.log(data);
        }).catch((e) => {
            console.error(e);
        });   

        
        this.setState( {
            show: true
        });
    }

    render() {
        try{
        return (
            <div className="text-dark">
            <Page activetab = "send">
                <Container>
                <div>
                <Row>
                    Hello User, here is a summary of your package
                </Row>
                </div>
                <p></p>
                <div>
                  <Row>
                    <Col>
                    <label>
                    <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Costs</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder = {this.state.price + " €"}/>
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
                    <div>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Start</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl readOnly placeholder={this.state.start + " " + this.state.startnum + ", " + this.state.startcity}/>
                        
                        <InputGroup.Prepend>
                                <InputGroup.Text>End</InputGroup.Text>
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
                      <Button disabled={this.state.show} 
                      onClick={this.submitRequest} variant="success">Accept</Button>
                      <Button href = "/sendanything" variant="danger">Reject</Button>
                    </ButtonToolbar>
                    </label>
                  </Row>
                </div>
                <Alert show={this.state.show} variant="success">
                    <Alert.Heading>Request sent</Alert.Heading>
                    <p>
                        You can see your Request in My Deliveries!
                    </p>
                </Alert>
                </Container>
            </Page>
            </div>
        );
    }catch(e){
        console.log(e);
        return(
            <div>
                Fehler 404
            </div>
        );   
    }
    };

}
export default RegisterDeliveryRequestConf;