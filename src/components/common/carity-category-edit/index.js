import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { charityCategoryCreate, charityCategoryEdit, charityCategoryListing, charityCategoryUpdate } from '../../../actions/charityCategory'
import { renderField } from '../../forms'
import { charityEdit as validate } from '../../validations/charityCategory'
import './edit.scss'
import { toast } from 'react-toastify';

const EditCharityModel = ({ setEditModel, editModel, editId }) => {
    const dispatch = useDispatch()

    const [arg, setArg] = useState({
        page: 1,
        limit: 999999,
        search: "",
        order: "",
      });

    const editCharityCategory = useSelector((state) => state.charityCategoryReducer.editCharityCategory)

    const onSubmit = (value) => {
        const data = {
            category_name: value.category_name
        }
        dispatch(charityCategoryUpdate(data, editId))
            .then((res) => {
                dispatch(charityCategoryListing(arg))
                toast.success(res?.message || 'Success')
            })
            .catch((err) => toast.error(err?.message || "Something went wrong"))
        setEditModel(false)
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`)

    return (
        <>
            <div className={`model-area ${editModel ? "open-model" : ""}`} >
                <div className="model-box" >
                    <div className='modele-text-box' >
                        <h2>Edit Charity Category </h2>
                        <Form
                            onSubmit={onSubmit}
                            validate={validate}
                            initialValues={{
                                category_name: editCharityCategory?.category_name,
                            }}
                        >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <ul className='input-list' >
                                        <li>
                                            <label className='label-text' style={{ marginTop: "10px" }}> <span>*</span> Name</label>
                                            <div className='input-list d-flex flex-wrap' >
                                                <div className='col-12 col-div'>
                                                    <Field
                                                        name="category_name"
                                                        type='text'
                                                        component={renderField}
                                                        placeholder="Edit Charity Category"
                                                        // validate={(value) => required(value, "Edit Charity Category ")}
                                                        className="form-grp"
                                                        inputclass="input-box"
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className='model-btn'>
                                        <button type='submit' className='btn-box' >Save</button>
                                        <button type='button' className='btn-box no' onClick={() => setEditModel(false)} >Cancel</button>
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

export default EditCharityModel