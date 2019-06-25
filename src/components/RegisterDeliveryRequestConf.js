import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, OverlayTrigger, ToggleButton, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';
import Page from './Page';
import {History} from "react-router-dom";


class RegisterDeliveryRequestConf extends Component{

    

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
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
                      Costs: 5 Euro
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
                            <InputGroup.Prepend>
                                <InputGroup.Text>{this.props.data.what}</InputGroup.Text>
                            </InputGroup.Prepend>
                       
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
                                <InputGroup.Text>Start</InputGroup.Text>
                            </InputGroup.Prepend>
                            <InputGroup.Prepend>
                                <InputGroup.Text>{this.props.data.start}</InputGroup.Text>
                            </InputGroup.Prepend>
                        
                        <InputGroup.Prepend>
                                <InputGroup.Text>End</InputGroup.Text>
                            </InputGroup.Prepend>
                            <InputGroup.Prepend>
                                <InputGroup.Text>{this.props.data.end}</InputGroup.Text>
                            </InputGroup.Prepend>
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
                            <InputGroup.Prepend>
                                <InputGroup.Text>{this.props.data.size}</InputGroup.Text>
                            </InputGroup.Prepend>
                        
                        <InputGroup.Prepend>
                                <InputGroup.Text>Weight:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <InputGroup.Prepend>
                                <InputGroup.Text>{this.props.data.weight}</InputGroup.Text>
                            </InputGroup.Prepend>
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
                            <InputGroup.Prepend>
                                <InputGroup.Text>{this.props.data.date}</InputGroup.Text>
                            </InputGroup.Prepend>
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
    };

}
export default RegisterDeliveryRequestConf;