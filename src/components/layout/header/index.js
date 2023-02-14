import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { doLogout } from '../../../actions/auth';
import { OutSideClick, toAbsoluteUrl } from '../../../utils';
import Bell from '../../svg/bell';
import Darrow from '../../svg/dArrow';
import Menu from '../../svg/menu';
import './header.scss';

const Header = ({setsidebar,issidebar}) => {

    const [ismenu ,setmenu] = useState(false)
    const modelRef = useRef()
    const dispach = useDispatch()

    const onLogout = () =>{
        dispach(doLogout())
        window.location.reload()
        // setmenu(false)
    }

    OutSideClick(modelRef, () => {
        console.log('asd');
        if(ismenu == true)
         setmenu(false);  

    });

    return (
        <>
            <header>
                <div className='container-full'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 col-4'>
                            <Link to='#' className='left-logo' >
                                <img src={toAbsoluteUrl('/images/logo.svg')} alt="left-logo" />
                            </Link>
                        </div>
                        <div className='col-md-6 col-8'>
                            <div className='right-header'>
                                <div className='icon-box toggle-box' onClick={() => setsidebar(!issidebar)} >
                                    {/* <Bell /> */}
                                    <Menu />
                                </div>
                                <div className='icon-box' >
                                    <Bell />
                                    <span>11</span>
                                </div>
                                <div ref={modelRef} className='profile' onClick={() => setmenu(!ismenu)} >
                                    <figure>
                                        <img src={toAbsoluteUrl('/images/logo.svg')} alt="left-logo" />
                                    </figure>
                                    <h5>Admin <Darrow /> </h5>

                                    {
                                        ismenu &&
                                        <ul  className='inner-menu-box'>
                                            <li><Link to='/change_password' onClick={() => setmenu(false)} className='btn-li left-logo'>Change Password</Link></li>
                                            <li><button type='button' className='btn-li' onClick={onLogout} >Logout</button></li>
                                        </ul>
                                    }

                                    {/* <button type='button' className='logout-btn' onClick={onLogout} >Logout</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;