import React from 'react';
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';

import {Col, Container, Alert} from 'react-bootstrap';
import * as Yup from 'yup';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components/macro';
import {AuthService} from "../services/AuthService";


const Warning = styled.div`
    color: red;`;

const checkboxes = [
    {id: "deliveryClient", name: "Delivery Client"},
    {id: "driver", name: "Driver"},
];

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

    componentDidMount() {
        if (this.props.missingCheckbox) {
            AuthService.getCurrentUserFromDB().then((data) => {
                this.setState({
                    firstName: data.firstName || '',
                    name: data.name || '',
                    email: data.email || '',
                    password: '*************',
                    confirmPassword: '*************'
                })
            })
        }
    }

    handleSubmit(event) {
        this.setState(event);
        let fields = this.state;
        delete fields.confirmPassword;
        this.props.onSubmit(fields);
    }

    render() {
        return (
            <Container className="p-3">
                <Col sm={6}>
                <h3>Join the Packer community!</h3>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        firstName: this.state.firstName,
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        confirmPassword: this.state.confirmPassword,
                        checkboxIds: ["deliveryClient"]
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
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('Confirm Password is required'),
                        checkboxIds: Yup.array()
                            .required('At least one checkbox is required')
                    })}
                    onSubmit={this.handleSubmit}
                    render={({errors, touched, values}) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text"
                                       className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}
                                       disabled={this.props.missingCheckbox ? true : false}/>
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Last Name</label>
                                <Field name="name" type="text"
                                       className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                                       disabled={this.props.missingCheckbox ? true : false}/>
                                <ErrorMessage name="name" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text"
                                       className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                                       disabled={this.props.missingCheckbox ? true : false}/>
                                <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password"
                                       className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                                       disabled={this.props.missingCheckbox ? true : false}/>
                                <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password"
                                       className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}
                                       disabled={this.props.missingCheckbox ? true : false}/>
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
                            </div>

                            {this.props.missingCheckbox ? <Alert
                                variant="success">Select <b>{checkboxes.find((value) => value.id === this.props.missingCheckbox).name} </b>to
                                activate your user for this action</Alert> : <div/>}

                            Register as:
                            <div className="form-group">
                                <FieldArray name="checkboxIds"
                                            render={arrayHelpers => (
                                                <div>
                                                    {checkboxes.map(category => (
                                                        <div key={category.id}>
                                                            <label>
                                                                <input
                                                                    name="checkboxIds"
                                                                    type="checkbox"
                                                                    value={category.id}
                                                                    checked={values.checkboxIds.includes(category.id)}
                                                                    onChange={e => {
                                                                        if (e.target.checked) arrayHelpers.push(category.id);
                                                                        else {
                                                                            const idx = values.checkboxIds.indexOf(category.id);
                                                                            arrayHelpers.remove(idx);
                                                                        }
                                                                    }}
                                                                />{" "}
                                                                {category.name}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}/>
                                <Warning>{errors["checkboxIds"]}</Warning>
                            </div>
                            <div className="form-group">
                                <button type="submit"
                                        className="btn btn-primary mr-2">{this.props.missingCheckbox ? "Update User" : "Register"}</button>
                                {!this.props.missingCheckbox &&
                                < button type="reset" className="btn btn-secondary mr-2">Reset</button>}
                                {!this.props.missingCheckbox && <button type="button" className="btn btn-secondary"
                                                                        onClick={() => this.props.history.push('/login')}>Login
                                </button>
                                }
                            </div>
                        </Form>
                    )}
                />
                </Col>
            </Container>
        )
    }
}

export default withRouter(Registration);
