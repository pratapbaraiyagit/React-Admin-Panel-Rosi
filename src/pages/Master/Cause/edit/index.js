import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { causeEdit, causeListing, causeUpdate } from '../../../../actions/cause';
import { storeMetaData } from '../../../../actions/meta';
import ImgUploadCause from '../../../../components/common/img-upload-cause';
import { BreadcrumbCause } from '../../../../components/layout/Breadcrumb-carity-cate';
import { BreadcrumbEdit } from '../../../../components/layout/Breadcrumb-cause';
import { causeEdit as validate } from '../../../../components/validations/cause';
import { toast } from 'react-toastify';

const CauseEdit = () => {
    let { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const EditData = useSelector((state) => state.CauseReducer.editCause)

    const [causeImages, setCauseImages] = useState();
    const [oldCauseImages, setOldCauseImages] = useState();
    const [images, setImages] = useState([]);
    const [apiImageName, setapiImageName] = useState();
    const [imageserror, setImageerror] = useState("")
    const [deleteImage, setDeleteImage] = useState([])
    
    const [arg, setArg] = useState({
        page: 1,
        limit: 99999,
        search: "",
        // order: "",
      });

    const mediaURL = useSelector((state) => state.metaReducer.mediaURL)

    useEffect(() => {
        setOldCauseImages([EditData?.images])
    }, [EditData?.images])

    useEffect(() => {
        dispatch(storeMetaData())
    }, [])


    useEffect(() => {
        if (images) {
            setImageerror("")
        }
    }, [images])

    const [startDate, setStartDate] = useState(new Date());
    const [isradio, setradio] = useState(1);

    const onSubmit = (value) => {
        // if (images.length < 1) {
        //     setImageerror("Please upload at least on charity image ")
        //     return
        // }
        if (!images) {
            setImageerror("Please upload logo")
        } else {
            setImageerror("")
        }
        const data = {
            causename: value.causename,
            reasonToDonate: value.reasonToDonate,
            sub_title: value.sub_title,
            sub_description: value.sub_description,
            description: value.description,
            sub_title_description: value.sub_title_description,
            images: apiImageName
        }
        dispatch(causeUpdate(data, id))
        .then((res) => {
            dispatch(causeListing(arg)) // this for double api hit
            toast.success(res?.message || 'Success')
            navigate('/master/cause_management')
        })
        .catch((err)=>{
            toast.error(err?.message || "Something went wrong")
        })
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`);

    useEffect(() => {
        dispatch(causeEdit(id))
    }, [id]);

    return (
        <>
            <div>
                <div className='top-box' >
                    <BreadcrumbEdit />
                    <h2>Cause Edit </h2>
                </div>
                <div className='section-inner'>
                    <div className='form-area'>
                        <Form
                            onSubmit={onSubmit}
                            validate={validate}
                            initialValues={{
                                causename: EditData?.causename,
                                description: EditData?.description,
                                sub_title: EditData?.sub_title,
                                images: EditData?.images?.name

                            }}
                        //validate={values} 
                        >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit} >
                                    <div className='input-list d-flex flex-wrap' >
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Name</label>
                                            <Field
                                                name="causename"
                                                type="text"
                                                placeholder="user name"
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
                                                placeholder="charity person name"
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
                                                placeholder="charity name"
                                                component={renderField}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span> Upload Cause Image </label>
                                            <ImgUploadCause
                                                multiple={false}
                                                oldImages={oldCauseImages}
                                                setImg={setImages}
                                                isEdit={true}
                                                setapiImageName={setapiImageName}
                                                setOldCauseImages={images => setOldCauseImages(images)}
                                                setImages={setCauseImages}
                                                setDeleteImage={image => setDeleteImage([...deleteImage, image])}
                                                images={images}
                                                moduleName='causeLogo'
                                            />
                                        </div>
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

export default CauseEdit
