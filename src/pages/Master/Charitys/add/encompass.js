import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { renderField, renderRadioButton, renderSelectField } from '../../../../components/forms';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Range } from 'react-range';
import '../../../Registration/tabs.scss';

const EncompassAdd = (props) => {

    // const [financeAccountability, setFinanceAccountability] = useState([0])
    // const [impactResults, setImpactResults] = useState([0])
    // const [leadershipAdaptability, setLeadershipAdaptability] = useState([0])
    // const [cultureCommunity, setCultureCommunity] = useState([0])
    // const [average, setavg] = useState((props?.ratingDetails?.financeAccountability + props?.ratingDetails?.impactResults + props?.ratingDetails?.cultureCommunity + props?.ratingDetails?.leadershipAdaptability) / 4)

    console.log('porp.formvalues', props.formValue);


    // useEffect(() => {
    //     let avg = (props.financeAccountability[0] + props.impactResults[0] + props.leadershipAdaptability[0] + props.cultureCommunity[0]) / 4
    //     props.setavg([avg])
    // }, [props.financeAccountability, props.impactResults, props.leadershipAdaptability, props.cultureCommunity])


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
                    <form className="form-box" >
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
                        </div>
                        <ul className='input-list' >
                            <li >
                                <div className='div-checkbox range-div' >
                                    <div className='inner-checkbox average'>
                                        <label className='label-text'> Average </label>
                                        
                                        <input
                                            name="average"
                                            type="text"
                                            placeholder="average"
                                            value={props.average}
                                            onChange={(e) => props.setavg(e.target.value)}
                                            // component={renderField}
                                            // validate={(value) => required(value, ('average'))}
                                            className="form-grp"
                                            inputclass="input-box"
                                            readOnly={true}
                                        />
                                    </div>
                                </div>

                            </li>
                            <li >
                                <div className='div-checkbox range-div' >
                                    <div className='inner-checkbox'>
                                        <label className='label-text'>  Finance & Accountability </label>
                                        <Range
                                            // disabled={true}
                                            step={1}
                                            min={0}
                                            max={100}
                                            values={props.financeAccountability}
                                            onChange={(values) => props.setFinanceAccountability(values)}
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
                                        <span>{props.financeAccountability?.[0]}</span>
                                    </div>
                                    <div className='inner-checkbox'>
                                        <label className='label-text'>  Impact & Results </label>
                                        <Range
                                            step={1}
                                            min={0}
                                            max={100}
                                            values={props.impactResults}
                                            onChange={(values) => props.setImpactResults(values)}
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
                                        <span>{props.impactResults[0]}</span>
                                    </div>
                                    <div className='inner-checkbox'>
                                        <label className='label-text'>  Leadership & Adaptability </label>
                                        <Range
                                            step={1}
                                            min={0}
                                            max={100}
                                            values={props.leadershipAdaptability}
                                            onChange={(values) => props.setLeadershipAdaptability(values)}
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
                                        <span>{props.leadershipAdaptability[0]}</span>
                                    </div>
                                    <div className='inner-checkbox'>
                                        <label className='label-text'> Culture & Community  </label>
                                        <Range
                                            step={1}
                                            min={0}
                                            max={100}
                                            values={props.cultureCommunity}
                                            onChange={(values) => props.setCultureCommunity(values)}
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
                                        <span>{props.cultureCommunity[0]}</span>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <label className='label-text'> Guidestar / Candid Seal  </label>
                                <div className='checkbox-list' >

                                    <Field name="radio" type="radio" value="1" className="check-label" component={renderRadioButton}>
                                        Bronze Seal
                                    </Field>

                                    <Field name="radio" type="radio" value="2" className="check-label" component={renderRadioButton}>
                                        Silver Seal
                                    </Field>

                                    <Field name="radio" type="radio" value="3" className="check-label" component={renderRadioButton}>
                                        Gold Seal
                                    </Field>

                                    <Field name="radio" type="radio" value="4" className="check-label" component={renderRadioButton}>
                                        Platinum Seal
                                    </Field>

                                </div>
                            </li>
                            <li>
                                <label className='label-text'> Guidestar / Candid Seal  </label>
                                <div className='div-checkbox' >
                                    <div className='inner-checkbox'>
                                        <label className='label-text'>  1. What is the grade receive ?    </label>
                                        {/* <Select options={options} /> */}
                                        <Field
                                            name="gradeReceive"
                                            component={renderSelectField}
                                            validate={(value) => required(value, "Grade Receive")}
                                            className=""
                                            options={gradeReceiveOptions}
                                            isMulti={false}
                                        // readOnly={true}

                                        />
                                    </div>
                                    <div className='inner-checkbox'>
                                        <label className='label-text'> 2. Does the charity meet governance benchmarks? :   </label>
                                        <Field
                                            name="governanceBenchmark"
                                            component={renderSelectField}
                                            validate={(value) => required(value, "Governance Benchmark")}
                                            className="select-box"
                                            options={governanceBenchmarkOptions}
                                            isMulti={false}
                                        // readOnly={true}

                                        />
                                    </div>
                                    <div className='inner-checkbox'>
                                        <label className='label-text'> 3. Does the charity meet transparency benchmarks?     </label>
                                        <Field
                                            name="transperancyBenchmark"
                                            component={renderSelectField}
                                            validate={(value) => required(value, "Transperancy Benchmark")}
                                            className="select-box"
                                            options={transperancyBenchmarkOptions}
                                            isMulti={false}
                                        // readOnly={true}

                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EncompassAdd;