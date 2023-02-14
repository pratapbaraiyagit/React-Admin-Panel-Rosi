import React, { useState, useEffect } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ImgUpload from "../../components/common/img-upload";
import { renderField, renderNumberField, renderSelectField } from "../../components/forms";
import Tookit from "../../components/svg/tookit";
import { ADD_CHARITY_DETAILS_STEPS_2 } from "../../constants/types";
import { toAbsoluteUrl } from "../../utils";
import "./registration.scss";
import { registrationstep2 as validate } from "../../components/validations/signIn";
import { addTOCity, addTOCountry, addTOState } from "../../actions/registration";

const Steps2 = ({ setSteps, step }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chairty = useSelector((state) => state.RegistrationReducer.step_2);

  const [charityImages, setCharityImages] = useState();
  const [oldCharityImages, setOldCharityImages] = useState();
  const [deleteImage, setDeleteImage] = useState([])
  
  const [charityLogo, setCharityLogo] = useState();
  const [oldCharityLogo, setOldCharityLogo] = useState([]);
  const [logo, setLogo] = useState();
  const [logoerror, setLogoerror] = useState("")

  const [images, setImages] = useState([]);
  const [imageserror, setImageerror] = useState("")
  const [country, setCountry] = useState([])
  const [state, setState] = useState([])
  const [city ,setCity] = useState([])
  const [selectedCountry, setselectedCountry] = useState()
  const [selectedState, setselectedState] = useState()


  const charityLogoChangeHandler = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setCharityLogo(imageList);
  }

  useEffect(() => {
    const logoArr = chairty?.charitylogo?.map((item) => item.data_url);
    setOldCharityLogo(chairty?.charitylogo ? chairty?.charitylogo : [])
    // setCharityLogo(chairty?.logo ? chairty?.logo : [])
  }, [chairty?.logo])

  useEffect(() => {
    const imgs = chairty?.charityimages?.map((item) => item.data_url);
    setOldCharityImages(chairty?.charityimages ? chairty?.charityimages : [])
    // setCharityImages(chairty?.charityImages ? chairty?.charityImages : [])
  }, [chairty?.logo])

  useEffect(() => {
    if (logo) {
      setLogoerror("")
    }
  }, [logo])

  useEffect(() => {
    if (images) {
      setImageerror("")
    }
  }, [images])


  const onSubmit = (value) => {
    console.log("value ", value);
    if (!logo) {
      setLogoerror("Please upload logo")
    } else {
      setLogoerror("")
    }
    if (images.length < 1) {
      setImageerror("Please upload at least one charity image ")
      return
    }
    const data = {
      description: value.CharityDescription,
      brief_description: value.CharityBriefDescription,
      phoneno: Number(value.PhoneNumber),
      tagline: value.CharityTagLine,
      logo: logo,
      mediaImage: images,
      charitylogo: oldCharityLogo.length ? oldCharityLogo : charityLogo,
      charityimages: oldCharityImages.length ? oldCharityImages : charityImages,
      address: {
        floor: value.CharityAddress,
        number: value.CharityAddress,
        street: value.CharityAddress,
        city: value.city,
        state: value.state,
        zipcode: value.pincode,
        country: value.country,
      }
    };
    dispatch({
      type: ADD_CHARITY_DETAILS_STEPS_2,
      payload: data,
    });
    setSteps(2);
  };
  const prev = () => {
    console.log("ok");
    setSteps(0);
  };

  const fetchCountry = (id) => {
    console.log(id);
    dispatch(addTOCountry())
      .then(res => {
        const data = res.data
        let countryArr = [];
        data.map((val, ind) => {
          countryArr.push({ value: val.id, label: val.name })
        })
        setCountry(countryArr)
      })
  }

  const fetchState = (data) => {
    dispatch(addTOState(data))
      .then(res => {
        const data = res.data
        let stateArr = [];
        data.map((val, ind) => {
          stateArr.push({ value: val.id, label: val.name })
        })
        setState(stateArr)
      })
  }

  const fetchCity =(data)=>{
    dispatch(addTOCity(data))
      .then(res => {
        const data = res.data
        let cityArr = [];
        data.map((val, ind) => {
          cityArr.push({ value: val.id, label: val.name })
        })
        setCity(cityArr)
      })
  }
  useEffect(() => {
    fetchCountry()
  }, [])

  useEffect(() => {
    fetchState({ countryId: selectedCountry?.value })
  }, [selectedCountry])

  useEffect(()=>{
    fetchCity({stateId:selectedState?.value })
  },[selectedState])
  return (
    <>
      <div className="section-steps">
        <div className="d-flex flex-wrap w-100">
          <div className="col-12 col-box">
            <Form
              mutators={{
                // expect (field, value) args from the mutator
                setValue: ([field, value], state, { changeValue }) => {
                  changeValue(state, field, () => value)
                }
              }}
              onSubmit={onSubmit}
              validate={validate}
              initialValues={{
                CharityDescription: chairty?.description || "",
                CharityBriefDescription: chairty?.brief_description || "",
                PhoneNumber: chairty?.phoneno || "",
                CharityTagLine: chairty?.tagline || "",
                CharityAddress: chairty?.address?.floor || "",
                city: chairty?.address?.city || "",
                state: chairty?.address?.state || "",
                pincode: chairty?.address?.zipcode || "",

              }}
            >
              {({ handleSubmit, form, values }) => (
                <form
                  onSubmit={handleSubmit}
                  className="form-box step-form-box"
                >
                  {/* <h2>Rosi Giving</h2> */}
                  {console.log('values: ', values)}
                  <div className=" d-flex flex-wrap w-100">
                    <div className="col-md-6  col-12 col-box">
                      <ul className="input-list">
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Charity Brief Description <Tookit />
                          </label>
                          <Field
                            name="CharityBriefDescription"
                            type="text"
                            placeholder="Charity Brief Description"
                            component={renderField}
                            className="form-grp"
                            inputclass="input-box"
                          />
                        </li>
                        <li>
                          <label className="label-text">
                            Phone Number <Tookit />
                          </label>

                          <Field
                            name="PhoneNumber"
                            // type="text"
                            placeholder="Phone Number"
                            component={renderNumberField}
                            formatStyle={"##### #####"}
                            className="form-grp"
                            inputclass="input-box"
                          />
                        </li>


                        <li>
                          <label className="label-text">
                            Charity Logo Image
                            <Tookit />
                          </label>
                          <ImgUpload
                            multiple={false}
                            setImg={setLogo}
                            setImages={setCharityLogo}
                            oldImages={oldCharityLogo}
                            setOldImages={images => setOldCharityLogo(images)}
                            images={charityLogo}
                            moduleName='charityLogo'
                          />
                          <h7 className='text-danger'>{logoerror}</h7>
                        </li>
                        <li>
                          <label className="label-text">
                            Charity other Images <Tookit />
                          </label>
                          <ImgUpload
                            multiple={true}
                            oldImages={oldCharityImages}
                            setImg={setImages}
                            setOldImages={images => setOldCharityImages(images)}
                            setImages={setCharityImages}
                            setDeleteImage={image => setDeleteImage([...deleteImage, image])}
                            images={charityImages}
                            moduleName='charityImages'
                          />
                          <h7 className='text-danger'>{imageserror}</h7>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6  col-12 col-box">
                      <ul className="input-list">
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Charity Description <Tookit />
                          </label>
                          <Field
                            name="CharityDescription"
                            type="text"
                            placeholder="Charity Description"
                            component={renderField}
                            className="form-grp"
                            inputclass="input-box"
                          />
                        </li>
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Charity Tagine
                            <Tookit />
                          </label>
                          <Field
                            name="CharityTagLine"
                            type="text"
                            placeholder="Charity Tagline"
                            component={renderField}
                            className="form-grp"
                            inputclass="input-box"
                          />
                        </li>
                        <li>
                          <label className="label-text">
                            {" "}
                            <span>*</span> Charity Address
                          </label>
                          <Field
                            name="CharityAddress"
                            type="text"
                            placeholder="Charity Address"
                            component={renderField}
                            className="form-grp"
                            inputclass="input-box"
                          />
                          <div className="inner-form-list">
                            
                            <Field
                              name="country"
                              placeholder="Country"
                              isCountryField={true}
                              setselectedCountry={setselectedCountry}
                              component={renderSelectField}
                              mutator={form.mutators.setValue}
                              className="form-grp col-grp"
                              inputclass="input-box"
                              options={country}
                              isMulti={false}
                            />
                            <Field
                              name="pincode"
                              type="number"
                              placeholder="Zip code"
                              component={renderField}
                              // formatStyle={"#####"}
                              className="form-grp col-grp"
                              inputclass="input-box"
                            />

                            <Field
                              name="state"
                              type="text"
                              isStateField={true}
                              setselectedState={setselectedState}
                              placeholder="State"
                              component={renderSelectField}
                              mutator={form.mutators.setValue}
                              className="form-grp col-grp"
                              // inputclass="input-box"
                              options={state}
                              isMulti={false}
                            />
                            <Field
                              name="city"
                              type="text"
                              placeholder="City"
                              component={renderSelectField}
                              className="form-grp col-grp"
                              inputclass="input-box"
                              isMulti={false}
                              options={city}
                            />
                            {/* <Field
                                                        name="CharityName"
                                                        type="text"
                                                        placeholder="-"
                                                        component={renderField}
                                                        validate={(value)=> required(value,'Charity Name')}
                                                        className="form-grp col-grp"
                                                        inputclass="input-box"
                                                        /> 
                                                         <Field
                                                        name="CharityName"
                                                        type="text"
                                                        placeholder="-"
                                                        component={renderField}
                                                        validate={(value)=> required(value,'Charity Name')}
                                                        className="form-grp col-grp"
                                                        inputclass="input-box"
                                                        />
                                                        <Field
                                                        name="CharityName"
                                                        type="text"
                                                        placeholder="-"
                                                        component={renderField}
                                                        validate={(value)=> required(value,'Charity Name')}
                                                        className="form-grp col-grp"
                                                        inputclass="input-box"
                                                        /> */}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                      <div className="button-box">
                        <button
                          type="button"
                          className="link-btn"
                          onClick={prev}
                        >
                          prev
                        </button>
                      </div>
                      <div className="button-box">
                        <button type="submit" className="link-btn">
                          next
                        </button>
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

export default Steps2;
