import React, {Component} from 'react';
import {Alert, Button, Col, Row, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

class ToggleButtonBarWeight extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: "",
            showWeight: false
        };
    }

    handleChange(value, event) {
        this.setState({value});
    }

    handleChangeWeight = (value) => {
        this.setState({value})
        this.props.onSelectWeight(value);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Button onClick={() => {this.setState({
                          showWeight: true
                        })}} variant="primary">Weight</Button>
                        <br></br>
                        <Alert show={this.state.showWeight} variant="info" closeLabel={"Close me"}>
                            <Alert.Heading>Weight Information</Alert.Heading>
                            <p>
                                Light means under 5 kilogram<br></br>
                                Medium means between 5 and 10 kilogram<br></br>
                                Heavy means more than 15 kilogram
                                </p>
                            <Button onClick={() => {this.setState({
                                  showWeight: false
                                })}} variant="primary">Got it!</Button>
                        </Alert>
                    </Col>
                    <Col>
                        <ToggleButtonGroup type="radio" value={this.state.value}
                                           onChange={this.handleChangeWeight} name="Weight">
                            <ToggleButton type="radio" value={1}>Light</ToggleButton>
                            <ToggleButton type="radio" value={2}>Medium</ToggleButton>
                            <ToggleButton type="radio" value={3}>Heavy</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
            </div>
        );
    };

}

class ToggleButtonBarSize extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: "",
            showSize: false
        };
    }

    handleChangeSize = (value) => {
        this.setState({value})
        let size = value;
        this.props.onSelectSize(size);
    }

    handleChange(value, event) {
        this.setState({value});
    }

    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Button onClick={() => {this.setState({
                          showSize: true
                        })}} variant="primary">Size</Button>
                        <br></br>
                        <Alert show={this.state.showSize} variant="info" closeLabel >
                            <Alert.Heading>Size Information</Alert.Heading>
                            <p>
                                Small means the size of a Smartphone<br></br>
                                Medium means the size of a backpack<br></br>
                                Large means the size of a chair
                            </p>
                                <Button onClick={() => {this.setState({
                                  showSize: false
                                })}} variant="primary">Got it!</Button>
                        </Alert>
                    </Col>
                    <Col>
                        <ToggleButtonGroup type="radio" value={this.state.value}
                                           onChange={this.handleChangeSize} name="Weight">
                            <ToggleButton type="radio" value={1}>Small</ToggleButton>
                            <ToggleButton type="radio" value={2}>Medium</ToggleButton>
                            <ToggleButton type="radio" value={3}>Large</ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
            </div>
        );
    };

}

export {
    ToggleButtonBarWeight,
    ToggleButtonBarSize,
}
