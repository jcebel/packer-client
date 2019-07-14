import React from 'react';

import Registration from '../components/Registration'
import {AuthService} from '../services/AuthService';
import {withRouter} from "react-router-dom";
import styled from 'styled-components/macro';
import Image from "react-bootstrap/Image";

const Content = styled.div`
    height: 100%; 
    background-image: url(/Images/registrationBackground.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

class RegistrationViewComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        if(!this.props.location.state) {
            this.props.location.state = {};
        }
    }

    register(fields) {

        if (this.props.location.state.missingCheckbox) {
            AuthService.updateUserType(fields.checkboxIds.includes('driver'),
                fields.checkboxIds.includes('deliveryClient'))
                .then(() => {
                    this.props.history.push(this.props.location.state.redirectTo);
                })
                .catch((e) => {
                    console.error(e);
                    this.setState({
                        error: e
                    });
                });
        } else {
            AuthService.register(fields).then(() => {
                this.props.history.push('/');
            }).catch((e) => {
                console.error(e);
                this.setState({
                    error: e
                });
            })
        }
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
                <Registration missingCheckbox={this.props.location.state.missingCheckbox} onSubmit={(fields) => this.register(fields)}
                      error={this.state.error}/>
            </Content>
        );
    }
}

export const RegistrationView = withRouter(RegistrationViewComponent);