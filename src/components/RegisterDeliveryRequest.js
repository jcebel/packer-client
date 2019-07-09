import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, OverlayTrigger, ToggleButtonGroup, ToggleButto } from 'react-bootstrap';
import {ToggleButtonBar1} from './ToggleButtonBar';
import {ToggleButtonBar2} from './ToggleButtonBar';
import DatepickerClass from './Datepicker';
import LocationSearchInput from './LocationSearchInput';
import Page from "./Page";
import {Link} from "react-router-dom";




class RegisterDeliveryRequest extends Component{

    

    constructor(props) {
        super(props);
        this.state = {
            what : "",
            start : "",
            end: "",
            size: "",
            weight: "",
            date: ""
        };
    }

    changeHandlerWhat = event => {
        this.setState({
          what: event.target.value
        });
      }
      changeHandlerStart = event => {
        this.setState({
          start: event.target.value
        });
      }
      changeHandlerEnd = event => {
        this.setState({
          end: event.target.value
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

    changeSize = (sizedr) => {
        if(sizedr == 1) {
            return "Small";
        } else if (sizedr == 2) {
            return "Medium";
        } else {
            return "Large";
        }
    }
    changeWeight = (weightdr) => {
        if(weightdr == 1) {
            return "Light";
        } else if (weightdr == 2) {
            return "Medium";
        } else {
            return "Heavy";
        }
    }
      

    render() {
        try{
        return (
            <Page activetab = "send">
              <Container>
                <div>
                <Row>
                    Hello User, please enter the information for your package
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
                        <FormControl value = {this.state.what} onChange={this.changeHandlerWhat} />
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
                                <InputGroup.Text>Start (Street. Number)</InputGroup.Text>
                            </InputGroup.Prepend>
                        <FormControl value = {this.state.start} onChange={this.changeHandlerStart}/>
                        <InputGroup.Prepend>
                                <InputGroup.Text>End (Street. Number)</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl value = {this.state.end} onChange={this.changeHandlerEnd}/>
                        </InputGroup>
                    </Col>
                    </label>
                </Row>
                </div>
                <div>
                        <ToggleButtonBar2 onSelectSize={this.changeHandlerSize}/>
                </div>
                <div>
                        <ToggleButtonBar1  onSelectWeight={this.changeHandlerWeight}/>
                </div>
                
                <div>
                    <Row>
                        <Col>
                            <DatepickerClass onSelectDate={this.changeHandlerDate}/>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col>
                            <LocationSearchInput/>
                        </Col>
                    </Row>
                </div>
                <p></p>
                <div>
                <Row>
                    <Link
                    to={{
                        pathname: "/sendanythingconf",
                        data: this.state // your data array of objects
                    }}>
                    <Button href = "/sendanythingconf" variant="success">Make me an offer!</Button>
                    </Link>
                </Row>
                 </div>
                </Container>
            </Page>
        );
    }catch(e){
        console.log('error', e);        
    }
    };

}


export default RegisterDeliveryRequest;