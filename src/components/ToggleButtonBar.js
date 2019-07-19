import React, { Component } from 'react';
import { Row, OverlayTrigger, ToggleButtonGroup, ToggleButton, Col, Button, Alert} from 'react-bootstrap';

const renderTooltipSize = props => (
   
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
      Small means the size of a Smartphone<br></br>
      Medium means the size of a backpack<br></br>
      Large means the size of a chair
    </div>
  );
  
  const renderTooltipWeight = props => (
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
      Light means under 5 kilogram<br></br>
      Medium means between 5 and 10 kilogram<br></br>
      Heavy means more than 15 kilogram
    </div>
  );
  

class ToggleButtonBarWeight extends Component{

    

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
          value: "",
        };
    }

    handleChange(value, event) {
      this.setState({ value });
    }
  
    handleChangeWeight = (value) => {
      this.setState({value})
      var weight = value;
      this.props.onSelectWeight(weight);            
  }
    render() {
            return (
              <div>
                <Row>
                     <Col>
                        <Button variant="primary">Weight</Button>
                        <br></br>
                        <Alert variant="info">
                          <Alert.Heading>Weight Information</Alert.Heading>
                              <p>
                                Light means under 5 kilogram<br></br>
                                Medium means between 5 and 10 kilogram<br></br>
                                Heavy means more than 15 kilogram
                              </p>
                          </Alert>
                        </Col>
                        <Col>            
                        <ToggleButtonGroup type="radio" value={this.state.value}
                          onChange={this.handleChangeWeight} name="Weight">
                                    <ToggleButton type="radio" value = {1}>Light</ToggleButton>
                                    <ToggleButton type="radio" value = {2}>Medium</ToggleButton>
                                    <ToggleButton type="radio" value = {3}>Heavy</ToggleButton>
                          </ToggleButtonGroup>
                         </Col>
                    </Row>
                </div>
        );
    };

}
class ToggleButtonBarSize extends Component{

  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        value: "",
      };
  }
    handleChangeSize = (value) => {
      this.setState({value})
      var size = value;
      this.props.onSelectSize(size);            
  }

  handleChange(value, event) {
    this.setState({ value });
  }

  render() {
      return (
        <div>    
                      <Row>
                        <Col>
                          <Button variant="primary">Size</Button>
                          <br></br>
                          <Alert variant="info">
                          <Alert.Heading>Size Information</Alert.Heading>
                              <p>
                                  Small means the size of a Smartphone<br></br>
                                  Medium means the size of a backpack<br></br>
                                  Large means the size of a chair
                              </p>
                          </Alert>
                        </Col>
                        <Col>
                      <ToggleButtonGroup type="radio" value={this.state.value}
                      onChange={this.handleChangeSize} name="Weight">
                                  <ToggleButton type="radio" value = {1}>Small</ToggleButton>
                                  <ToggleButton type="radio" value = {2}>Medium</ToggleButton>
                                  <ToggleButton type="radio" value = {3}>Large</ToggleButton>
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