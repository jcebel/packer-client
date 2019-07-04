import React from 'react';
import { Navbar, Nav, Form} from 'react-bootstrap';
import styled from 'styled-components/macro';

const StyledTab = styled(Nav.Link)`background: ${props => props.isactivetab ? "#e4e6e7" : "#0000" };`;
export class PlainNavigationBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <a href="/">
                        <img
                        src="/Images/Packer.png"
                        width="110px"
                        height="50x"
                        alt="Company Logo"
                        />
                    </a>
                </Navbar.Brand>
                <Nav className="mr-auto" activeKey="/home">
                    <StyledTab href="/" isactivetab={this.props.activetab === "home" ? "true" : undefined}>Home</StyledTab>
                    <StyledTab isactivetab={this.props.activetab === "delivery" ? "true" : undefined}>My Deliveries</StyledTab>
                    <StyledTab href="/beAdriver" isactivetab={this.props.activetab === "driver" ? "true" : undefined}>Be A Driver</StyledTab>
                    <StyledTab isactivetab={this.props.activetab === "send" ? "true" : undefined}>Send anything</StyledTab>
                </Nav>

                <Form inline>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                         width="50px"
                         height="50x"
                         alt="Account Icon"
                         style={{marginLeft: '10px'}}
                    />
                </Form>



            </Navbar>
        );
    }

}