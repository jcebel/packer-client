import React from 'react';

import Login from '../components/Login';

import {AuthService} from '../services/AuthService';


export class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        AuthService.login(user.email, user.password).then(() => {
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