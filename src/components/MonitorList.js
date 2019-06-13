import React, { Component } from 'react';

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class MonitorList extends Component {
    render() {
        return (
            <Container>
                {/*<Card>*/}
                {/*    <Card.Header as="h5">Chair</Card.Header>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Title>Special title treatment</Card.Title>*/}
                {/*        <Card.Text>*/}
                {/*            With supporting text below as a natural lead-in to additional content.*/}
                {/*        </Card.Text>*/}
                {/*        <Button variant="primary">Go somewhere</Button>*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}
                {/*<Card>*/}
                {/*    <Card.Header as="h5">Dish Set</Card.Header>*/}
                {/*    <Card.Body>*/}
                {/*        <Card.Title>Special title treatment</Card.Title>*/}
                {/*        <Card.Text>*/}
                {/*            With supporting text below as a natural lead-in to additional content.*/}
                {/*        </Card.Text>*/}
                {/*        <Button variant="primary">Go somewhere</Button>*/}
                {/*    </Card.Body>*/}
                {/*</Card>*/}
                {/*<CardGroup>*/}
                {/*    <Card>*/}
                {/*        <Card.Header as="h5">Chair</Card.Header>*/}
                {/*        <Card.Body>*/}
                {/*            <Card.Title>Chair</Card.Title>*/}
                {/*            <Card.Text>*/}
                {/*                This is a wider card with supporting text below as a natural lead-in to*/}
                {/*                additional content. This content is a little bit longer.*/}
                {/*            </Card.Text>*/}
                {/*        </Card.Body>*/}
                {/*        <Card.Footer>*/}
                {/*            <small className="text-muted">Last updated 3 mins ago</small>*/}
                {/*        </Card.Footer>*/}
                {/*    </Card>*/}
                {/*    <Card>*/}
                {/*        <Card.Header as="h5">"" </Card.Header>*/}
                {/*        <Card.Body>*/}
                {/*            <Card.Title>Card title</Card.Title>*/}
                {/*            <Card.Text>*/}
                {/*                This card has supporting text below as a natural lead-in to additional*/}
                {/*                content.{' '}*/}
                {/*            </Card.Text>*/}
                {/*        </Card.Body>*/}
                {/*        <Card.Footer>*/}
                {/*            <small className="text-muted">Last updated 3 mins ago</small>*/}
                {/*        </Card.Footer>*/}
                {/*    </Card>*/}
                {/*    <Card>*/}
                {/*        <Card.Img variant="top" src="holder.js/100px160" />*/}
                {/*        <Card.Body>*/}
                {/*            <Card.Title>Card title</Card.Title>*/}
                {/*            <Card.Text>*/}
                {/*                This is a wider card with supporting text below as a natural lead-in to*/}
                {/*                additional content. This card has even longer content than the first to*/}
                {/*                show that equal height action.*/}
                {/*            </Card.Text>*/}
                {/*        </Card.Body>*/}
                {/*        <Card.Footer>*/}
                {/*            <small className="text-muted">Last updated 3 mins ago</small>*/}
                {/*        </Card.Footer>*/}
                {/*    </Card>*/}
                {/*</CardGroup>*/}

                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">
                        {/*<div className="d-flex w-100 justify-content-between">*/}
                        <div className="d-flex flex-row-reverse">
                            {/*<h4>Chair</h4>*/}
                            13.06.2019
                        </div>
                        <Row>
                            <Col className="align-self-center text-center h3">
                                <p className="h3 font-weight-bold">
                                    Chair
                                </p>
                                    <Badge variant="warning">Waiting for Routing</Badge>
                            </Col>
                            <Col>
                                <div className="font-weight-bold">Sender</div>
                                <p>
                                    Jon Doe<br/>
                                    Mainstreet 2<br/>
                                    0000 Musterstadt<br/>
                                </p>
                                <div className="font-weight-bold">Recipient</div>
                                <p>
                                    Jon Doe<br/>
                                    Mainstreet 2<br/>
                                    0000 Musterstadt<br/>
                                </p>
                            </Col>
                            <Col className="align-self-center text-center">
                                <p>
                                    <Button variant="secondary">More Info</Button>
                                </p>
                                <p>
                                    <Button variant="danger">Delete</Button>
                                </p>
                            </Col>
                        </Row>
                        {/*<p>Pulvinar leo id risus pellentesque vestibulum. Sed diam libero, sodales eget sapien vel,*/}
                        {/*    porttitor bibendum enim. Donec sed nibh vitae lorem porttitor blandit in nec ante.</p>*/}
                    </a>
                    {/*<a href="#" className="list-group-item list-group-item-action active">*/}
                    {/*    <div className="d-flex w-100 justify-content-between">*/}
                    {/*        <h4>Scientists found massive black hole</h4>*/}
                    {/*        <small>2 days ago</small>*/}
                    {/*    </div>*/}
                    {/*    <p>Vestibulum id metus ac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non*/}
                    {/*        aliquet sagittis. In tincidunt orci sit amet elementum vestibulum.</p>*/}
                    {/*</a>*/}
                    {/*<a href="#" className="list-group-item list-group-item-action">*/}
                    {/*    <div className="d-flex w-100 justify-content-between">*/}
                    {/*        <h4>NASA launches solar probe</h4>*/}
                    {/*        <small>3 days ago</small>*/}
                    {/*    </div>*/}
                    {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at,*/}
                    {/*        luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>*/}
                    {/*</a>*/}
                </div>
            </Container>

        );
    }
}
export default MonitorList;