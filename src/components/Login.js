import React from 'react';
import {Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {withRouter} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import styled from 'styled-components/macro';

const Warning = styled.div`
    color: red;`;

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        this.setState(event);
        let fields = this.state;
        delete fields.confirmPassword;
        this.props.onSubmit(fields);
    }

    render() {
        return (
            <Container className="p-5">
                <Row className="justify-content-sm-center pt-5">
                    <a href="/">
                    <Image src="/Images/packer.png"
                           height="70x"
                           alt="Company Logo"/>
                    </a>
                </Row>
                <Row className="justify-content-sm-center p-5">
                    <Col sm={6}>
                        <h3>Welcome Back!</h3>
                        <Formik
                            initialValues={{
                                email: '',
                                password: ''
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email('Email is invalid')
                                    .required('Email is required'),
                                password: Yup.string()
                                    .required('Password is required')
                            })}
                            onSubmit={this.handleSubmit}
                            render={({errors, touched}) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        {this.props.error !== undefined ? <Warning>Wrong Email or Password</Warning>:""}
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary mr-2">Login</button>
                                        <button type="button" className="btn btn-secondary"
                                                onClick={()=> this.props.history.push('/register')}>Register</button>
                                    </div>
                                </Form>
                                )}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Login);

