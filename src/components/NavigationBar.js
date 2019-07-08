import React from 'react';
import UserMenu from './UserMenu'
import { Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components/macro';
import UserService from "../services/UserService";

const StyledTab = styled(Nav.Link)`background: ${props => props.isactivetab ? "#e4e6e7" : "#0000" };`;
export class PlainNavigationBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        };
        this.handleLogout = this.handleLogout.bind(this);
        console.log("Navbar State: " + JSON.stringify(this.state))
    }

    handleLogout() {
        UserService.logout();
        this.setState({
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        });
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
                    <StyledTab href={`/deliverymonitor/${this.state.user.id}`} isactivetab={this.props.activetab === "delivery" ? "true" : undefined}>My Deliveries</StyledTab>
                    <StyledTab href="/beAdriver" isactivetab={this.props.activetab === "driver" ? "true" : undefined}>Be A Driver</StyledTab>
                    <StyledTab isactivetab={this.props.activetab === "send" ? "true" : undefined}>Send anything</StyledTab>
                </Nav>
                <Nav>
                    <UserMenu user={this.state.user} handleLogout={this.handleLogout}/>
                </Nav>
            </Navbar>
        );
    }

}