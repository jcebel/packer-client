import React from 'react';
import Login from '../components/Login';
import {AuthService} from '../services/AuthService';
import styled from 'styled-components/macro';

const Content = styled.div`
    height: 60em; 
    background-image: url(/Images/registrationBackground.jpg);
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;
`;

export class LoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        AuthService.login(user.email, user.password).then(() => {
            if(this.props.location.prevPath !== undefined){
                this.props.history.push(this.props.location.prevPath)
            } else{
                this.props.history.push('/');
            }
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
    }

    render() {
        return (
            <Content>
                <Login onSubmit={(user) => this.login(user)} error={this.state.error}></Login>
            </Content>
        );
    }
}