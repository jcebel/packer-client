import React, { Component } from 'react';
import { Alert, Container, Row, Col, InputGroup, FormControl, Button, ButtonToolbar} from 'react-bootstrap';
import {Page} from './Page';
import {DeliveryGoodService} from "../services/DeliveryGoodService";
import {PriceService} from "../services/PriceService";
import {AuthService} from "../services/AuthService";
    

class RegisterDeliveryRequestConf extends Component{


    constructor(props) {
        super(props);
        if(this.props.datadr !== undefined) {
            this.state = {
                show: false,
                noData: false,
                emailstate: false,
                mail: "",
                what: this.props.datadr.what,
                sender: this.props.datadr.sender,
                receiver: this.props.datadr.receiver,
                start: this.props.datadr.start,
                startnum: this.props.datadr.startnum,
                startcity: this.props.datadr.startcity,
                end: this.props.datadr.end,
                price: 0,
                distance: 0,
                endnum: this.props.datadr.endnum,
                endcity: this.props.datadr.endcity,
                size: this.props.datadr.size,
                weight: this.props.datadr.weight,
                date: this.props.datadr.date,
            };
            this.priceCalculation();
        } else {
            let today = new Date();
            this.state = {
                noData: true,
                show: false,
                emailstate: false,
                mail: "",
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
                date: today
                    }
                    
                }
            }

    changeHandlerMail = event => {
                this.setState({
                  mail: event.target.value
                });
              }

    
    priceCalculation() {
        let parameters = {
            size: this.state.size,
            weight: this.state.weight,
            orig: this.state.start + this.state.startnum + ", " + this.state.startcity,
            dest: this.state.end + this.state.endnum + ", " + this.state.endcity
        };

        PriceService.createPriceCalculation(parameters).then((data) => {
                this.setState({
                    price : data.price,
                    distance: data.distance
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
            "distance": this.state.distance,
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

        let mail = AuthService.getCurrentUser().email;
        
        if(this.state.mail !== mail.toString()) {
            this.setState({
                emailstate: true
            })
        } else {

        DeliveryGoodService.createDeliveryGood(deliveryRequest).then((data) => {
        }).catch((e) => {
            console.error(e);
        }); 

        this.setState( {
            emailstate: false,
            show: true
            });
        }
    }

    render() {
        try{
        return (
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
                            <FormControl readOnly placeholder={this.state.date.toLocaleDateString()}/>
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
                        <FormControl value = {this.state.email} onChange={this.changeHandlerMail}/>
                        </InputGroup>
                        <Alert show={this.state.emailstate} variant="danger">
                            <Alert.Heading>Mail doesn`t match</Alert.Heading>
                        </Alert>
                    </label>
                </Row>
                </div>
                <div>
                  <Row>
                    <label>
                    <ButtonToolbar>
                      <Button disabled={this.state.show || this.state.noData} 
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
                <Alert show={this.state.noData} variant="danger">
                    <Alert.Heading>No Data to send</Alert.Heading>
                    <p>
                        You can´t send no data!
                    </p>
                </Alert>
                </Container>
            </Page>
        );
    }catch(e){
        this.props.navigation.navigate('error404')
        return(
            <div>
                Fehler 404
            </div>
        );   
    }
    };

}
export default RegisterDeliveryRequestConf;