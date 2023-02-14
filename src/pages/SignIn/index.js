import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { doLogin, doSuperAdminLogin, dummyLogin } from "../../actions/auth";
import { renderField } from "../../components/forms";
import { toAbsoluteUrl } from "../../utils";
import { login as validate } from "../../components/validations/signIn";

import "./signin.scss";

const SignIn = (props) => {
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (value) => {
    console.log("value ", value);
    const data = {
      email: value.email,
      password: value.password,
    };
    if (props.charityAdmin) {
      dispatch(doLogin(data))
        .then((res) =>
          navigate("/dashboard", { replace: true })
        )
        .catch((res) => setError(res.message))
    }
    else {
      dispatch(doSuperAdminLogin(data))
        .then((res) =>
          navigate("/dashboard", { replace: true })
        )
        .catch((res) => setError(res.message))
    }
  };

  const required = (value, fieldName = " ") =>
    value ? undefined : `Required ${fieldName}`;

  return (
    <>
      <section className="section-div">
        <div className="d-flex flex-wrap align-items-center div-section">
          <div className="col-6 none-mobile">
            <div>
              <figure className="text-center figure-img">
                <img
                  src={toAbsoluteUrl("/images/login-left.svg")}
                  alt="left-img"
                />
              </figure>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Form onSubmit={onSubmit} validate={validate}>
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="form-box">
                  <Link to="#">
                    <h2>Rosi Giving</h2>
                  </Link>
                  <ul className="input-list">
                    <li>
                      <Field
                        name="email"
                        type="text"
                        placeholder="Email Address"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </li>
                    <li>
                      <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </li>
                  </ul>
                  <div>
                    <h1 style={{ color: "#D33520" }}>{error}</h1>
                    <div className="d-flex align-items-center justify-content-between inner-div">
                      <label className="check-label">
                        Remember me
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <Link to="/forgot_password" className="btn">
                        Forgot your password?
                      </Link>
                    </div>
                    <h1 className="text-danger" style={{marginBottom:"7px" , textAlign:"center" }} >{error}</h1>
                    <button className="link-btn" type="submit">
                      Sign In
                    </button>
                    <span className="bottom-text">
                      Don’t have account?{" "}
                      <Link to="/registration">Register</Link>
                    </span>
                  </div>
                </form>
              )}
            </Form>
          </div>
        </div>
        <strong>Copyright ©2020 Produced by RosiGiving Charity</strong>
      </section>
    </>
  );
};

export default SignIn;
