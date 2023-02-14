import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { charityCategoryCreate, charityCategoryListing } from '../../../actions/charityCategory'
import { renderField, rendertextarea } from '../../forms'
import { charityAdd as validate } from '../../validations/charityCategory'
import './add.scss'
import { toast } from 'react-toastify';


const AddCharityModel = ({ setModel, isModel }) => {
    const [arg, setArg] = useState({
        page: 1,
        limit: 999999,
        search: "",
        order: "",
      });
    const dispatch = useDispatch()

    const addCharityCategory = useSelector((state) => state.charityCategoryReducer.charityCategoryCreate)

    const onSubmit = (value) => {
        setModel(false)
        const data = {
            category_name: value.category_name
        }
        dispatch(charityCategoryCreate(data))
            .then((res) => {
                dispatch(charityCategoryListing(arg))
                toast.success(res?.message || 'Success')
            })
            .catch((err) => toast.error(err?.message || "Something went wrong"))
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`)

    return (
        <>
            <div className={`model-area ${isModel ? "open-model" : ""}`} >
                <div className="model-box" >
                    <div className='modele-text-box' >
                        <h2>Add Charity Category </h2>
                        <Form
                            onSubmit={onSubmit}
                            validate={validate}
                            // initialValues={{
                            //     category_name: addCharityCategory?.category_name,
                            // }}
                        >
                            {({ handleSubmit, form }) => (
                                <form onSubmit={handleSubmit} >
                                    <ul className='input-list' >
                                        <li>
                                            <label className='label-text' style={{ marginTop: "10px" }}> <span>*</span> Name</label>
                                            <div className='input-list d-flex flex-wrap' >
                                                <div className='col-12 col-div'>
                                                    <Field
                                                        name="category_name"
                                                        type='text'
                                                        component={renderField}
                                                        placeholder="Add Charity Category"
                                                        className="form-grp"
                                                        inputclass="input-box"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className='model-btn'>
                                        <button type='submit' className='btn-box' onClick={() => { handleSubmit(); form.reset(); }}>Save</button>
                                        <button type='button' className='btn-box no' onClick={() => { form.reset(); setModel(false) }} >Cancel</button>
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

export default AddCharityModel