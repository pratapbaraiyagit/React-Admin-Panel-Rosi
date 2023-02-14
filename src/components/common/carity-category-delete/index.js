import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { charityCategoryCreate, charityCategoryDelete, charityCategoryEdit, charityCategoryListing, charityCategoryUpdate } from '../../../actions/charityCategory'
import { renderField } from '../../forms'
import './delete.scss'
import { toast } from 'react-toastify';


const DeleteCharityModel = ({ setDeleteModel, deleteModel, deleteId }) => {
    const dispatch = useDispatch()
    const [arg, setArg] = useState({
        page: 1,
        limit: 999999,
        search: "",
        order: "",
      });

    const onSubmit = () => {
        dispatch(charityCategoryDelete({ id: deleteId }))
            .then((res) => {
                dispatch(charityCategoryListing(arg))
                toast.success(res?.message || 'Success')
            })
            .catch((err) => toast.error(err?.message || "Something went wrong"))
        setDeleteModel(false)
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`)

    return (
        <>
            <div className={`model-area ${deleteModel ? "open-model" : ""}`} >
                <div className="model-box" >
                    <div className='modele-text-box' >
                        <h2>Are you sure you want to Delete charity ?</h2>
                        <Form
                            onSubmit={onSubmit}
                        >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='model-btn'>
                                        <button type='submit' className='btn-box' >Yes</button>
                                        <button type='button' className='btn-box no' onClick={() => setDeleteModel(false)} >No</button>
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

export default DeleteCharityModel