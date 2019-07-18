import React, { Component } from 'react';
import { Carousel, Jumbotron, Container, Button, Row, Col, Image} from 'react-bootstrap';
import {Page} from './Page';
import styled from 'styled-components';


const Profile = styled(Image)`
  width: 50%;
`;







export class Home extends Component {
  
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
      <Page activetab="home">
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
          <h4>
            Do you want to send a package?
          </h4>
          <p>
            If you have an old Smartphone, a dishwasher or some Pokemon cards, enter the details submit the request!
          </p>
          <p>
            <Button variant="primary" href="/sendanything" >Send anything!</Button>
          </p>
        </Jumbotron>
        <Jumbotron>
          <h4>
            Do you want te be a driver?
          </h4>
          <p>
            Do you want to earn some extra money as package delivery driver? Register as a driver and search for your routes!
          </p>
          <p>
            <Button href = '/beAdriver' variant="primary">Be a driver</Button>
          </p>
        </Jumbotron>
        <Jumbotron>
          <h4>
            Do you want to have an overview of your deliveries?
          </h4>
          <p>
            Have you already submitted a delivery request? Get an overview and see the current status of your package!
          </p>
          <p>
            <Button href = '/deliverymonitor' variant="primary">My deliveries</Button>
          </p>
        </Jumbotron>
        <Jumbotron>
          <h1>Our Team:</h1>
          <Row>
            <Col>
              <Profile src = "Images/Alex.jpg" rounded = {true}/>
              <h3>Alex</h3>
              <p>Computer Science</p>
            </Col>
            <Col>
              <Profile src = "Images/Lukas.jpg" rounded = {true}/>
              <h3>Lukas</h3>
              <p>Information Systems</p>
            </Col>
            <Col>
              <Profile src = "Images/Jonas.jpg" rounded = {true}/>
              <h3>Jonas</h3>
              <p>Information Systems</p>
            </Col>
            <Col>
              <Profile src = "Images/Max.jpg" rounded = {true}/>
              <h3>Max</h3>
              <p>Information Systems</p>
            </Col>
          </Row>
        </Jumbotron>
        </Container>
      </Page>
    );
  }
}