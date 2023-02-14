import React from 'react';
import { Field,Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { dummyLogin } from '../../actions/auth';
import { renderField } from '../../components/forms';
import { toAbsoluteUrl } from '../../utils';
import './ChangePassword.scss';

const ChangePassword = () => {
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

            <section className='section-div pwd-section'>
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
                                            name="OldPassword"
                                            type="password"
                                            placeholder="Old Password"
                                            component={renderField}
                                            validate={ (value) => required(value,('Old Password'))}
                                            className="form-grp"
                                            inputclass="input-box"
                                            />
                                        </li>
                                        <li>
                                            <Field 
                                            name="Newpassword"
                                            type="password"
                                            placeholder="New password"
                                            component={renderField}
                                            validate={ (value) => required(value,('New password'))}
                                            className="form-grp"
                                            inputclass="input-box"
                                            />
                                        </li>
                                        <li>
                                            <Field 
                                            name="Confirmpassword"
                                            type="password"
                                            placeholder="Confirm password"
                                            component={renderField}
                                            validate={ (value) => required(value,('Confirm password'))}
                                            className="form-grp"
                                            inputclass="input-box"
                                            />
                                        </li>
                                    </ul>
                                    <div>
                                        <Link to='/home' className='link-btn'>Change Password</Link>
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

export default ChangePassword;