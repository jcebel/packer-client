import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, OverlayTrigger, ToggleButton, ToggleButtonGroup, ButtonToolbar} from 'react-bootstrap';

class RegisterDeliveryRequest extends Component{

    

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <p class="text-dark">
            <Container>
                <p>
                <Row>
                    Hello User, here is a summary of your package
                </Row>
                </p>
                <p>
                  <Row>
                    <label>
                      Costs: 5 Euro
                    </label>
                  </Row>
                </p>
                <p>
                <Row>
                    <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>What is it?</InputGroup.Text>
                            </InputGroup.Prepend>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Smartphone</InputGroup.Text>
                            </InputGroup.Prepend>
                       
                        </InputGroup>
                    </label>
                </Row>
                </p>
                <p>
                <Row>
                <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Start</InputGroup.Text>
                            </InputGroup.Prepend>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Schellingstr. 8</InputGroup.Text>
                            </InputGroup.Prepend>
                        
                        <InputGroup.Prepend>
                                <InputGroup.Text>End</InputGroup.Text>
                            </InputGroup.Prepend>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Boltzmannstr.15</InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </label>
                </Row>
                </p>
                <p>
                    <Row>
                        <label>
                        <ToggleButtonGroup type="checkbox" name="Weight" defaultValue={1}>
                          <ToggleButton value={1}>Light</ToggleButton>
                          <ToggleButton disabled = {true}>Medium</ToggleButton>
                          <ToggleButton disabled = {true}>Heavy</ToggleButton>
                        </ToggleButtonGroup>
                        </label>
                    </Row>
                </p>
                <p>
                    <Row>
                        <label>
                        <ToggleButtonGroup type="checkbox" name="Size" defaultValue={1} disabled = {true}>
                          <ToggleButton value={1}>Small</ToggleButton>
                          <ToggleButton disabled = {true}>Medium</ToggleButton>
                          <ToggleButton disabled = {true}>Large</ToggleButton>
                        </ToggleButtonGroup>
                        </label>
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
                      <Button variant="danger">Reject</Button>
                    </ButtonToolbar>
                    </label>
                  </Row>
                </p>
            </Container>
            </p>
        );
    };

}
export default RegisterDeliveryRequest;