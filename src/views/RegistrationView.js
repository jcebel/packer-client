import React from 'react';

import {Registration} from '../components/Registration'

export class RegistrationView extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Registration onSubmit={(user) => this.register(user)} error={this.state.error}></Registration>
        );
    }
}