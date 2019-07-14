import React from 'react';
import { withRouter } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import {AuthService} from '../services/AuthService'
import styled from 'styled-components/macro'

const StyledDiv = styled.div`
    color: grey;
`;

class UserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: AuthService.isAuthenticated() ? AuthService.getCurrentUser() : undefined
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        AuthService.logout();
        this.setState({
            user: AuthService.isAuthenticated() ? AuthService.getCurrentUser() : undefined
        });
        if(this.props.location.pathname !== '/') {
            this.props.history.push('/');
        }
        else {
            window.location.reload();
        }
    }

    render(){
        return(
            <NavDropdown alignRight title={
                                 <img
                                     src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                     width="50px"
                                     height="50x"
                                     alt="Account Icon"
                                 />
                         }>
                {this.state.user ?[
                    <NavDropdown.Item className="text-center" key={1} onClick={this.handleLogout}>
                        <div>Logout</div>
                        <StyledDiv>({this.state.user.email})</StyledDiv>
                    </NavDropdown.Item>
            ]: [<NavDropdown.Item className="text-center" key={1} onClick={()=> this.props.history.push('/login')}>Login</NavDropdown.Item>,
                <NavDropdown.Item className="text-center" key={2} onClick={()=> this.props.history.push('/register')}>Register</NavDropdown.Item>
                ]}

            </NavDropdown>
        )
    }
}

export default withRouter(UserMenu)