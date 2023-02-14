import React from 'react';
import { Field,Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { dummyLogin } from '../../actions/auth';
import { renderField } from '../../components/forms';
import { toAbsoluteUrl } from '../../utils';
import './ForgotPassword.scss';

const ForgotPassword = () => {
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
                <div className='d-flex align-items-center min-h100'>
                    <div className='col-6 none-mobile'>
                        <div>
                            <figure className='text-center figure-img'>
                                <img src={toAbsoluteUrl("/images/login-left.svg")} alt="left-img" />
                            </figure>
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                    <Form
                        onSubmit={onSubmit}
                            //validate={values} 
                            >
                        {({handleSubmit }) => (
                                <form onSubmit={handleSubmit} className="form-box" >
                                     <Link to="#" >
                                        <h2>Rosi Giving</h2>
                                    </Link>
                                    <ul className='input-list' >
                                        <li>
                                            <Field
                                            name="Enteremail"
                                            type="text"
                                            placeholder="Enter email"
                                            component={renderField}
                                            validate={(value)=> required(value,'Enter email')}
                                            className="form-grp"
                                            inputclass="input-box"
                                            /> 
                                        </li>
                                    </ul>
                                    <div>
                                        <Link to='/home' className='link-btn'>Reset Password</Link>
                                        <span className='bottom-text'><Link to="/signin" >Login</Link></span>
                                    </div>
                                </form>
                                
                            ) }
            
                    </Form> 
                    </div>
                </div>
            </section> 
        </>
    );
}

export default ForgotPassword;