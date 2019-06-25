import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, OverlayTrigger, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import {ToggleButtonBar1} from './ToggleButtonBar';
import {ToggleButtonBar2} from './ToggleButtonBar';
import DatepickerClass from './Datepicker';
import Page from "./Page";
import {Link} from "react-router-dom";




class RegisterDeliveryRequest extends Component{

    

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        var datadr = {
            what : "Smartphone",
            start : "Boltzmannstr",
            end: "Schellingstr",
            size: "Large",
            weight: "Light",
            date: "7.5.2019"
        }
        
        return (
            <Page>
              <Container>
                <p>
                <Row>
                    Hello User, please enter the information for your package
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
                        <FormControl/>
                        </InputGroup>
                    </label>
                    </Col>
                </Row>
                </p>
                <p>
                <Row>
                <label>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Start</InputGroup.Text>
                            </InputGroup.Prepend>
                        <FormControl/>
                        <InputGroup.Prepend>
                                <InputGroup.Text>End</InputGroup.Text>
                            </InputGroup.Prepend>
                        <FormControl/>
                        </InputGroup>
                    </Col>
                    </label>
                </Row>
                </p>
                <p>
                        <ToggleButtonBar1/>
                </p>
                <p>
                        <ToggleButtonBar2/>
                </p>
                <p>
                    <Row>
                        <Col>
                            <DatepickerClass/>
                        </Col>
                    </Row>
                </p>
                <p>
                <Row>
                    <label>
                    <Button href = "/sendanythingconf" variant="success">Make me an offer!</Button>
                    </label>
                </Row>
                 </p>
                    <Link
                    to={{
                        pathname: "/sendanythingconfdata",
                        data: datadr // your data array of objects
                    }}
                    ></Link>
                </Container>
            </Page>
        );
    };

}
export default RegisterDeliveryRequest;