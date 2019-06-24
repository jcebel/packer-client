import React, { Component } from 'react';
import { Navbar, Nav, Form, Container, Row, Col, InputGroup, FormControl, ButtonGroup, Button, OverlayTrigger, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';


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
      Heavy means more than 15 kilogram
    </div>
  );

class ToggleButtonBar1 extends Component{

    

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
          value: [],
        };
    }
    handleChange(value, event) {
      this.setState({ value });
    }

    render() {
        return (
          <div>
            <Row>
                        <ToggleButtonGroup type="radio" value={this.state.value}
                        onChange={this.handleChange} name="Weight">
                                    <ToggleButton type="radio" value = {1}>Light</ToggleButton>
                                    <ToggleButton type="radio" value = {2}>Medium</ToggleButton>
                                    <ToggleButton type="radio" value = {3}>Heavy</ToggleButton>
                          </ToggleButtonGroup>
                          </Row>
                        </div>
        );
    };

}
class ToggleButtonBar2 extends Component{

    

  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        value: [],
      };
  }
  handleChange(value, event) {
    this.setState({ value });
  }

  render() {
      return (
        <div>
                      <Row>
                      <ToggleButtonGroup type="radio" value={this.state.value}
                      onChange={this.handleChange} name="Weight">
                                  <ToggleButton type="radio" value = {1}>Small</ToggleButton>
                                  <ToggleButton type="radio" value = {2}>Medium</ToggleButton>
                                  <ToggleButton type="radio" value = {3}>Large</ToggleButton>
                        </ToggleButtonGroup>
                      </Row>
                      </div>
      );
  };

}
export {
  ToggleButtonBar1,
  ToggleButtonBar2,
}