"use strict";

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {Container} from 'react-bootstrap';
import * as Yup from 'yup';
import {withRouter} from 'react-router-dom';

class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        this.setState(event);
        console.log("State: " + this.state);
        let fields = this.state;
        console.log("Reg.handleSubmit: " + JSON.stringify(fields));
        delete fields.confirmPassword;
        console.log("Reg.handleSubmitDel: " + JSON.stringify(fields));
        this.props.onSubmit(fields);
        console.log("Props: " + JSON.stringify(this.props));
    }


    render() {
        return (
            <Container>
                <Formik
                    initialValues={{
                        firstName: '',
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''/*,
                        homeAddress:{
                            city: '',
                            street: '',
                            houseNumber: '',
                            postalCode: ''
                        }*/
                    }}
                    validationSchema={Yup.object().shape({
                        firstName: Yup.string()
                            .required('First Name is required'),
                        name: Yup.string()
                            .required('Last Name is required'),
                        email: Yup.string()
                            .email('Email is invalid')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(6, 'Password must be at least 6 characters')
                            .required('Password is required'),
                        confirmPassword:  Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('Confirm Password is required')/*,
                        homeAddress: Yup.array()
                            .of(
                                Yup.object().shape({
                                    city: Yup.string()
                                        .required('City is required'),
                                    street: Yup.string()
                                        .required('Street is required'),
                                    houseNumber: Yup.number()
                                        .required('House number is required'),
                                    postalCode: Yup.string()
                                        .required('Postal Code is required')
                                })
                            )*/
                    })}
                    onSubmit={this.handleSubmit}
                    render={({ errors, status, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Last Name</label>
                                <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Register</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </Form>
                    )}
                />
            </Container>
        )
    }
}

export default withRouter(Registration);
