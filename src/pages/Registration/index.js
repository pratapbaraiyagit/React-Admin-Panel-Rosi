import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './registration.scss';
import  Steps from './steps.js';
import Steps1 from './steps_1';
import Steps2 from './steps_2';
import Steps3 from './steps_3';
import Steps4 from './steps_4';
import Steps5 from './steps_5';

const Registration = () => {

  const [step,setSteps]= useState(0);
  const [isclass,setclass]= useState(false);
  const [iscompleted,setcompleted]= useState(false);
  console.log('iscompleted: ', iscompleted);
  console.log('isclass-----: ', isclass);
  
    const demos = [
        {
          title: 'First',
          content: <Steps1 step={step}
          setSteps={setSteps}  />,
        },
        {
          title: 'Second',
          content: <Steps2 step={step}
          setSteps={setSteps} />,
        },
        {
          title: '3',
          content: <Steps3 step={step}
          setSteps={setSteps} />,
        },
        {
            title: '4',
            content: <Steps4 step={step} setclass={setclass} setcompleted={setcompleted}
            setSteps={setSteps} />,
        },
        {
          title: '5',
          content: <Steps5 step={step} setclass={setclass} 
          setSteps={setSteps}  />,
      },
      ];

    return (
        <>
          <section className={`d-flex flex-wrap w-100 align-items-center justify-content-center section-step ${isclass ? 'header-section': ''} `} >
                <div className='container-full w-100 ' >
                  <div className='row'>
                      <div className='col-6 col-section'>
                          <div className='header-link-box'>
                              <Link to="#" className='link-text' >Rosi Giving</Link>
                          </div>
                      </div>
                      <div className='col-6'>
                          <div className='right-list-box col-section'>
                              <ul>
                                  <li> <Link to="#">Terms and Condition</Link> </li>
                                  <li> <Link to="#">Privacy Policy</Link> </li>
                                  <li> <Link to="#">FAQs</Link> </li>
                              </ul>
                          </div>
                      </div>
                      <div className='col-12'>
                          <div>
                            {
                              !iscompleted ? 
                              (
                                <h2>Rosi Giving</h2>
                              ) 
                              : 
                              (
                                <div className='inner-div' >
                                  <h2>REVIEW REQUEST</h2>
                                  <p>Your request will be reviewed by the system admin. You can access the other features of the panel after the approval.</p>
                                </div>
                              )
                            }
                          </div>
                      </div>
                  </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <Steps step={step}
                          setSteps={setSteps}
                          setclass={setclass}
                          demos={demos}
                        />

                      <strong>Copyright ©2020 Produced by RosiGiving Charity</strong>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Registration;