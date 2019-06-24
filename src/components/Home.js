import React, { Component } from 'react';
import { Carousel, Jumbotron, Container, Button} from 'react-bootstrap';
import Page from './Page';

class Home extends Component {
  
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Page>
        <Container>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Images/PhotoPackage.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Do you have a package?</h3>
              <p>Enter the information and details</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Images/PhotoPackage2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Our drivers will pick it up</h3>
              <p>At your location</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="Images/PhotoPackage3.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>And they will deliver it</h3>
              <p>
                At your entered destination
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Jumbotron>
          <p>
            Do you want to send a package?
          </p>
          <p>
            <Button variant="primary">Send something!</Button>
          </p>
        </Jumbotron>
        <Jumbotron>
          <p>
            Do you want te be a driver?
          </p>
          <p>
            <Button variant="primary">Be a driver</Button>
          </p>
        </Jumbotron>
        <Jumbotron>
          <p>
            Do you want to have an overview of your deliveries?
          </p>
          <p>
            <Button variant="primary">My deliveries</Button>
          </p>
        </Jumbotron>
        </Container>
      </Page>
    );
  }
}


  export default Home;
  