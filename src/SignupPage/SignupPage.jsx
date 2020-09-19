import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Create your account</h1>
                <div>
                    <Carousel autoPlay>
                        <div>
                            <img src="assets/1.png" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="assets/2.png" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="assets/3.png" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
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
                        const { from } = this.props.location.state || { from: { pathname: '/home' } };
                        this.props.history.push(from);
                    }}
                    render={({
                                 errors, status, touched, isSubmitting,
                             }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="username">Email</label>
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
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    Send verification email
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
    }
}

// todo add Facebook, google, apple icons
export {SignupPage};
