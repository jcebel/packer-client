import React from 'react';
import UserMenu from './UserMenu'
import { Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components/macro';

const StyledTab = styled(Nav.Link)`background: ${props => props.isactivetab ? "#e4e6e7" : "#0000" };`;
export class PlainNavigationBar extends React.Component{

    render() {
        return (
            <Navbar bg="light" variant="light" sticky="top">g
                <Navbar.Brand>
                    <a href="/">
                        <img
                        src="/Images/Packer.png"
                        height="50px"
                        alt="Company Logo"
                        />
                    </a>
                </Navbar.Brand>
                <Nav className="mr-auto" activeKey="/home">
                    <StyledTab href="/" isactivetab={this.props.activetab === "home" ? "true" : undefined}>Home</StyledTab>
                    <StyledTab href={"/deliverymonitor"} isactivetab={this.props.activetab === "delivery" ? "true" : undefined}>My Deliveries</StyledTab>
                    <StyledTab href="/beAdriver" isactivetab={this.props.activetab === "driver" ? "true" : undefined}>Be A Driver</StyledTab>
                    <StyledTab href="/sendanything" isactivetab={this.props.activetab === "send" ? "true" : undefined}>Send anything</StyledTab>
                </Nav>
                <Nav>
                    <UserMenu/>
                </Nav>
            </Navbar>
        );
    }

}
