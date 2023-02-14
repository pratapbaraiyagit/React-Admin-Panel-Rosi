import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { Link, useNavigate } from 'react-router-dom';
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
import { causeCreate, causeListing } from '../../../../actions/cause';
import { useDispatch, useSelector } from 'react-redux';
import ImgUploadCause from '../../../../components/common/img-upload-cause';
import { BreadcrumbCause } from '../../../../components/layout/Breadcrumb-carity-cate';
import { BreadcrumbAdd } from '../../../../components/layout/Breadcrumb-cause';
import { causeAdd as validate } from '../../../../components/validations/cause';
import { toast } from 'react-toastify';

const CauseAdd = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addCause = useSelector((state) => state.CauseReducer.addCause)

    const [causeLogo, setCauseLogo] = useState();
    const [oldCauseLogo, setOldCauseLogo] = useState([]);
    const [logo, setLogo] = useState();
    const [logoerror, setLogoerror] = useState("")

    const charityLogoChangeHandler = (imageList, addUpdateIndex) => {
        setCauseLogo(imageList);
    }

    useEffect(() => {
        setOldCauseLogo(addCause?.causelogo ? addCause?.causelogo : [])
    }, [addCause?.logo])

    useEffect(() => {
        if (logo) {
            setLogoerror("")
        }
    }, [logo])

    const onSubmit = (value) => {
        if (!logo) {
            setLogoerror("Please upload logo")
        } else {
            setLogoerror("")
        }
        const data = {
            causename: value.causename,
            sub_title: value.sub_title,
            description: value.description,
            images: logo
        }
        dispatch(causeCreate(data))
        .then((res) => {
            // dispatch(causeListing()) // this for double api hit
            toast.success(res?.message || 'Success')
            navigate('/master/cause_management')
        })
        .catch((err)=>{
            toast.error(err?.message || "Something went wrong")
        })
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`);

    return (
        <>
            <div>
                <div className='top-box' >
                    <BreadcrumbAdd />
                    <h2>Cause Add </h2>
                </div>
                <div className='section-inner'>
                    <div className='form-area'>
                        <Form
                            onSubmit={onSubmit}
                            validate={validate}
                            initialValues={{
                                causename: addCause?.causename,
                                description: addCause?.description,
                                sub_title: addCause?.sub_title,
                                images: addCause?.images?.name
                            }}
                        //validate={values} 
                        >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit} >
                                    <div className='input-list d-flex flex-wrap' >
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span>Cause Name</label>
                                            <Field
                                                name="causename"
                                                type="text"
                                                placeholder="Cause Name"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Cause Title</label>
                                            <Field
                                                name="sub_title"
                                                type="text"
                                                placeholder="Cause Title"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Description </label>
                                            <Field
                                                name="description"
                                                type="text"
                                                placeholder="Cause Description"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Upload Cause Image </label>
                                            <ImgUploadCause
                                                multiple={false}
                                                setImg={setLogo}
                                                isEdit={false}
                                                setImages={setCauseLogo}
                                                oldImages={oldCauseLogo}
                                                setOldImages={images => setOldCauseLogo(images)}
                                                images={causeLogo}
                                                moduleName='causeLogo'
                                            />
                                        </div>
                                        <h7 className='text-danger'>{logoerror}</h7>
                                    </div>
                                    <div className='d-flex flex-wrap form-btn-box' >
                                        <button type='submit' className='link-btn'>Save</button>
                                        <Link to='/master/cause_management' className='link-btn cancel'>Cancel</Link>
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

export default CauseAdd
