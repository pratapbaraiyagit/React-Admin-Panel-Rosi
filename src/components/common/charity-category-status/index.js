import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { charityCategoryActiveInActive, charityCategoryCreate, charityCategoryDelete, charityCategoryEdit, charityCategoryListing, charityCategoryUpdate } from '../../../actions/charityCategory'
import { renderField } from '../../forms'
import './delete.scss'

const StatusCharityModel = ({ setStatusModel, statusModel, modelId, isCharityActive }) => {
    const dispatch = useDispatch()

    const [arg, setArg] = useState({
        page: 1,
        limit: 999999,
        search: "",
        order: "",
      });

    const onSubmit = () => {
        setStatusModel(false)
        dispatch(charityCategoryActiveInActive(modelId)).then(() => dispatch(charityCategoryListing(arg)))
    }

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`)

    return (
        <>
            <div className={`model-area ${statusModel ? "open-model" : ""}`} >
                <div className="model-box" >
                    <div className='modele-text-box' >
                        <Form
                            onSubmit={onSubmit}
                            >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    { isCharityActive === true ?
                                        <div>
                                            <h2>Are you sure Inactive this status ?</h2>
                                            <div className='model-btn'>
                                                <button type='submit' className='btn-box' >Yes</button>
                                                <button type='button' className='btn-box no' onClick={() => setStatusModel(false)} >No</button>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                            <h2>Are you sure Active this status ?</h2>
                                            <div className='model-btn'>
                                                <button type='submit' className='btn-box' >Yes</button>
                                                <button type='button' className='btn-box no' onClick={() => setStatusModel(false)} >No</button>
                                            </div>
                                        </div>
                                    }
                                </form>

                            )}
                        </Form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default StatusCharityModel