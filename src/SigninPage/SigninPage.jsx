import React from 'react';
import {
    ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { userModel, userService } from '@/_services';

class SigninPage extends React.Component {
    constructor(props) {
        super(props);

        // redirect to home if already logged in
        if (userModel.currentUserValue) {
            this.props.history.push('/home');
        }
    }

    render() {
        // todo add slideshow
        const SigninForm = () => (
            <div>
                <h2>Sign in</h2>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Username is required'),
                        password: Yup.string().required('Password is required'),
                    })}
                    onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                        setStatus();
                        userService.login(username, password).then(
                            () => {
                                const { from } = this.props.location.state || { from: { pathname: '/home' } };
                                this.props.history.push(from);
                            },
                            (error) => {
                                setSubmitting(false);
                                setStatus(error);
                            },
                        );
                    }}
                    render={({
                                 errors, status, touched, isSubmitting,
                             }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Field
                                    name="username"
                                    type="text"
                                    className={`form-control${errors.username && touched.username ? ' is-invalid' : ''}`}
                                />
                                <ErrorMessage
                                    name="username"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field
                                    name="password"
                                    type="password"
                                    className={`form-control${errors.password && touched.password ? ' is-invalid' : ''}`}
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="invalid-feedback"
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    Login
                                </button>
                                {isSubmitting
                                && (
                                    <img
                                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                    />
                                )
                                }
                            </div>
                            {status
                            && <div className="alert alert-danger">{status}</div>
                            }
                        </Form>
                    )}
                />
            </div>
        );

        const RegisterOption = () => (
            <div>
                New user?
                {' '}
                <Link to="/signup">Sign up!</Link>
            </div>
        );

        const ForgotPasswordOption = () => (
            <div>
                Forgot password?
                {' '}
                <Link to="">Ask a new one</Link>
            </div>
        );

        return (
            <div>
                <SigninForm />
                <RegisterOption />
                <ForgotPasswordOption />
            </div>
        );
    }
}

export {SigninPage};
