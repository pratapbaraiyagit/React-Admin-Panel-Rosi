import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { renderField, renderRadioButton, renderSelectField } from '../../../../components/forms';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Range } from 'react-range';
import '../../../Registration/tabs.scss';

const EncompassEdit = (props) => {

    const editCharityManage = useSelector((state) => state.ChairtyReducer.editCharityManage.data)
    const editEncompassData = useSelector((state) => state.ChairtyReducer.editCharityManage?.data?.charityRatings[0])
    console.log("🚀 ~ file: encompass.js ~ line 14 ~ EncompassEdit ~ editEncompassData", editEncompassData)

    // const [financeAccountability, setFinanceAccountability] = useState([0])
    // const [impactResults, setImpactResults] = useState([0])
    // const [leadershipAdaptability, setLeadershipAdaptability] = useState([0])
    // const [cultureCommunity, setCultureCommunity] = useState([0])
    // const [average, setavg] = useState((props?.ratingDetails?.financeAccountability + props?.ratingDetails?.impactResults + props?.ratingDetails?.cultureCommunity + props?.ratingDetails?.leadershipAdaptability) / 4)



    // useEffect(() => {
    //     let avg = (props.financeAccountability[0] + props.impactResults[0] + props.leadershipAdaptability[0] + props.cultureCommunity[0]) / 4
    //     props.setavg([avg])
    // }, [props.financeAccountability, props.impactResults, props.leadershipAdaptability, props.cultureCommunity])


    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`)


    return (
        <>

            <div className='section-steps'>
                <div className='col-12 pl-0 pr-0'>
                    <form className="form-box" >
                        <div className='progressbar-box' >
                            <CircularProgressbar
                                num={props.num}
                                text={`${props.num}%`}
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
                                            // value={editCharityManage?.charityRatings[0]?.encompass?.financeAccountability }
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
                                            className=""
                                            // initialValue={{value: editEncompassData?.gradeReceive, label: gradeReceiveLable}}
                                            // { value: charitydetail?.charityRatings?.[0]?.gradeReceive, label: gradeReceiveLable } || ""
                                            options={props.gradeReceiveOptions}
                                            isMulti={false}

                                        />
                                    </div>
                                    <div className='inner-checkbox'>
                                        <label className='label-text'> 2. Does the charity meet governance benchmarks? :   </label>
                                        <Field
                                            name="governanceBenchmark"
                                            component={renderSelectField}
                                            validate={(value) => required(value, "Governance Benchmark")}
                                            className="select-box"
                                            options={props.governanceBenchmarkOptions}
                                            isMulti={false}
                                        />
                                    </div>
                                    <div className='inner-checkbox'>
                                        <label className='label-text'> 3. Does the charity meet transparency benchmarks?     </label>
                                        <Field
                                            name="transperancyBenchmark"
                                            component={renderSelectField}
                                            validate={(value) => required(value, "Transperancy Benchmark")}
                                            className="select-box"
                                            options={props.transperancyBenchmarkOptions}
                                            isMulti={false}

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

export default EncompassEdit;