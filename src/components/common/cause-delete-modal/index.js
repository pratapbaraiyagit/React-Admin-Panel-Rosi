import React, { useState } from 'react'
import { Form } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { causeDelete, causeListing } from '../../../actions/cause'
import { toast } from 'react-toastify';

import './delete.scss'

const DeleteCauseModel = ({ setCauseDeleteModel, causeDeleteModel, causeDeleteId }) => {
    const dispatch = useDispatch()

    const [arg, setArg] = useState({
        page: 1,
        limit: 99999,
        search: "",
        // order: "",
    });

    const onSubmit = () => {
        dispatch(causeDelete({ id: causeDeleteId }))
            .then((res) => {
                dispatch(causeListing(arg))
                toast.success(res?.message || 'Success')
            })
            .catch((err) => toast.error(err?.message || "Something went wrong"))
        setCauseDeleteModel(false)
    }

    return (
        <>
            <div className={`model-area ${causeDeleteModel ? "open-model" : ""}`} >
                <div className="model-box" >
                    <div className='modele-text-box' >
                        <h2>Are you sure you want to Delete Cause?</h2>
                        <Form
                            onSubmit={onSubmit}
                        >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='model-btn'>
                                        <button type='submit' className='btn-box' >Yes</button>
                                        <button type='button' className='btn-box no' onClick={() => setCauseDeleteModel(false)} >No</button>
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

export default DeleteCauseModel