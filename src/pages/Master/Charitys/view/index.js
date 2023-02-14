import React, { useState } from 'react'
import { Field,Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import { renderField } from '../../../../components/forms'
import Breadcrumb from '../../../../components/layout/Breadcrumb'
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tookit from '../../../../components/svg/tookit';
import ImgUpload from '../../../../components/common/img-upload';
import { toAbsoluteUrl } from '../../../../utils';
import Encompass from '../../../Registration/tabs/encompass';
import Star from '../../../Registration/tabs/star';

const CharityViews = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [isradio, setradio] = useState(1);

    const onSubmit =(value) => {
        console.log('value ',value);
    }

    const required = (value, fieldName=' ') => (value ? undefined : `Required ${fieldName}`);

    const options = [
        { value: 'Help Girl Child', label: 'Help Girl Child' },
        { value: 'Women safety', label: 'Women safety' },
        { value: 'F = Failing', label: 'F = Failing' }
      ]
    


  return (
    <>
        <div>
            <div className='top-box' >
            <Breadcrumb /> 
            <h2>Charity View </h2>
            </div>
            <div className='section-inner'>
                <div className='form-area'>
                    <Form
                            onSubmit={onSubmit}
                                //validate={values} 
                                >
                            {({handleSubmit }) => (
                                    <form onSubmit={handleSubmit} >
                                        <div className='input-list d-flex flex-wrap' >
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> User name</label>
                                                <Field 
                                                name="username"
                                                type="text"
                                                placeholder="user name"
                                                component={renderField}
                                                validate={ (value) => required(value,('user name'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Charity name</label>
                                                <Field 
                                                name="charityname"
                                                type="text"
                                                placeholder="charity name"
                                                component={renderField}
                                                validate={ (value) => required(value,('charity name'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Charity person name</label>
                                                <Field 
                                                name="charitypersonname"
                                                type="text"
                                                placeholder="charity person name"
                                                component={renderField}
                                                validate={ (value) => required(value,('charity person name'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Charity email address</label>
                                                <Field 
                                                name="charityemail"
                                                type="text"
                                                placeholder="charity email address"
                                                component={renderField}
                                                validate={ (value) => required(value,('charity email address'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Charity brief description </label>
                                                <Field 
                                                name="chairtydescription"
                                                type="text"
                                                placeholder="chairty description"
                                                component={renderField}
                                                validate={ (value) => required(value,('chairty brief description'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Charity description </label>
                                                <Field 
                                                name="charityemail"
                                                type="text"
                                                placeholder="Charity description"
                                                component={renderField}
                                                validate={ (value) => required(value,('Charity description'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Phone number </label>
                                                <Field 
                                                name="phonenumber"
                                                type="text"
                                                placeholder="phone number"
                                                component={renderField}
                                                validate={ (value) => required(value,('phone number'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Charity tag line </label>
                                                <Field 
                                                name="charitytagline"
                                                type="text"
                                                placeholder="charity tag line"
                                                component={renderField}
                                                validate={ (value) => required(value,('charity tag line'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Chairty logo </label>
                                                <ImgUpload />
                                            </div>
                                            <div className='col-12 col-div'>
                                                <label className='label-text'> <span>*</span> charity address </label>
                                                <Field 
                                                name="charityaddress"
                                                type="text"
                                                placeholder="charity address "
                                                component={renderField}
                                                validate={ (value) => required(value,('Charity Address'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> City </label>
                                                <Field 
                                                name="city"
                                                type="text"
                                                placeholder="city"
                                                component={renderField}
                                                validate={ (value) => required(value,('city'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> State </label>
                                                <Field 
                                                name="state"
                                                type="text"
                                                placeholder="state"
                                                component={renderField}
                                                validate={ (value) => required(value,('state'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Zip code </label>
                                                <Field 
                                                name="zipcode"
                                                type="text"
                                                placeholder="zip code"
                                                component={renderField}
                                                validate={ (value) => required(value,('zip code'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Country </label>
                                                <Field 
                                                name="country"
                                                type="text"
                                                placeholder="country"
                                                component={renderField}
                                                validate={ (value) => required(value,('country'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Charity website </label>
                                                <Field 
                                                name="charitywebsite"
                                                type="text"
                                                placeholder="charity website"
                                                component={renderField}
                                                validate={ (value) => required(value,('charity website'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Charity formed year </label>
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) => setStartDate(date)}
                                                    className="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Charity category </label>
                                                <Field 
                                                name="charitycategory"
                                                type="text"
                                                placeholder="charity category"
                                                component={renderField}
                                                validate={ (value) => required(value,('charity category'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Tax id </label>
                                                <Field 
                                                name="taxid"
                                                type="text"
                                                placeholder="tax id"
                                                component={renderField}
                                                validate={ (value) => required(value,('tax id'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Charity Filter </label>
                                                <Field 
                                                name="charityformedyear"
                                                type="text"
                                                placeholder="Charity Filter"
                                                component={renderField}
                                                validate={ (value) => required(value,('Charity Filter'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Cause</label>
                                                <Select
                                                    //defaultValue={[colourOptions[2], colourOptions[3]]}
                                                    isMulti
                                                    name="colors"
                                                    options={options}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Contribution amount required </label>
                                                <Field 
                                                name="Contributionamountrequired"
                                                type="text"
                                                placeholder="contribution amount required"
                                                component={renderField}
                                                validate={ (value) => required(value,('Contribution amount required'))}
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
                                                            <input type="radio" name='action' checked  />
                                                            <span className="checkmark"></span>
                                                        </label> 
                                                    </div>
                                                    <div>
                                                        <label className="check-label" onClick={() => setradio(2)}>Star Rating 
                                                            <input type="radio" name='action'  />
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
                                                    <Encompass fromViewPage={true}/>
                                                    </div>
                                                }
                                                {
                                                    isradio === 2 && 
                                                    <div className='d-flex flex-wrap w-100'>
                                                        <Star />
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
                                            <Link to='/home' className='link-btn'>Save</Link>
                                            <Link to='/master' className='link-btn cancel'>Cancel</Link>
                                        </div>
                                    </form>
                                    
                                ) }
                
                    </Form> 
                </div>
            </div>
        </div>
    </>
  )
}

export default CharityViews
