import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, OverlayTrigger, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import Page from './Page';
import RegisterDeliveryRequestConf from './RegisterDeliveryRequestConf'

const renderTooltipSmall = props => (
    <div
      {...props}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        ...props.style,
      }}
    >
      Small means the size of a Smartphone
    </div>
  );
  const renderTooltipMedium = props => (
    <div
      {...props}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        ...props.style,
      }}
    >
      Medium means the size of a backpack
    </div>
  );
  const renderTooltipLarge = props => (
    <div
      {...props}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        ...props.style,
      }}
    >
      Large means the size of a chair
    </div>
  );
  const renderTooltipLight = props => (
    <div
      {...props}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        ...props.style,
      }}
    >
      Light means under 5 kilogram
    </div>
  );
  const renderTooltipMedium2 = props => (
    <div
      {...props}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        ...props.style,
      }}
    >
      Medium means between 5 and 10 kilogram
    </div>
  );
  const renderTooltipHeavy = props => (
    <div
      {...props}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        padding: '2px 10px',
        color: 'white',
        borderRadius: 3,
        ...props.style,
      }}
    >
      Large means more than 15 kilogram
    </div>
  );

class RegisterDeliveryRequest extends Component{

    

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
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
                <p>
                <Row>
                <label>
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
                    </label>
                </Row>
                </p>
                <p>
                    <Row>
                        <ToggleButtonGroup type="checkbox" name="Weight">
                                <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltipLight}
                                >
                                    <ToggleButton type="Radio">Light</ToggleButton>
                                </OverlayTrigger>
                            
                                <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltipMedium2}
                                >
                                    <ToggleButton type="Radio">Medium</ToggleButton>
                                </OverlayTrigger>

                                <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltipHeavy}
                                >
                                    <ToggleButton type="Radio">Heavy</ToggleButton>
                                </OverlayTrigger>
                          </ToggleButtonGroup>
                    </Row>
                </p>
                <p>
                    <Row>
                        <ToggleButtonGroup type="checkbox" name="Size">
                                <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltipSmall}
                                >
                                    <ToggleButton type="Radio">Small</ToggleButton>
                                </OverlayTrigger>
                            
                                <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltipMedium}
                                >
                                    <ToggleButton type="Radio">Medium</ToggleButton>
                                </OverlayTrigger>

                                <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltipLarge}
                                >
                                    <ToggleButton type="Radio">Large</ToggleButton>
                                </OverlayTrigger>
                        </ToggleButtonGroup>
                    </Row>
                </p>
                <p>
                <Row>
                    <label>
                    <Button variant="success">Make me an offer!</Button>
                    </label>
                </Row>
                </p>
                </Container>
            </Page>
        );
    };

}
export default RegisterDeliveryRequest;