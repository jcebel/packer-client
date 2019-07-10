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
            startnum : "",
            end: "",
            endnum: "",
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
    changeHandlerStartAdd = (startadd) => {
        this.setState({start: startadd});
    }
    changeHandlerEndAdd = (endadd) => {
        this.setState({end: endadd});
    }
    testdata = () => {
        console.log(this.state);
        if(this.state.date=="")
         {
            let today = new Date().toISOString().slice(0, 10)
            this.setState({date: today});
        }
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
                                <InputGroup.Text>Start</InputGroup.Text>
                            </InputGroup.Prepend>
                            <LocationSearchInput onSelectAdd={this.changeHandlerStartAdd}/>
                            <FormControl placeholder={"Number"} value = {this.state.startnum} onChange={this.changeHandlerStartNum}/>
                        <InputGroup.Prepend>
                                <InputGroup.Text>End</InputGroup.Text>
                            </InputGroup.Prepend>
                            <LocationSearchInput onSelectAdd={this.changeHandlerEndAdd}/>
                            <FormControl placeholder={"Number"} value = {this.state.endnum} onChange={this.changeHandlerEndNum}/>
                        </InputGroup>
                    </Col>
                    </label>
                </Row>
                </div>
                <div>
                        <ToggleButtonBar2 onSelectSize={this.changeHandlerSize}/>
                </div>
                <p></p>
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
                <p></p>
                <Row>
                    <Link
                    to={{
                        pathname: "/sendanythingconf",
                        data: this.state // your data array of objects
                    }}>
                    <Button onClick={this.testdata} href = "/sendanythingconf" variant="success">Make me an offer!</Button>
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