import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Encompass from './tabs/encompass.js';
import Star from './tabs/star.js';
import './tabs.scss';

const Steps4 = ({ setSteps,setclass,setcompleted}) => {

    const [tab ,settab]=useState(false);
    console.log('tab----111: ', tab);

    const prev = () => {
        setSteps(2)
    }

    return (
        <>

            <div className='section-steps'>
                <div className='d-flex flex-wrap w-100'>
                    <div className='col-12 col-box'>

                        <label className='label-text'> Charity Navigator Rating : </label>
                        <div className='tab-main-box'>
                            <div className='tab-box'>
                                <div className='tab-div' onClick={() => settab(false)} >
                                    <label className="check-label">Encompass Rating
                                        <input type="radio" defaultChecked name="Rating" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className='tab-div' onClick={() => settab(true)}>
                                    <label className="check-label">Star Rating
                                        <input type="radio" name="Rating" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                            <div className='panel-box'>

                                {
                                    !tab ? (
                                        <Encompass setcompleted={setcompleted} setSteps={setSteps} onPrevClick={prev} setclass={setclass} />
                                    ) : (
                                        <Star onPrevClick={prev}  />
                                    )
                                } 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Steps4;