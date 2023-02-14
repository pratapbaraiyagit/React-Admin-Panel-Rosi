import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { dummyLogin } from '../../../actions/auth';
import { renderField, renderRadioButton, renderSelectField } from '../../../components/forms';
import Tookit from '../../../components/svg/tookit';
import { toAbsoluteUrl } from '../../../utils';
import Select from 'react-select'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Range } from 'react-range';
import '../tabs.scss';
import { ADD_CHARITY_DETAILS_STEPS_4 } from '../../../constants/types';
import { doRegister } from '../../../actions/registration';
import { useEffect } from 'react';

const Encompass = (props) => {

    const { step_1, step_2, step_3 } = useSelector(state => state.RegistrationReducer);

    const [financeAccountability, setFinanceAccountability] = useState([50])
    const [impactResults, setImpactResults] = useState([70])
    const [leadershipAdaptability, setLeadershipAdaptability] = useState([65])
    const [cultureCommunity, setCultureCommunity] = useState([20])


    useEffect(() => {
        if (props?.ratingDetails) {
            setFinanceAccountability([props?.ratingDetails?.financeAccountability]);
            setImpactResults([props?.ratingDetails?.impactResults])
            setCultureCommunity([props?.ratingDetails?.cultureCommunity])
            setLeadershipAdaptability([props?.ratingDetails?.leadershipAdaptability])
        }
    }, [props.ratingDetails])
    const average = (props?.ratingDetails?.financeAccountability + props?.ratingDetails?.impactResults + props?.ratingDetails?.cultureCommunity + props?.ratingDetails?.leadershipAdaptability) / 4
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (value) => {
        console.log("vlaue", value)
        props.setclass(true);
        props.setSteps(4);
        props.setcompleted(true)

        const data = {
            encompass: {
                financeAccountability: financeAccountability[0],
                impactResults: impactResults[0],
                leadershipAdaptability: leadershipAdaptability[0],
                cultureCommunity: cultureCommunity[0]
            },
            ratingType: 1,
            guideStar: Number(value.radio),
            governanceBenchmark: value.governanceBenchmark.value === 'Yes' ? true : false,
            gradeReceive: Number(value.gradeReceive.value),
            transperancyBenchmark: value.transperancyBenchmark.value === 'Yes' ? true : false,
        }

        const step2 = {
            description: step_2.description,
            brief_description: step_2.brief_description,
            phoneno: step_2.phoneno,
            tagline: step_2.tagline,
            logo: step_2.logo,
            mediaImage: step_2.mediaImage,
            address: step_2.address
        }
        const step3 = {
            ...step_3,
            categoryId: step_3?.category?.value,
            relatedCause: step_3?.relatedCause.map((cause) => cause.value)
        }
        const finalData = {
            ...step_1, ...step2, ...step3, ...data
        }
        dispatch(doRegister(finalData));
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`)

    const gradeReceiveOptions = [
        { value: '1', label: 'A range = Excellent' },
        { value: '2', label: 'B range = Good' },
        { value: '3', label: 'C range = Satisfactory/Average' },
        { value: '4', label: 'D range= Unsatisfactory / Poor' },
        { value: '5', label: 'F = Failing' }
    ]
    const governanceBenchmarkOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    const transperancyBenchmarkOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

    const num = 50;
    let gradeReceiveLable = ''
    switch (props?.ratingDetails?.gradeReceive) {
        case 1:
            gradeReceiveLable = "A range = Excellent"
            break
        case 2:
            gradeReceiveLable = 'B range = Good'
            break
        case 3:
            gradeReceiveLable = 'C range = Satisfactory/Average'
            break
        case 4:
            gradeReceiveLable = 'D range= Unsatisfactory / Poor'
            break
        case 5:
            gradeReceiveLable = 'F = Failing'
            break

        default:
            break;
    }
    let governanceBenchmarkLable = ''
    switch (props?.ratingDetails?.governanceBenchmark) {
        case false:
            governanceBenchmarkLable = "No"
            break;
        case true:
            governanceBenchmarkLable = "Yes"
            break
        default:
            break;
    }
    let transperancyBenchmarkLable = ""
    switch (props?.ratingDetails?.transperancyBenchmark) {
        case false:
            transperancyBenchmarkLable = "No"
            break;
        case true:
            transperancyBenchmarkLable = "Yes"
            break
        default:
            break;
    }
    return (
        <>

            <div className='section-steps'>
                <div className='col-12 pl-0 pr-0'>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={{
                            average,
                            governanceBenchmark: { value: props?.ratingDetails?.charityId, label: governanceBenchmarkLable } || "",
                            gradeReceive: { value: props?.ratingDetails?.charityId, label: gradeReceiveLable } || "",
                            transperancyBenchmark: { value: props?.ratingDetails?.charityId, label: transperancyBenchmarkLable } || "",
                            radio: props?.ratingDetails?.guideStar?.toString()
                        }}
                    //validate={values} 
                    >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} className="form-box" >
                                <div className='progressbar-box' >
                                    <CircularProgressbar
                                        num={num}
                                        text={`${num}%`}
                                        styles={buildStyles({
                                            backgroundColor: 'rgb(66, 164, 76)',
                                            textColor: 'rgba(66, 164, 76, 0.85)',
                                            pathColor: 'rgba(66, 164, 76, 0.85)',
                                        })}
                                    />
                                    {/* {props.fromViewPage && <p>{`${num}%`}</p>} */}
                                </div>
                                <ul className='input-list' >
                                    {
                                        props.fromViewPage &&
                                        <li >
                                            <div className='div-checkbox range-div' >
                                                <div className='inner-checkbox average'>
                                                    <label className='label-text'> Average </label>
                                                    <Field
                                                        name="average"
                                                        type="text"
                                                        placeholder="average"
                                                        component={renderField}
                                                        validate={(value) => required(value, ('average'))}
                                                        className="form-grp"
                                                        inputclass="input-box"
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </div>

                                        </li>
                                    }
                                    <li >
                                        <div className='div-checkbox range-div' >
                                            <div className='inner-checkbox'>
                                                <label className='label-text'>  Finance & Accountability </label>
                                                <Range
                                                    disabled={true}
                                                    step={1}
                                                    min={0}
                                                    max={100}
                                                    values={financeAccountability}
                                                    onChange={(values) => setFinanceAccountability(values)}
                                                    renderTrack={({ props, children }) => (
                                                        <div
                                                            {...props}
                                                            style={{
                                                                ...props.style,
                                                                height: '6px',
                                                                width: '100%',
                                                                backgroundColor: '#42A44C',
                                                                borderRadius: '10px'
                                                            }}
                                                        >
                                                            {children}
                                                        </div>
                                                    )}
                                                    renderThumb={({ props }) => (
                                                        <div
                                                            {...props}
                                                            style={{
                                                                ...props.style,
                                                                height: '42px',
                                                                width: '42px',
                                                                backgroundColor: '#42A44C',
                                                            }}
                                                            className="round"
                                                        />
                                                    )}
                                                />
                                                <span>{financeAccountability?.[0]}</span>
                                            </div>
                                            <div className='inner-checkbox'>
                                                <label className='label-text'>  Impact & Results: </label>
                                                <Range
                                                    step={1}
                                                    min={0}
                                                    max={100}
                                                    values={impactResults}
                                                    onChange={(values) => setImpactResults(values)}
                                                    renderTrack={({ props, children }) => (
                                                        <div
                                                            {...props}
                                                            style={{
                                                                ...props.style,
                                                                height: '6px',
                                                                width: '100%',
                                                                backgroundColor: '#42A44C',
                                                                borderRadius: '10px'
                                                            }}
                                                        >
                                                            {children}
                                                        </div>
                                                    )}
                                                    renderThumb={({ props }) => (
                                                        <div
                                                            {...props}
                                                            style={{
                                                                ...props.style,
                                                                height: '42px',
                                                                width: '42px',
                                                                backgroundColor: '#42A44C',
                                                            }}
                                                            className="round"
                                                        />
                                                    )}
                                                />
                                                <span>{impactResults[0]}</span>
                                            </div>
                                            <div className='inner-checkbox'>
                                                <label className='label-text'>  Leadership & Adaptability </label>
                                                <Range
                                                    step={1}
                                                    min={0}
                                                    max={100}
                                                    values={leadershipAdaptability}
                                                    onChange={(values) => setLeadershipAdaptability(values)}
                                                    renderTrack={({ props, children }) => (
                                                        <div
                                                            {...props}
                                                            style={{
                                                                ...props.style,
                                                                height: '6px',
                                                                width: '100%',
                                                                backgroundColor: '#42A44C',
                                                                borderRadius: '10px'
                                                            }}
                                                        >
                                                            {children}
                                                        </div>
                                                    )}
                                                    renderThumb={({ props }) => (
                                                        <div
                                                            {...props}
                                                            style={{
                                                                ...props.style,
                                                                height: '42px',
                                                                width: '42px',
                                                                backgroundColor: '#42A44C',
                                                            }}
                                                            className="round"
                                                        />
                                                    )}
                                                />
                                                <span>{leadershipAdaptability[0]}</span>
                                            </div>
                                            <div className='inner-checkbox'>
                                                <label className='label-text'> Culture & Community :  </label>
                                                <Range
                                                    step={1}
                                                    min={0}
                                                    max={100}
                                                    values={cultureCommunity}
                                                    onChange={(values) => setCultureCommunity(values)}
                                                    renderTrack={({ props, children }) => (
                                                        <div
                                                            {...props}
                                                            style={{
                                                                ...props.style,
                                                                height: '6px',
                                                                width: '100%',
                                                                backgroundColor: '#42A44C',
                                                                borderRadius: '10px'
                                                            }}
                                                        >
                                                            {children}
                                                        </div>
                                                    )}
                                                    renderThumb={({ props }) => (
                                                        <div
                                                            {...props}
                                                            style={{
                                                                ...props.style,
                                                                height: '42px',
                                                                width: '42px',
                                                                backgroundColor: '#42A44C',
                                                            }}
                                                            className="round"
                                                        />
                                                    )}
                                                />
                                                <span>{cultureCommunity[0]}</span>
                                            </div>
                                        </div>

                                    </li>
                                    <li>
                                        <label className='label-text'> Guidestar / Candid Seal :  </label>
                                        <div className='checkbox-list' >

                                            <Field name="radio" type="radio" value="1" className="check-label" readOnly={true} component={renderRadioButton}>
                                                Bronze Seal
                                            </Field>

                                            <Field name="radio" type="radio" value="2" className="check-label" readOnly={true} component={renderRadioButton}>
                                                Silver Seal
                                            </Field>

                                            <Field name="radio" type="radio" value="3" className="check-label" readOnly={true} component={renderRadioButton}>
                                                Gold Seal
                                            </Field>

                                            <Field name="radio" type="radio" value="4" className="check-label" readOnly={true} component={renderRadioButton}>
                                                Platinum Seal
                                            </Field>

                                            {/* <label className="check-label">Bronze Seal
                                                <input type="radio" name="guidstar" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="check-label">Silver Seal
                                                <input type="radio" name="guidstar" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="check-label">Gold Seal
                                                <input type="radio" name="guidstar" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="check-label">Platinum Seal
                                                <input type="radio" name="guidstar" />
                                                <span className="checkmark"></span>
                                            </label> */}
                                        </div>
                                    </li>
                                    <li>
                                        <label className='label-text'> Guidestar / Candid Seal :  </label>
                                        <div className='div-checkbox' >
                                            <div className='inner-checkbox'>
                                                <label className='label-text'>  1. What is the grade receive ?  :   </label>
                                                {/* <Select options={options} /> */}
                                                <Field
                                                    name="gradeReceive"
                                                    component={renderSelectField}
                                                    validate={(value) => required(value, "Grade Receive")}
                                                    className=""
                                                    options={gradeReceiveOptions}
                                                    isMulti={false}
                                                    readOnly={true}

                                                />
                                            </div>
                                            <div className='inner-checkbox'>
                                                <label className='label-text'> 2. Does the charity meet governance benchmarks? :   </label>
                                                {/* <Select className='select-box' options={options2} /> */}
                                                <Field
                                                    name="governanceBenchmark"
                                                    component={renderSelectField}
                                                    validate={(value) => required(value, "Governance Benchmark")}
                                                    className="select-box"
                                                    options={governanceBenchmarkOptions}
                                                    isMulti={false}
                                                    readOnly={true}

                                                />
                                            </div>
                                            <div className='inner-checkbox'>
                                                <label className='label-text'> 3. Does the charity meet transparency benchmarks? :     </label>
                                                {/* <Select className='select-box' options={options3} /> */}
                                                <Field
                                                    name="transperancyBenchmark"
                                                    component={renderSelectField}
                                                    validate={(value) => required(value, "Transperancy Benchmark")}
                                                    className="select-box"
                                                    options={transperancyBenchmarkOptions}
                                                    isMulti={false}
                                                    readOnly={true}

                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="d-flex flex-wrap align-items-center justify-content-between w-100 btn-boxs">
                                    <div className="button-box">
                                        <button type="button" className="link-btn" onClick={() => { props.onPrevClick(); props.setclass(false) }}>prev</button>
                                    </div>
                                    <div className="button-box">
                                        <button type="submit" className="link-btn">Done</button>
                                    </div>
                                </div>
                            </form>

                        )}

                    </Form>
                </div>
            </div>
        </>
    );
}

export default Encompass;
