import React from 'react';
import { Field } from 'react-final-form';
import {  renderRadioButton, renderSelectField } from '../../../../components/forms';

import '../../../Registration/tabs.scss';

import StarRatings from 'react-star-ratings';


const StarAdd = (props) => {


    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`)

    const gradeReceiveOptions = [
        { value: 1, label: 'A range = Excellent' },
        { value: 2, label: 'B range = Good' },
        { value: 3, label: 'C range = Satisfactory/Average' },
        { value: 4, label: 'D range= Unsatisfactory / Poor' },
        { value: 5, label: 'F = Failing' }
    ]
    const governanceBenchmarkOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    const transperancyBenchmarkOptions = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

    const accountabilityRatingHandler = (value) => {
        props.setAccountabilityRating(value);
    }

    const financeHandler = (value) => {
        props.setFinanceRating(value);
    }
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

            <div className='section-steps star-section'>
                <div className='col-12 pl-0 pr-0'>
                    <form className="form-box" >
                        <div className='rating-box'>
                            <div className='rating-inner-box'>
                                <StarRatings
                                    rating={(props.financeRating + props.accountabilityRating) / 2}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    starRatedColor="#FADB14"
                                    initialRating={(props.financeRating + props.accountabilityRating) / 2}
                                />
                                <span>{(props.financeRating + props.accountabilityRating) / 2}</span>
                                <div className=' rating-innerbox d-flex flex-wrap justify-content-between align-content-center' >
                                    <div className='inner-boxs' >
                                        <label>Finance : </label>
                                        {/* <Rating
                                                    //placeholderRating={3.5}
                                                    emptySymbol={<img src={toAbsoluteUrl("/images/empty-star.svg")} className="icon" />}
                                                    placeholderSymbol={<img src={toAbsoluteUrl("/images/half-star.svg")} className="icon" />}
                                                    fullSymbol={<img src={toAbsoluteUrl("/images/full-star.svg")} className="icon" />}
                                                    onChange={financeHandler}
                                                    initialRating={financeRating}
                                                /> */}
                                        <StarRatings
                                            rating={props.financeRating}
                                            starDimension="30px"
                                            starSpacing="5px"
                                            starRatedColor="#FADB14"
                                            initialRating={props.financeRating}
                                            changeRating={financeHandler}
                                        />
                                    </div>
                                    <div className='inner-boxs' >
                                        <label>Accountability and Transparency :  </label>
                                        {/* <Rating
                                                    //placeholderRating={3.5}
                                                    emptySymbol={<img src={toAbsoluteUrl("/images/empty-star.svg")} className="icon" />}
                                                    placeholderSymbol={<img src={toAbsoluteUrl("/images/half-star.svg")} className="icon" />}
                                                    fullSymbol={<img src={toAbsoluteUrl("/images/full-star.svg")} className="icon" />}
                                                    onChange={accountabilityRatingHandler}
                                                    initialRating={accountabilityRating}
                                                /> */}
                                        <StarRatings
                                            rating={props.accountabilityRating}
                                            starDimension="30px"
                                            starSpacing="5px"
                                            starRatedColor="#FADB14"
                                            starHoverColor="#FADB14"
                                            initialRating={props.accountabilityRating}
                                            changeRating={accountabilityRatingHandler}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <ul className='input-list' >
                            <li>
                                <label className='label-text'> Guidestar / Candid Seal :  </label>
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

export default StarAdd;


