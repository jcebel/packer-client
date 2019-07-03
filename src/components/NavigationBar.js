import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import UserMenu from './UserMenu'

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
                    <Nav.Link href="/" >Home</Nav.Link>
                    <Nav.Link>My Deliveries</Nav.Link>
                    <Nav.Link href="/beAdriver">Be A Driver</Nav.Link>
                    <Nav.Link>Send anything</Nav.Link>
                </Nav>
                <Nav>
                    <UserMenu/>
                </Nav>
            </Navbar>
        );
    }

}