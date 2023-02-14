import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';

import './delete.scss'
import { charityManageDelete, CharityManagementListing } from '../../../actions/charity'

const DeleteCharityManageModel = ({ setCharityManageDeleteModel, charityManageDeleteModel, charityManageDeleteId }) => {
    const dispatch = useDispatch()

    const [arg, setArg] = useState({
        page: 1,
        limit: 99999,
        search: "",
        order: "",
    });

    const onSubmit = () => {
        dispatch(charityManageDelete({ id: charityManageDeleteId }))
            .then((res) => {
                dispatch(CharityManagementListing(arg))
                toast.success(res?.message || 'Success')
            })
            .catch((err) => toast.error(err?.message || "Something went wrong"))
        setCharityManageDeleteModel(false)
    }

    return (
        <>
            <div className={`model-area ${charityManageDeleteModel ? "open-model" : ""}`} >
                <div className="model-box" >
                    <div className='modele-text-box' >
                        <h2>Are you sure you want to Delete Charity ?</h2>
                        <Form
                            onSubmit={onSubmit}
                        >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className='model-btn'>
                                        <button type='submit' className='btn-box' >Yes</button>
                                        <button type='button' className='btn-box no' onClick={() => setCharityManageDeleteModel(false)} >No</button>
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

export default DeleteCharityManageModel