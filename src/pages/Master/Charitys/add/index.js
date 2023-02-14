import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { Link, useNavigate } from 'react-router-dom';
import { renderField, renderNumberField, renderSelectField } from '../../../../components/forms'
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImgUpload from '../../../../components/common/img-upload';
import Encompass from '../../../Registration/tabs/encompass';
import Star from '../../../Registration/tabs/star';
import { BreadcrumbCharityManageAdd } from '../../../../components/layout/Breadcrumb-cause';
import "../charitys.scss"
import { useDispatch, useSelector } from 'react-redux';
import { CharityManagementCreate } from '../../../../actions/charity';
import { toast } from 'react-toastify';
import { causeListing } from '../../../../actions/cause';
import ImgUploadCause from '../../../../components/common/img-upload-cause';
import { addTOCategory, addTOCity, addTOCountry, addTOState } from '../../../../actions/registration';
import Tookit from '../../../../components/svg/tookit';
import moment from 'moment';
import EncompassAdd from './encompass';
import StarAdd from './star';
// import { registrationstep2 as validate } from "../../components/validations/signIn";
import { charityManagementValidation as validate } from "../../../../components/validations/charityManage";


const CharityAdd = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [startDate, setStartDate] = useState(new Date());
    const [isradio, setradio] = useState(1);

    const [causeData, setCauseData] = useState('')

    const [causeLogo, setCauseLogo] = useState();
    const [oldCauseLogo, setOldCauseLogo] = useState([]);
    const [logo, setLogo] = useState();
    const [logoerror, setLogoerror] = useState("")

    const [country, setCountry] = useState([])
    const [state, setState] = useState([])
    const [city, setCity] = useState([])
    const [selectedCountry, setselectedCountry] = useState({ value: 233, label: 'United States', phone_code: '1' })
    const [selectedState, setselectedState] = useState()

    const [category, setCategory] = useState([])

    const [financeAccountability, setFinanceAccountability] = useState([0])
    const [impactResults, setImpactResults] = useState([0])
    const [leadershipAdaptability, setLeadershipAdaptability] = useState([0])
    const [cultureCommunity, setCultureCommunity] = useState([0])
    const [average, setavg] = useState((props?.ratingDetails?.financeAccountability + props?.ratingDetails?.impactResults + props?.ratingDetails?.cultureCommunity + props?.ratingDetails?.leadershipAdaptability) / 4)

    const [financeRating, setFinanceRating] = useState(0);
    const [accountabilityRating, setAccountabilityRating] = useState(0);

    const charityFilterOptions = [
        { value: 1, label: "Local" },
        { value: 2, label: "National" },
        { value: 3, label: "International" },
        { value: 4, label: "Other" },
    ]
    useEffect(() => {
        let avg = (financeAccountability[0] + impactResults[0] + leadershipAdaptability[0] + cultureCommunity[0]) / 4
        setavg([avg])
    }, [financeAccountability, impactResults, leadershipAdaptability, cultureCommunity])

    const charityLogoChangeHandler = (imageList, addUpdateIndex) => {
        setCauseLogo(imageList);
    }

    const fetchCountry = (id) => {
        console.log(id);
        dispatch(addTOCountry())
            .then(res => {
                const data = res.data
                let countryArr = [];
                data.map((val, ind) => {
                    countryArr.push({ value: val.id, label: val.name, countryCode: val.phone_code })
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

    const fetchCity = (data) => {
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
        fetchCountry()
    }, [])

    useEffect(() => {
        fetchState({ countryId: selectedCountry?.value })
    }, [selectedCountry])

    useEffect(() => {
        fetchCity({ stateId: selectedState?.value })
    }, [selectedState])

    // useEffect(() => {
    //     setOldCauseLogo(addCause?.causelogo ? addCause?.causelogo : [])
    // }, [addCause?.logo])

    useEffect(() => {
        if (logo) {
            setLogoerror("")
        }
    }, [logo])

    const fetchCause = () => {
        dispatch(causeListing({ page: 1, limit: 999, search: "" }))
            .then(res => {
                const data = res.data;
                let causeArr = [];

                data?.causeFilter?.map((val, ind) => {
                    causeArr.push({ value: val._id, label: val.causename })
                })

                setCauseData(causeArr)
            })
    }

    useEffect(() => {
        fetchCause()
        fetchCategory();
    }, []);

    const onSubmit = (value) => {
        // if (!logo) {
        //     setLogoerror("Please upload logo")
        // } else {
        //     setLogoerror("")
        // }

        console.log('value ', value);
        const data = {
            userName: value.UserName,
            charityName: value.CharityName,
            charityPersonName: value.CharityPersonName,
            charityEmailAddress: value.CharityEmailAddress,
            // isCreatedByAdmin: true,
            adminVerification: "Approve",
            description: value.CharityDescription,
            brief_description: value.CharityBriefDescription,
            phoneno: Number(`${value?.PhoneNumber?.toString()?.replace(/[^\d]/g, '')}`),
            tagline: value.CharityTagLine,
            countryCode: value.country?.countryCode,
            logo: logo?.name,

            address: {
                floor: value.CharityAddress,
                number: value.CharityAddress,
                street: value.CharityAddress,
                city: value?.city?.label,
                state: value.state?.label,
                zipcode: value.pincode,
                country: value.country?.label,
            },

            website: value.CharityWebsite,
            charityFilter: value.CharityFilter?.value,
            charityContribution: Number(value.CharityContribution),
            formedYear: Number(moment(value?.CharityFormedyear)?.format("YYYY")),
            taxId: value.TaxId,
            categoryId: value?.CharityCategory?.value,
            relatedCause: value?.causeList?.map((item) => item.value),
            ratingType: isradio,

            encompass: {
                financeAccountability: financeAccountability[0],
                impactResults: impactResults[0],
                leadershipAdaptability: leadershipAdaptability[0],
                cultureCommunity: cultureCommunity[0]
            },
            guideStar: Number(value.radio),
            governanceBenchmark: value.governanaddTOCountryceBenchmark.value === 'Yes' ? true : false,
            gradeReceive: Number(value.gradeReceive.value),
            transperancyBenchmark: value.transperancyBenchmark.value === 'Yes' ? true : false,

            starRating: {
                finance: financeRating,
                accountability: accountabilityRating,
            },

        }
        dispatch(CharityManagementCreate(data))
            .then((res) => {
                // dispatch(causeListing()) // this for double api hit
                toast.success(res?.message || 'Success')
                navigate('/master/charity_management')
            })
            .catch((err) => {
                toast.error(err?.message || "Something went wrong")
            })
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`);

    return (
        <>
            <div>
                <div className='top-box' >
                    <BreadcrumbCharityManageAdd />
                    <h2>Charity Add </h2>
                </div>
                <div className='section-inner'>
                    <div className='form-area'>
                        <Form
                            initialValues={{country:selectedCountry}}
                            mutators={{
                                // expect (field, value) args from the mutator
                                setValue: ([field, value], state, { changeValue }) => {
                                    changeValue(state, field, () => value)
                                }
                            }}
                            onSubmit={onSubmit}
                        // validate={validate}
                        >
                            {({ handleSubmit, form, values }) => (
                                <form onSubmit={handleSubmit} >
                                    <div className='input-list d-flex flex-wrap' >
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> User name</label>
                                            <Field
                                                name="UserName"
                                                type="text"
                                                placeholder="UserName"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity name</label>
                                            <Field
                                                name="CharityName"
                                                type="text"
                                                placeholder="Charity Name"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity person name</label>
                                            <Field
                                                name="CharityPersonName"
                                                type="text"
                                                placeholder="Charity Person Name"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity email address</label>
                                            <Field
                                                name="CharityEmailAddress"
                                                type="text"
                                                placeholder="Charity Email Address"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity brief description </label>
                                            <Field
                                                name="CharityBriefDescription"
                                                type="text"
                                                placeholder="Charity Brief Description"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity description </label>
                                            <Field
                                                name="CharityDescription"
                                                type="text"
                                                placeholder="Charity Description"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className="label-text">
                                                Phone Number <Tookit />
                                            </label>
                                            <Field
                                                name="PhoneNumber"
                                                // type="text"
                                                placeholder="Phone Number"
                                                component={renderNumberField}
                                                formatStyle={"(###) ###-####"}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity tag line </label>
                                            <Field
                                                name="CharityTagLine"
                                                type="text"
                                                placeholder="Charity Tagline"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Chairty logo </label>
                                            <ImgUploadCause
                                                multiple={false}
                                                setImg={setLogo}
                                                isEdit={false}
                                                setImages={setCauseLogo}
                                                oldImages={oldCauseLogo}
                                                setOldImages={images => setOldCauseLogo(images)}
                                                images={causeLogo}
                                                moduleName='charityLogo'
                                            />
                                        </div>
                                        <div className='col-12 col-div'>
                                            <label className='label-text'> <span>*</span> charity address </label>
                                            <Field
                                                name="CharityAddress"
                                                type="text"
                                                placeholder="charity address "
                                                component={renderField}
                                                validate={(value) => required(value, ('Charity Address'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Country </label>
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
                                                readOnly={true}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> State </label>
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
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> City </label>
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
                                        </div>

                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Pin code </label>
                                            <Field
                                                name="pincode"
                                                type="number"
                                                placeholder="Zip code"
                                                component={renderField}
                                                // formatStyle={"#####"}
                                                className="form-grp col-grp"
                                                inputclass="input-box"
                                            />
                                        </div>

                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity website </label>
                                            <Field
                                                name="CharityWebsite"
                                                type="text"
                                                placeholder="Charity Website"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity formed year </label>
                                            {/* <DatePicker
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                                className="input-box"
                                            /> */}
                                            <Field
                                                name="CharityFormedyear"
                                                type="number"
                                                placeholder="Charity Formed year"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity category </label>
                                            <Field
                                                name="CharityCategory"
                                                component={renderSelectField}
                                                validate={(value) => required(value, "Charity Category")}
                                                className="basic-multi-select"
                                                options={category}
                                                isMulti={false}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Tax id </label>
                                            <Field
                                                name="TaxId"
                                                type="text"
                                                placeholder="Tax Id"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity Filter </label>
                                            <Field
                                                name="CharityFilter"
                                                component={renderSelectField}
                                                validate={(value) => required(value, "Charity Category")}
                                                className="basic-multi-select"
                                                options={charityFilterOptions}
                                                isMulti={false}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Related Cause</label>
                                            <Field
                                                name="causeList"
                                                component={renderSelectField}
                                                validate={(value) => required(value, "Cause Related")}
                                                className="basic-multi-select"
                                                options={causeData}
                                                isMulti={true}
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span>Charity Contribution </label>
                                            <Field
                                                name="CharityContribution"
                                                type="number"
                                                placeholder="Charity Contribution"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>

                                        {/* <div className='col-md-6 col-div' >
                                                <label className='label-text'> <span>*</span> Action </label>
                                                <div className='d-flex align-items-center inner-div'>
                                                    <div>
                                                        <label className="check-label approve">Approve
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                    <div>
                                                        <label className="check-label reject">Reject
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                </div>
                                            </div> */}

                                        <div className='col-md-6 col-div rating-inner-box' >
                                            <label className='label-text'> <span>*</span> Rating </label>
                                            <div className='d-flex align-items-center inner-div'>
                                                <div>
                                                    <label className="check-label" onClick={() => setradio(1)}>Encompass Rating
                                                        <input type="radio" name='action' checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label className="check-label" onClick={() => setradio(2)}>Star Rating
                                                        <input type="radio" name='action' />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12 col-div rating-inner-box'>
                                            {/* <label className='label-text'> <span>*</span> Rating </label>
                                                <div className='d-flex align-items-center inner-div'>
                                                    <div>
                                                        <label className="check-label">Encompass Rating 
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                    <div>
                                                        <label className="check-label">Star Rating 
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                </div> */}
                                            {
                                                isradio === 1 &&
                                                <div className='d-flex flex-wrap w-100'>
                                                    <EncompassAdd
                                                        financeAccountability={financeAccountability}
                                                        setFinanceAccountability={setFinanceAccountability}
                                                        impactResults={impactResults}
                                                        setImpactResults={setImpactResults}
                                                        leadershipAdaptability={leadershipAdaptability}
                                                        cultureCommunity={cultureCommunity}
                                                        setLeadershipAdaptability={setLeadershipAdaptability}
                                                        setCultureCommunity={setCultureCommunity}
                                                        average={average}
                                                        setavg={setavg}
                                                        formValue={values}
                                                        fromViewPage={true}
                                                    />
                                                </div>
                                            }
                                            {
                                                isradio === 2 &&
                                                <div className='d-flex flex-wrap w-100'>
                                                    <StarAdd
                                                        financeRating={financeRating}
                                                        setFinanceRating={setFinanceRating}
                                                        accountabilityRating={accountabilityRating}
                                                        setAccountabilityRating={setAccountabilityRating}
                                                        formValue={values} />
                                                </div>
                                            }

                                        </div>
                                        {/* <div className='col-md-6 col-div' >
                                                <label className='label-text'> <span>*</span> Action </label>
                                                <div className='d-flex align-items-center inner-div'>
                                                    <div>
                                                        <label className="check-label approve">Approve
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                    <div>
                                                        <label className="check-label reject">Reject
                                                            <input type="radio" name='action' />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                </div>
                                            </div> */}
                                    </div>
                                    <div className='d-flex flex-wrap form-btn-box' >
                                        <button type='submit' className='link-btn'>Save</button>
                                        <Link to='/master/charity_management' className='link-btn cancel'>Cancel</Link>
                                    </div>
                                </form>

                            )}

                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharityAdd
