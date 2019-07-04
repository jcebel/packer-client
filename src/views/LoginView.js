import React from 'react';

import Login from '../components/Login';

import UserService from '../services/UserService';


export class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        UserService.login(user.email, user.password).then(() => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
    }

    render() {
        return (
            <Login onSubmit={(user) => this.login(user)} error={this.state.error}></Login>
        );
    }
}