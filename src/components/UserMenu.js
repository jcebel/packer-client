import React from 'react';
import UserService from  '../services/UserService';
import { withRouter } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';


class UserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    logout() {
        UserService.logout();
        this.setState({
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        });
        if(this.props.location.pathname != '/') {
            this.props.history.push('/');
        }
        else {
            window.location.reload();
        }
    }

    render(){
        return(
            <NavDropdown title={
                             <div>
                                 <img
                                     src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                                     width="50px"
                                     height="50x"
                                     alt="Account Icon"
                                     // style={{marginLeft: '10px'}}
                                 />
                             </div>
                         }>
                {this.state.user ?[
                    <NavDropdown.Item key={1} onClick={() => this.logout()}>Logout</NavDropdown.Item>
            ]: [<NavDropdown.Item key={1} onClick={()=> this.props.history.push('/login')}>Login</NavDropdown.Item>,
                <NavDropdown.Item key={2} onClick={()=> this.props.history.push('/register')}>Register</NavDropdown.Item>
                ]}

            </NavDropdown>
        )
    }
}

export default withRouter(UserMenu)