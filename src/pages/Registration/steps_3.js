import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { dummyLogin } from "../../actions/auth";
import { renderField, renderSelectField } from "../../components/forms";
import Tookit from "../../components/svg/tookit";
import { toAbsoluteUrl } from "../../utils";
import Select from "react-select";
import "./registration.scss";
import { ADD_CHARITY_DETAILS_STEPS_3 } from "../../constants/types";
import { addTOCause, addTOCategory } from "../../actions/registration.js";
import moment from 'moment'
import { registrationstep3 as validate } from "../../components/validations/signIn";

const Steps3 = ({ setSteps, step }) => {

  const [cause, setCause] = useState([])
  const [category, setCategory] = useState([])

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chairty = useSelector((state) => state.RegistrationReducer.step_3);

  console.log(chairty)
  const onSubmit = (value) => {
    console.log("value ", value);
    const data = {
      website: value.CharityWebsite,
      charityFilter: value.CharityFilter,
      charityContribution: value.CharityContribution,
      formedYear: Number(moment(value?.CharityFormedyear)?.format("YYYY")),
      taxId: value.TaxId,
      category: value?.CharityCategory,
      relatedCause: value?.causeList,
    };
    dispatch({
      type: ADD_CHARITY_DETAILS_STEPS_3,
      payload: data,
    });
    setSteps(3);
  };
  const prev = () => {
    setSteps(1)
  }

  const required = (value, fieldName = " ") =>
    value ? undefined : `Please enter ${fieldName}`;

  const options = [
    { value: "Help Girl Child", label: "Help Girl Child" },
    { value: "Women safety", label: "Women safety" },
    { value: "F = Failing", label: "F = Failing" },
  ];

  const fetchCause = () => {
    dispatch(addTOCause({ page: 1, limit: 10, search: "" }))
      .then(res => {
        const data = res.data;
        let causeArr = [];

        data?.causeFilter?.map((val, ind) => {
          causeArr.push({ value: val._id, label: val.causename })
        })

        setCause(causeArr)
      })
  }

  const fetchCategory = () => {
    dispatch(addTOCategory({ page: 1, limit: 10, search: "" }))
      .then(res => {
        const data = res.data;
        let categoryArr = [];

        data?.categoryFilter?.map((val, ind) => {
          categoryArr.push({ value: val._id, label: val.category_name })
        })
        setCategory(categoryArr)
      })
  }

  useEffect(() => {
    fetchCause();
    fetchCategory();
  }, [])

  console.log("caterory list", category, cause);
  return (
    <>
      <div className="section-steps">
        <div className="d-flex flex-wrap w-100">
          <div className="col-12 col-box">
            <Form
              onSubmit={onSubmit}
              validate={validate}
              initialValues={{
                CharityWebsite: chairty?.website || "",
                CharityCategory: chairty?.category || "",
                // CharityCategory: { value: 'Women safety', label: 'Women safety' },
                // CharityCategory: 'Women safety',
                CharityFilter: chairty?.charityFilter || "",
                CharityContribution: chairty?.charityContribution || "",
                CharityFormedyear: chairty?.formedYear || "",
                TaxId: chairty?.taxId || "",
                causeList: chairty?.relatedCause || "",
              }}
            >
              {({ handleSubmit, values }) => (
                <form
                  onSubmit={handleSubmit}
                  className="form-box step-form-box"
                >
                  {/* <h2>Rosi Giving</h2> */}
                  <div className=" d-flex flex-wrap w-100">
                    <div className="col-md-6 col-box">
                      <ul className="input-list">
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Charity Website
                          </label>
                          <Field
                            name="CharityWebsite"
                            type="text"
                            placeholder="Charity Website"
                            component={renderField}
                            className="form-grp"
                            inputclass="input-box"
                          />
                        </li>
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Charity Category
                          </label>
                          <Field
                            name="CharityCategory"
                            component={renderSelectField}
                            validate={(value) => required(value, "Charity Category")}
                            className="basic-multi-select"
                            options={category}
                            isMulti={false}
                          />
                          {/* <Field
                            name="CharityCategory"
                            type="text"
                            placeholder="Charity Category"
                            component={renderField}
                            validate={(value) =>
                              required(value, "Charity Category")
                            }
                            className="form-grp"
                            inputclass="input-box"
                          /> */}
                        </li>

                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Charity Filter
                          </label>
                          <Field
                            name="CharityFilter"
                            type="text"
                            placeholder="Charity Filter"
                            component={renderField}
                            className="form-grp"
                            inputclass="input-box"
                          />
                        </li>
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Charity Contribution{" "}
                          </label>
                          <Field
                            name="CharityContribution"
                            type="text"
                            placeholder="Charity Contribution"
                            component={renderField}
                            className="form-grp"
                            inputclass="input-box"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-box">
                      <ul className="input-list">
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Charity Formed year <Tookit />
                          </label>
                          <Field
                            name="CharityFormedyear"
                            type="number"
                            placeholder="Charity Formed year"
                            component={renderField}
                            className="form-grp"
                            inputclass="input-box"
                          />
                        </li>
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Tax Id <Tookit />
                          </label>
                          <Field
                            name="TaxId"
                            type="number"
                            placeholder="Tax Id"
                            component={renderField}
                            className="form-grp"
                            inputclass="input-box"
                          />
                        </li>
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span>  Related Cause
                          </label>
                          <Field
                            name="causeList"
                            component={renderSelectField}
                            validate={(value) => required(value, "Cause Related")}
                            className="basic-multi-select"
                            options={cause}
                            isMulti={true}
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                      <div className="button-box">
                        <button type="button" className="link-btn" onClick={prev}>prev</button>
                      </div>
                      <div className="button-box">
                        <button type="submit" className="link-btn">next</button>
                      </div>
                    </div>
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

export default Steps3;
