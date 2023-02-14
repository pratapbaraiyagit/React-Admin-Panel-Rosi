import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form';
import { Link } from 'react-router-dom';
import { renderField, rendertextarea } from '../../../../components/forms'
import Breadcrumb from '../../../../components/layout/Breadcrumb'
import "react-datepicker/dist/react-datepicker.css";
import ImgUpload from '../../../../components/common/img-upload-home';
import '../leadership.scss'
import { useDispatch, useSelector } from 'react-redux';
import { homepageDetail, homepageUpdate } from '../../../../actions/cms';
import { hompageCms as validate } from '../../../../components/validations/cms';

// const options = [
//     { value: 'Help Girl Child', label: 'Help Girl Child' },
//     { value: 'Women safety', label: 'Women safety' },
//     { value: 'F = Failing', label: 'F = Failing' }
//   ]
const EditLeadership = () => {

    const list = [
        {
            name:" Content Management ",
            link: "/homepage",
            isactive:false
        },
        {
            name:"Leadership Edit",
            link: "/content_management/edit_leadership",
            isactive:true
        }
      ]


    const dispatch = useDispatch()
    const homepagedetail = useSelector((state) => state.CmsReducer.homepagedetail)
    console.log('homepagedetail: ', homepagedetail);
    const metaData = useSelector((state) => state.metaReducer)
    console.log('metaData: ', metaData);

    const [homepageLogo, setHomepageLogo] = useState();
    const [oldhomepageLogo, setOldHomepageLogo] = useState([]);
    const [logo, setLogo] = useState();
    const [logoerror, setLogoerror] = useState("")
    const [listitems, setListitems] = useState([])

    const onSubmit = (value) => {
        console.log('value ', value);
        const data = {
            _id: "630cba06d2b6b80a595d092a",
            bannerImage: logo,
            bannerTitle: value.bannertitle,
            bannerDescription: value.bannerdescription,
            aboutTitle: value.abouttitle,
            aboutSubTitle: value.aboutheading,
            aboutDescription: value.aboutdescription

        }
        console.log(data);
        dispatch(homepageUpdate(data))
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`);

    const num = 50;
    useEffect(() => {
        dispatch(homepageDetail())
    }, [])

    return (
        <>
            <div>
                <div className='top-box' >
                    <Breadcrumb list={list} />
                    <h2> Leadership Edit</h2>
                </div>
                <div className='section-inner'>
                    <div className='form-area'>
                        <Form
                            onSubmit={onSubmit}
                            validate={validate}
                            initialValues={{
                                bannertitle: homepagedetail?.bannerTitle,
                                bannerdescription: homepagedetail?.bannerDescription,
                                abouttitle: homepagedetail?.aboutTitle,
                                aboutheading: homepagedetail?.aboutSubTitle,
                                aboutdescription: homepagedetail?.aboutDescription,
                            }}
                        >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit} >
                                    <div className='input-list d-flex flex-wrap' >
                                        <div className='col-12 col-div'>
                                            <label className='label-text'> <span>*</span>Image</label>
                                            <ImgUpload
                                                moduleName='homepage'
                                                multiple={false}
                                                oldLogo={metaData?.mediaURL+ 'homepage/'+ homepagedetail.logo}
                                                setImg={setLogo}
                                                setImages={setHomepageLogo}
                                                oldImages={oldhomepageLogo}
                                                setOldImages={images => setOldHomepageLogo(images)}
                                                images={homepageLogo}
                                                />

                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span>Name</label>
                                            <Field
                                                name="name"
                                                type="text"
                                                placeholder="name"
                                                component={renderField}
                                                // validate={ (value) => required(value,('About title'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-md-6 col-div'>
                                            <label className='label-text'> <span>*</span>Designation</label>
                                            <Field
                                                name="Designation"
                                                type="text"
                                                placeholder="Designation"
                                                component={renderField}
                                                // validate={ (value) => required(value,('About title'))}
                                                className="form-grp"
                                                inputclass="input-box"
                                            />
                                        </div>
                                        <div className='col-12 col-div'>
                                            <label className='label-text'> <span>*</span>Description</label>
                                            <Field
                                                name="aboutdescription"
                                                type="text"
                                                placeholder="About description"
                                                component={rendertextarea}
                                                // validate={ (value) => required(value,('About description'))}
                                                className="form-grp"
                                                inputclass="input-box text-area-box"
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-wrap form-btn-box' >
                                        <button type='submit' className='link-btn'>Save</button>
                                        <Link to='/content_management/leadership' className='link-btn cancel'>Cancel</Link>
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

export default EditLeadership
