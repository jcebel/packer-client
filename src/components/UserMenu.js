import React from 'react';
import { withRouter } from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';

class UserMenu extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    
    handleLogout(){
        this.props.handleLogout();
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
                {this.props.user ?[
                    <NavDropdown.Item className="text-center" key={1} onClick={this.handleLogout}>Logout</NavDropdown.Item>
            ]: [<NavDropdown.Item className="text-center" key={1} onClick={()=> this.props.history.push('/login')}>Login</NavDropdown.Item>,
                <NavDropdown.Item className="text-center" key={2} onClick={()=> this.props.history.push('/register')}>Register</NavDropdown.Item>
                ]}

            </NavDropdown>
        )
    }
}

export default withRouter(UserMenu)