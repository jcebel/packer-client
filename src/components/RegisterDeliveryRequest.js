import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
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
                    <Col> Hello User, please enter the information for your package</Col>
                </Row>
                </p>
                <p>
                <Row>
                    <label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>What is it?</InputGroup.Text>
                            </InputGroup.Prepend>
                        <FormControl/>
                        </InputGroup>
                    </label>
                </Row>
                </p>
                    <div class="md-form">
                    <input placeholder="Selected date" type="text" id="date-picker-example" class="form-control datepicker"/>
                    <label for="date-picker-example">Try me...</label>
                    </div>
            </Container>
            </p>
        );
    };

}
export default RegisterDeliveryRequest;