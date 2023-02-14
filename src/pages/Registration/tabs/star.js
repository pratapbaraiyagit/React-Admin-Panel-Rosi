import React, { useState,useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { renderRadioButton, renderSelectField } from '../../../components/forms';
import { toAbsoluteUrl } from '../../../utils';
import '../tabs.scss';
import { doRegister } from '../../../actions/registration';
import StarRatings from 'react-star-ratings';

const Star = (props) => {
    const { step_1, step_2, step_3 } = useSelector(state => state.RegistrationReducer);

    const [financeRating, setFinanceRating] = useState('');
    const [accountabilityRating, setAccountabilityRating] = useState('');
    const [state, setState] = useState();
console.log(props?.ratingDetails);
   useEffect(()=>{
    if(props?.ratingDetails){
        setFinanceRating( props?.ratingDetails?.finance)
        setAccountabilityRating(props?.ratingDetails?.accountability)
    }
   },[props?.ratingDetails])
    const dispatch = useDispatch();

    const onSubmit = (value) => {
        if (props?.setclass) {
            props.setclass(true)
        }

        const data = {
            starRating: {
                finance: financeRating,
                accountability: accountabilityRating,
            },
            ratingType: 2,
            guideStar: Number(value.radio),
            governanceBenchmark: value.governanceBenchmark.value === 'Yes' ? 1 : 0,
            gradeReceive: Number(value.gradeReceive.value),
            transperancyBenchmark: value.transperancyBenchmark.value === 'Yes' ? 1 : 0,
        }

        const finalData = {
            ...step_1, ...step_2, ...step_3, ...data
        }
        dispatch(doRegister(finalData));
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`)

    const gradeReceiveOptions = [
        { value: 'A range = Excellent', label: 'A range = Excellent' },
        { value: 'B range = Good', label: 'B range = Good' },
        { value: 'C range = Satisfactory/Average', label: 'C range = Satisfactory/Average' },
        { value: 'D range= Unsatisfactory / Poor', label: 'D range= Unsatisfactory / Poor' },
        { value: 'F = Failing', label: 'F = Failing' }
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
        setAccountabilityRating(value);
    }

    const financeHandler = (value) => {
        setFinanceRating(value);
    }
    const num = 50;

    let gradeReceiveLable = ''
    switch (props?.ratingDetails?.gradeReceive) {
        case 1:
            gradeReceiveLable = "A range = Excellent"
            break
        case 2:
            gradeReceiveLable ='B range = Good'
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
            governanceBenchmarkLable= "No"
            break;
        case true:
            governanceBenchmarkLable = "Yes"
            break
        default:
            break;
     }
     let transperancyBenchmarkLable =""
     switch (props?.ratingDetails?.transperancyBenchmark) {
        case false:
            transperancyBenchmarkLable= "No"
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
                    <Form
                        onSubmit={onSubmit}
                    //validate={values} 
                    initialValues={{
                            
                            governanceBenchmark: {value:props?.ratingDetails?.charityId ,label:governanceBenchmarkLable} || "",
                            gradeReceive: {value:props?.ratingDetails?.charityId , label:gradeReceiveLable} || "",
                            transperancyBenchmark: {value:props?.ratingDetails?.charityId,label:transperancyBenchmarkLable}|| "",
                            radio:props?.ratingDetails?.guideStar?.toString()
                        }}
                    >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} className="form-box" >
                                <div className='rating-box'>
                                    <div className='rating-inner-box'>
                                        {/* <Rating
                                            emptySymbol={<img src={toAbsoluteUrl("/images/empty-star.svg")} className="icon" />}
                                            placeholderSymbol={<img src={toAbsoluteUrl("/images/half-star.svg")} className="icon" />}
                                            fullSymbol={<img src={toAbsoluteUrl("/images/full-star.svg")} className="icon" />}
                                            // fractions={2}
                                            initialRating ={props?.ratingDetails?.accountability + props?.ratingDetails?.finance / 2}
                                        /> */}
                                        <StarRatings
                                            rating={2.403}
                                            starDimension="30px"
                                            starSpacing="5px"
                                            starRatedColor="#FADB14"
                                            initialRating ={props?.ratingDetails?.accountability + props?.ratingDetails?.finance / 2}
                                        />
                                        <span>{(props?.ratingDetails?.accountability + props?.ratingDetails?.finance) / 2}</span>
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
                                                    rating={2.403}
                                                    starDimension="30px"
                                                    starSpacing="5px"
                                                    starRatedColor="#FADB14"
                                                    initialRating={financeRating}
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
                                                    rating={2.403}
                                                    starDimension="30px"
                                                    starSpacing="5px"
                                                    starRatedColor="#FADB14"
                                                    initialRating={accountabilityRating}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <ul className='input-list' >
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

                                            <Field name="radio" type="radio" value="4" className="check-label"readOnly={true} component={renderRadioButton}>
                                                Platinum Seal
                                            </Field>
                                            {/* <label className="check-label">Bronze Seal
                                                <input type="radio" name="seal" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="check-label">Silver Seal
                                                <input type="radio" name="seal" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="check-label">Gold Seal
                                                <input type="radio" name="seal" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="check-label">Platinum Seal
                                                <input type="radio" name="seal" />
                                                <span className="checkmark"></span>
                                            </label> */}
                                        </div>
                                    </li>
                                    {/* <li>
                                        <label className='label-text'> Guidestar / Candid Seal :  </label>
                                        <div className='div-checkbox' >
                                            <div className='inner-checkbox'>
                                                <label className='label-text'>  1. What is the grade receive ?  :   </label>
                                                <Select options={options} />
                                            </div>
                                            <div className='inner-checkbox'>
                                                <label className='label-text'> 2. Does the charity meet governance benchmarks? :   </label>
                                                <Select className='select-box' options={options2} />
                                            </div>
                                            <div className='inner-checkbox'>
                                                <label className='label-text'> 3. Does the charity meet transparency benchmarks? :     </label>
                                                <Select className='select-box' options={options3} />
                                            </div>
                                        </div>
                                    </li> */}
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
                                        <button type="submit" className="link-btn" >Done</button>
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

export default Star;


