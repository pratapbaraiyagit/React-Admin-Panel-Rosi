import React, { useState } from 'react'
import Breadcrumb from '../../../components/layout/Breadcrumb'
import "react-datepicker/dist/react-datepicker.css";
import { toAbsoluteUrl } from '../../../utils';
import StarRatings from 'react-star-ratings';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './view.scss'
import CommunityDetail from './tabs/communityDetail';
import MemberDetails from './tabs/memberDetails';
import ImageVideo from './tabs/ImageVideo';
import Dmodel from '../../../components/common/delete';

const CommunityView = ( ) => {

    const [ismodel, setmodel] = useState(false);

  return (
    <>
        <div>
            <div className='top-box' >
            <Breadcrumb /> 
            <h2>Community View </h2>
            </div>
            <div className='section-inner'>
                <div className='d-flex flex-wrap'>
                    <div className='col-md-6'>
                        <div className='view-leftbox'>
                            <div>
                                <figure className='help-img' >
                                    <img src={toAbsoluteUrl('/images/world.png')} alt="world-img" />
                                </figure>
                                <figcaption>
                                    Help Save the World
                                    <StarRatings
                                        rating={2.403}
                                        starDimension="30px"
                                        starSpacing="3px"
                                        starRatedColor="#FADB14"
                                    />
                                </figcaption>
                            </div>
                            <div className='view-about-box' >
                                <h4>About Community</h4>
                                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used Lorem ipsum may be used 
                                    as a placeholder before the final copy is publishing and graphic design, Lorem ipsum is a placeholder text 
                                    commonly used Lorem ipsum is a Lorem ipsum Lorem ipsum Lorem ipsumLorem is a ipsum Lorem ipsum Lorem ipsum 
                                    Lorem ipsum
                                </p>
                                <div className='list-member' >
                                    <ul className='member-list'> 
                                        <li> <div className='dots-div'>25 Donor</div> <span>Member of Community</span> </li>
                                    </ul>
                                    <button type='button' className='link-btn community-btn' onClick={() => setmodel(!ismodel)} >Hide the Community</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 pl-0'>
                        <div className='view-rightbox'>
                            <Tabs>
                                <TabList>
                                <Tab>Community Details</Tab>
                                <Tab>Image and Video</Tab>
                                <Tab>Member Details</Tab>
                                </TabList>

                                <TabPanel>
                                    <CommunityDetail />
                                </TabPanel>
                                <TabPanel>
                                    <ImageVideo />
                                </TabPanel>
                                <TabPanel>
                                    <MemberDetails />
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <Dmodel name="Are you sure you want to hide the community" setmodel={setmodel} ismodel={ismodel} className="d-model" />
    </>
  )
}

export default CommunityView
