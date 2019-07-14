import React from 'react';

import Registration from '../components/Registration'
import {AuthService} from '../services/AuthService';
import styled from 'styled-components/macro';
import Image from "react-bootstrap/Image";

const Content = styled.div`
    height: 100%; 
    background-image: url(/Images/registrationBackground.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export class RegistrationView extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    register(fields) {
        AuthService.register(fields).then(() => {
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
            <Content className="p-3">
                <a href="/">
                    <Image src="/Images/packer.png"
                           width="110px"
                           height="50x"
                           alt="Company Logo"/>
                </a>
                <Registration onSubmit={(fields) => this.register(fields)} error={this.state.error}></Registration>
            </Content>
        );
    }
}