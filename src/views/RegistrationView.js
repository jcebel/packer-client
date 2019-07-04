import React from 'react';

import Registration from '../components/Registration'
import UserService from '../services/UserService';

export class RegistrationView extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    register(fields) {
        UserService.register(fields).then(() => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        })
    }

    render() {
        return (
            <Registration onSubmit={(fields) => this.register(fields)} error={this.state.error}></Registration>
        );
    }
}