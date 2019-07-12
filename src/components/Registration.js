import React from 'react';
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';
import {Container} from 'react-bootstrap';
import * as Yup from 'yup';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components/macro';

const Warning = styled.div`
    color: red;`;

const checkboxes = [
    { id: "deliveryClient", name: "Delivery Client" },
    { id: "driver", name: "Driver" },
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

    handleSubmit(event){
        this.setState(event);
        let fields = this.state;
        delete fields.confirmPassword;
        this.props.onSubmit(fields);
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
                        confirmPassword: '',
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
                        confirmPassword:  Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('Confirm Password is required'),
                        checkboxIds: Yup.array()
                            .required('At least one checkbox is required')
                    })}
                    onSubmit={this.handleSubmit}
                    render={({ errors, touched, values }) => (
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
                                                                        if(e.target.checked) arrayHelpers.push(category.id);
                                                                        else{
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
                                <button type="submit" className="btn btn-primary mr-2">Register</button>
                                <button type="reset" className="btn btn-secondary mr-2">Reset</button>
                                <button type="button" className="btn btn-secondary"
                                        onClick={()=> this.props.history.push('/login')}>Login</button>
                            </div>
                        </Form>
                    )}
                />
            </Container>
        )
    }
}

export default withRouter(Registration);
