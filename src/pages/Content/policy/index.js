import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/layout/Breadcrumb'
import '../content.scss'

const Policy = () => {

    const [value, setValue] = useState('');

    const list = [
        {
            name:" Content Management ",
            link: "/homepage",
            isactive:false
        },
        {
            name:"Privacy Policy",
            link: " Content Management / privacy_policy",
            isactive:true
        }
      ]


  return (
    <>
        <div>
            <div className='top-box' >
            <Breadcrumb list = {list} /> 
            <h2> Privacy Policy </h2>
            </div>
            <div className='section-inner'>
                <div className='form-area'>
                    <ReactQuill 
                        theme="snow" 
                        placeholder={'write....'}
                        value={value} 
                        onChange={setValue} 
                        style={{height:"300px" ,display:"inline-block",width:"100%"}}
                        />
                       <div className='d-flex flex-wrap form-btn-box' >
                            <Link to='/home' className='link-btn'>Save</Link>
                            <Link to='/master' className='link-btn cancel'>Cancel</Link>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Policy
