import React, { useEffect } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { dummyLogin } from "../../actions/auth";
import { renderField } from "../../components/forms";
import { ADD_CHARITY_DETAILS_STEPS_1 } from "../../constants/types";
import { toAbsoluteUrl } from "../../utils";
import { registrationstep1 as validate } from "../../components/validations/signIn";
import "./registration.scss";

const Steps1 = ({ setSteps, step }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chairty = useSelector((state) => state.RegistrationReducer.step_1);
  const onSubmit = (value) => {
    const data = {
      userName: value.UserName,
      charityName: value.CharityName,
      charityPersonName: value.CharityPersonName,
      charityEmailAddress: value.CharityEmailAddress,
      password: value.Password,
      confirmPassword: value.ConfirmPassword,
    };
    dispatch({
      type: ADD_CHARITY_DETAILS_STEPS_1,
      payload: data,
    });
    setSteps(1);
    console.log(chairty);
  };

  const required = (value, fieldName = " ") =>
    value ? undefined : `Required ${fieldName}`;

  return (
    <>
      <div className="section-steps">
        <div className="d-flex flex-wrap w-100">
          <div className="col-12 col-box">
            <Form
              onSubmit={onSubmit}
              const
              initialValues={{
                UserName: chairty?.userName || "",
                CharityName: chairty?.charityName || "",
                CharityPersonName: chairty?.charityPersonName || "",
                CharityEmailAddress: chairty?.charityEmailAddress || "",
                Password: chairty?.password || "",
                ConfirmPassword: chairty?.confirmPassword || "",
              }}
            validate={validate}
            >
              {({ handleSubmit, form }) => (
                <form
                  id="form-step0"
                  onSubmit={handleSubmit}
                  className="form-box"
                >
                  {/* <h2>Rosi Giving</h2> */}
                  <ul className="input-list">
                    <li>
                      <Field
                        name="UserName"
                        type="text"
                        placeholder="UserName"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </li>
                    <li>
                      <Field
                        name="CharityName"
                        type="text"
                        placeholder="Charity Name"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </li>
                    <li>
                      <Field
                        name="CharityPersonName"
                        type="text"
                        placeholder="Charity Person Name"
                        component={renderField}
                       className="form-grp"
                        inputclass="input-box"
                      />
                    </li>
                    <li>
                      <Field
                        name="CharityEmailAddress"
                        type="text"
                        placeholder="Charity Email Address"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </li>
                    <li>
                      <Field
                        name="Password"
                        type="password"
                        placeholder="Password"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </li>
                    <li>
                      <Field
                        name="ConfirmPassword"
                        type="Password"
                        placeholder="Confirm Password"
                        component={renderField}
                        className="form-grp"
                        inputclass="input-box"
                      />
                    </li>
                  </ul>
                  <div>
                    <div className="d-flex align-items-center justify-content-between inner-div">
                      <label className="check-label">
                        Remember me
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      {/* <Link to='#' className='btn'>Forgot your password?</Link> */}
                    </div>
                    {/* <Link to='/home' className='link-btn'>Sign In</Link> */}

                    <span className="bottom-text">
                      Already have account? <Link to="/signin">Login</Link>
                    </span>
                  </div>

                  <div className="button-box" >
                    <button type="submit" className="link-btn">next</button>
                  </div>
                </form>
              )}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps1;
