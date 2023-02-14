import React, { useState } from 'react'
import { Field ,Form} from 'react-final-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Charityverifictaion } from '../../../actions/charity'
import { rendertextarea } from '../../forms'
import './delete.scss'

const Dmodel = ({name,smallText,setmodel,ismodel ,id}) => {
const dispatch  = useDispatch()
const navigate  = useNavigate()
const [rejectReason ,setRejectReason]=useState("")



const onSubmit = (value) =>{
    console.log('onSubmit: ', value)
    const data ={
                charityId: id,
                adminVerification: "Reject",
                rejectReason: value.textfield
            }
            console.log(data);
            dispatch(Charityverifictaion(data))
            .then(()=>navigate("/master"))
    
}

    const required = (value, fieldName = ' ') => (value ? undefined : `Required ${fieldName}`)
    
    return (
        <>
            <div className= {`model-area ${ismodel ? "open-model" :""}`} >
                <div className= "model-box" >
                    <div className='modele-text-box' >
                        <h2>{name} ?</h2>
                        <p>{smallText}</p>
                        {/* <input type='text' value={rejectReason} onChange={(e)=>setRejectReason(e.target.value)}/> */}
                        <Form
                        onSubmit={onSubmit}
                    //validate={values} 
                    >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <ul className='input-list' >
                                    
                                    <li>
                                        {/* <label className='label-text'> Guidestar / Candid Seal :  </label> */}
                                        <div className='div-checkbox' >
                                            <div className='inner-checkbox'>
                                                <Field
                                                    name="textfield"
                                                    component={rendertextarea}
                                                    placeholder="Add reason"
                                                    validate={(value) => required(value, "Add Reason")}
                                                    className="form-grp"
                                                    inputclass="input-box text-area-box"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className='model-btn'>
                        <button type='button' className='btn-box no' onClick={() => setmodel(false)} >No</button>
                        <button type='submit' className='btn-box' >Yes</button>
                        {/* onClick={hadlereject} */}
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

export default Dmodel

