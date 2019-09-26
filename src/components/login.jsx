import React, { Component } from 'react';
import{ Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Image, Spinner } from 'react-bootstrap';
import * as Yup from 'yup';

const user = localStorage.getItem('token');

class LoginComponent extends Component {
    state = {  }
    render() { 
        if(user) return <Redirect to="/" />

        const LoginSchema = Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(8, 'Must be 8 character long').required('Password is required')
        })

        return (  
            <div className="applicationForm-wrap">
                <Formik
                    initialValues={{ email: '', password: ''}}
                    validationSchema={LoginSchema}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(true);
                        setTimeout(() => {
                            const formData = JSON.stringify(values, null, 2);
                            localStorage.setItem('token', formData);
                            actions.setSubmitting(false);
                            const { state } =  this.props.location;
                            window.location = state ? state.from.pathname : '/';
                        }, 2000)
                    }}
                >
                {({errors, isSubmitting, touched}) => (
                    <Form>
                        <Image src={`https://robohash.org/2?set=set2&size=60x60`} className="mb-4 roboLogo" alt="robohash" width="72" height="72" roundedCircle/>
                        <h5 className="h5 mb-3 font-weight-normal">Login To Monster Rolodex</h5>
                        <div className="form-group">
                            <Field type="email" name="email" className={errors.email ? 'form-control is-invalid' : (touched.email ? 'form-control is-valid' : 'form-control')} placeholder="Email address"/>
                            {errors.email && <ErrorMessage name="email" component="div" className="invalid-feedback" />}
                        </div>
                        <div className="form-group">
                            <Field type="password" name="password" className={errors.password ? 'form-control is-invalid' : (touched.password ? 'form-control is-valid' : 'form-control')} placeholder="Password" />
                            {errors.password && <ErrorMessage name="password" component="div" className="invalid-feedback" />}
                        </div>
                        <Button type="submit" disabled={isSubmitting} variant="primary" block>Sign In {isSubmitting && <Spinner animation="border" variant="light" size="sm" />}</Button>
                    </Form>
                )}
                </Formik>
            </div>
        );
    }
}

 
export default LoginComponent;