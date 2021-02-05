import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const { name, email, password, error, success } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    });
                }
            })
            .catch(console.log("Error in signup"));
    };

    const signUpForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Name</label>
                            <input
                                className="form-control"
                                onChange={handleChange("name")}
                                type="text"
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input
                                className="form-control"
                                onChange={handleChange("email")}
                                type="email"
                                value={email}
                            />
                        </div>

                        <div className="form-group">
                            <label className="text-light">Password</label>
                            <input
                                onChange={handleChange("password")}
                                className="form-control"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button onClick={onSubmit} className="btn btn-primary btn-block">
                            Submit
            </button>
                    </form>
                </div>
            </div>
        );
    };


    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-success"
                        style={{ display: success ? "" : "none" }}>
                        New Account was Created Successfully. Please <Link to="/signin">Login Here</Link>
                    </div>
                </div>
            </div>)
    }


    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div className="alert alert-danger"
                        style={{ display: error ? "" : "none" }}>
                        {error}
                    </div>
                </div>
            </div>)
    };


    return (
        <Base title="Sign up page" description="Feel in the details to Sign Up">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
        </Base>
    );
};

export default Signup;