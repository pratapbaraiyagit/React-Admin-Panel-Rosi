import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../svg/dashboard';
import Darrow from '../../svg/dArrow';
import Writer from '../../svg/writer';
import Team from '../../svg/team';
import Programming from '../../svg/programming';
import './sidebar.scss';
import Sarrow from '../../svg/sArrow';

const Sidebar = ({issidebar, setsidebar}) => {

    const [isclass, setclass] = useState(0);
    const [issubmenu, setsubmenu] = useState(0);

    const handleClick = (e) => {
        if(e.target.id == isclass)
         setclass(0)
         else 
        setclass(e.target.id);
      }

    return (
        <>
            <div className={`overlay-box ${ issidebar ? 'open-sidebar' : ' '}`} >
                <div className={`sidebar-box ${ issidebar ? 'open-sidebar' : ' '}`}>
                    <ul className='sidebar-list' onMouseLeave={()=>{setsubmenu(0)}} >

                        <li 
                            onMouseEnter={()=>{setsubmenu(1)}} 
                            onClick={handleClick} 
                            id={1} 
                            className={`${isclass == 1 ? ' active link-li' : ' '}${issubmenu == 1 ? ' sub-menu-true' : ''}`} >

                            <Link to="/community" 
                            onClick={handleClick} 
                            id={1} 
                            className="active" > 
                                <i className='icon-box'><Team /></i> Community Detail <i className="down-arrow" > <Darrow /> </i>
                            </Link>

                            <ul className='sub-menu' onMouseLeave={()=>{setsubmenu(0)}}>
                                {/* <li>
                                    <Link to="/master/charity_management"> Event Management</Link>
                                </li> */}
                            </ul>
                        </li>

                        <li 
                        onMouseEnter={()=>{setsubmenu(true)}}
                        onClick={handleClick} 
                        id={2}  
                        className={`${ isclass == 2 ? 'active link-li' : ' '}${issubmenu ? ' sub-menu-true' : ''}`} >
                            <Link 
                                to="#" 
                                onClick={handleClick}
                                id={2} 
                                className="active" > 
                                <i className='icon-box'><Programming /></i> Master Management <i className="down-arrow" > <Darrow /> </i>
                            </Link>
                            <ul className='sub-menu' onMouseLeave={()=>{setsubmenu(false)}}>
                                <li>
                                    <Link to="/master"> New charity</Link>
                                </li>
                                <li>
                                    <Link to="/master/charity_management"> Charity Management</Link>
                                </li>
                                <li>
                                    <Link to="/master/charity_category_management">Charity Category</Link>
                                </li>

                                <li>
                                    <Link to="/master/cause_management"> Cause Management</Link>
                                </li>
                            </ul>
                        </li>

                        <li 
                            onMouseEnter={()=>{setsubmenu(true)}} 
                            onClick={handleClick} 
                            id={3} 
                            className={`${isclass == 3 ? ' active link-li' : ' '}${issubmenu ? ' sub-menu-true' : ''}`} >

                            <Link to="#" 
                            onClick={handleClick} 
                            id={3} 
                            className="active" > 
                                <i className='icon-box'><Writer /></i> Content Management <i className="down-arrow" > <Darrow /> </i>
                            </Link>

                            <ul className='sub-menu' onMouseLeave={()=>{setsubmenu(false)}}>
                                <li>
                                    <Link to="/content_management/homepage"> Homepage</Link>
                                </li>
                                <li>
                                    <Link to="/content_management/privacy_policy"> Privacy policy </Link>
                                </li>
                                <li>
                                    <Link to="/content_management/terms_condition"> Terms & condition </Link>
                                </li>
                                <li>
                                    <Link to="/content_management/about_us"> About Us </Link>
                                </li>
                                <li>
                                    <Link to="/content_management/leadership"> Leadership </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className='side-arrow-box' >
                        <Link to="#" onClick={() => setsidebar(!issidebar) } > <i className="side-arrow" > <Sarrow /> </i> </Link>
                    </div>    

                </div>
            </div>
        </>
    );
}

export default Sidebar;