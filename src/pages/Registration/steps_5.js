import React from 'react';
import { Field,Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { dummyLogin } from '../../actions/auth';
import { renderField } from '../../components/forms';
import { toAbsoluteUrl } from '../../utils';
// import './signin.scss';

const Steps5 = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(dummyLogin());
        navigate('/dashboard');
    }

    const onSubmit =(value) => {
        console.log('value ',value);
    }

    const required = (value, fieldName=' ') => (value ? undefined : `Required ${fieldName}`)

    return (
        <>

            <section className='section-div'>
                <div className='d-flex align-items-center'>
                    <div className='col-12'>
                        <div>
                            <figure className='text-center figure-img'>
                                <img src={toAbsoluteUrl("/images/login-left.svg")} alt="left-img" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default Steps5;