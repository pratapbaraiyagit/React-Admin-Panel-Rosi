import React, { useState } from 'react'
import { Field,Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import { renderField } from '../../../components/forms'
import Breadcrumb from '../../../components/layout/Breadcrumb'
import "react-datepicker/dist/react-datepicker.css";
import ImgUpload from '../../../components/common/img-upload';
import '../community.scss'

const CommunityEdit = () => {

    const onSubmit =(value) => {
        console.log('value ',value);
    }

    const required = (value, fieldName=' ') => (value ? undefined : `Required ${fieldName}`);



  return (
    <>
        <div>
            <div className='top-box' >
            <Breadcrumb /> 
            <h2>Community Add </h2>
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
                                                <label className='label-text'> <span>*</span> Community Name</label>
                                                <Field 
                                                name="communityname"
                                                type="text"
                                                placeholder="Community Name"
                                                component={renderField}
                                                validate={ (value) => required(value,('Community Name'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-md-6 col-div'>
                                                <label className='label-text'> <span>*</span> Community Short Description</label>
                                                <Field 
                                                name="communityshortdescription"
                                                type="text"
                                                placeholder="Community Short Description"
                                                component={renderField}
                                                validate={ (value) => required(value,('Community Short Description'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                                />
                                            </div>
                                            <div className='col-lg-4 col-div'>
                                                <label className='label-text'> <span>*</span> Community Logo Image </label>
                                                <ImgUpload />
                                                <span className='img-text'>Recommanded resolution is 640*640 with file size less than 2MB, Add multiple image up-to 10</span>
                                            </div>
                                            <div className='col-lg-4 col-div'>
                                                <label className='label-text'> <span>*</span> Community other Image </label>
                                                <ImgUpload />
                                                <span className='img-text'>Recommanded resolution is 640*640 with file size less than 2MB, Add multiple image up-to 10</span>
                                            </div>
                                            <div className='col-lg-4 col-div'>
                                                <label className='label-text'> <span>*</span> Community other video </label>
                                                <ImgUpload />
                                                <span className='img-text'>Recommanded resolution is 640*640 with file size less than 2MB, Add multiple image up-to 10</span>
                                            </div>
                                            {/* <div className='col-12 col-div'>
                                                <h2>You can post for the community </h2>
                                                <label className='label-text'> <span>*</span> Creat Post </label>
                                                <ImgUpload />
                                            </div> */}
                                        </div>
                                        <div className='d-flex flex-wrap form-btn-box' >
                                            <Link to='/community' className='link-btn'>Save</Link>
                                            <Link to='/community' className='link-btn cancel'>Cancel</Link>
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

export default CommunityEdit
