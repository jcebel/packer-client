import React from 'react';

import Registration from '../components/Registration'
import {AuthService} from '../services/AuthService';
import {withRouter} from "react-router-dom";
import styled from 'styled-components/macro';

const Content = styled.div`
    height: 60em; 
    background-image: url(/Images/registrationBackground.jpg);
    background-position: center top;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;
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
            <Content>
                <Registration missingCheckbox={this.props.location.state.missingCheckbox} onSubmit={(fields) => this.register(fields)}
                      error={this.state.error}/>
            </Content>
        );
    }
}

export const RegistrationView = withRouter(RegistrationViewComponent);