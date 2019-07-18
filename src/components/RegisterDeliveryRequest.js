import React, { Component } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Alert} from 'react-bootstrap';
import {ToggleButtonBarWeight} from './ToggleButtonBar';
import {ToggleButtonBarSize} from './ToggleButtonBar';
import DatepickerClass from './Datepicker';
import LocationSearchInput from './LocationSearchInput';
import {Page} from './Page';
import {Link} from "react-router-dom";

class RegisterDeliveryRequest extends Component{

    constructor(props) {
        super(props);
        
        this.state = {
            show: false,
            what : "",
            sender: "",
            receiver: "",
            start : "",
            startnum : "",
            startcity: "",
            startpostalcode: "",
            end: "",
            date: "",
            endnum: "",
            endcity: "",
            endpostalcode:"",
            size: "",
            weight: "",
        };
    }

    changeHandlerWhat = event => {
        this.setState({
          what: event.target.value
        });
      }
      changeHandlerSender = event => {
        this.setState({
          sender: event.target.value
        });
      }
      changeHandlerReceiver = event => {
        this.setState({
          receiver: event.target.value
        });
      }
      changeHandlerStartNum = event => {
        this.setState({
          startnum: event.target.value
        });
      }
      changeHandlerEndNum = event => {
        this.setState({
          endnum: event.target.value
        });
      }
      changeHandlerSize = (sizedr) => {
        this.setState({size: this.changeSize(sizedr)});
    }
    changeHandlerWeight = (weightdr) => {
        this.setState({weight: this.changeWeight(weightdr)});
    }
    changeHandlerDate = (datedr) => {
        this.setState({date: datedr});
    }
    changeHandlerStartAdd = (startadd, city) => {
        this.setState({start: startadd,
                     startcity: city});
        
    }
    changeHandlerEndAdd = (endadd, city) => {
        this.setState({end: endadd,
            endcity: city});
    }

    changeSize = (sizedr) => {
        if(sizedr === 1) {
            return "Small";
        } else if (sizedr === 2) {
            return "Medium";
        } else {
            return "Large";
        }
    }
    changeWeight = (weightdr) => {
        if(weightdr === 1) {
            return "Light";
        } else if (weightdr === 2) {
            return "Medium";
        } else {
            return "Heavy";
        }
    }

    checkdata = (e) => {
            if(this.state.what === ""|| this.state.date === "" || this.state.sender === "" || this.state.receiver === "" || this.state.start === "" || this.state.startnum === ""
            || this.state.startcity === "" || this.state.end === "" || this.state.endnum === "" || this.state.endcity === "" || this.state.size === "" 
            || this.state.weight === "") {
                this.setState({
                    show: true
                });
                e.preventDefault();
                } 
    }
    checkdataalert = (e) => {
                this.setState({
                    show: false
                });
    }
      
    render() {
        try{
        return (
            <Page activetab = "send">
              <Container>
                <div>
                <Row>
                    Hello User, please enter the information for your package:
                </Row>
                </div>
                <p></p>
                <div>
                <Row>
                    <Col>
                    <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>What is it?</InputGroup.Text>
                            </InputGroup.Prepend>
                        <FormControl value = {this.state.what} onChange={this.changeHandlerWhat} placeholder={"e.g. Smartphone"}/>
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
                            <FormControl value = {this.state.sender} onChange={this.changeHandlerSender} placeholder={"Full Name"}/>
                        <InputGroup.Prepend>
                                <InputGroup.Text>Recipient</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl value = {this.state.reciever} onChange={this.changeHandlerReceiver} placeholder={"Full Name"}/>
                        </InputGroup>
                    </Col>
                    </label>
                </Row>
                </div>
                <div>
                <Row>
                <label>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Start street</InputGroup.Text>
                            </InputGroup.Prepend>
                            <LocationSearchInput onSelectAdd={this.changeHandlerStartAdd}/>
                            <FormControl placeholder={"Number"} value = {this.state.startnum} onChange={this.changeHandlerStartNum}/>
                        <InputGroup.Prepend>
                                <InputGroup.Text>End street</InputGroup.Text>
                            </InputGroup.Prepend>
                            <LocationSearchInput onSelectAdd={this.changeHandlerEndAdd}/>
                            <FormControl placeholder={"Number"} value = {this.state.endnum} onChange={this.changeHandlerEndNum}/>
                        </InputGroup>
                    </Col>
                    </label>
                </Row>
                </div>
                <div>
                        <ToggleButtonBarSize onSelectSize={this.changeHandlerSize}/>
                </div>
                <p></p>
                <div>
                        <ToggleButtonBarWeight onSelectWeight={this.changeHandlerWeight}/>
                </div>
                <p></p>
                <div>
                    <Row>
                        <Col>
                            <DatepickerClass onSelectDate={this.changeHandlerDate}/>
                        </Col>
                    </Row>
                </div>
                <div>
                <p></p>
                <Row>
                    <Link onClick={this.checkdata}
                    to={{
                        pathname: "/sendanythingconf",
                        data: this.state // your data array of objects
                    }}>
                    <Button onClick={this.checkdata} href = "/sendanythingconf" variant="success">Make me an offer!</Button>
                    </Link>
                </Row>
                 </div>
                 <Alert show={this.state.show} variant="danger">
                    <Alert.Heading>Warning!</Alert.Heading>
                    <p>
                        I think you forgot to enter some data!
                    </p>
                    <Button onClick={this.checkdataalert}>Ok</Button>
                </Alert>
                </Container>
            </Page>
        );
    }catch(e){
        console.log('error', e);        
        }
    };

}


export default RegisterDeliveryRequest;