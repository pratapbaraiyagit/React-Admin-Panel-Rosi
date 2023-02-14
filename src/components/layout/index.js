import React, { lazy, useState } from 'react';
import { Outlet } from 'react-router-dom';
import "./index.scss"

const Header = lazy(() => import('./header'))
const  Sidebar = lazy(() => import('./sidebar'))

const Layout = () => {

    
    const [issidebar, setsidebar] = useState(false);

    return (
        <>
            <Header  issidebar={issidebar} setsidebar={setsidebar}  />
                <main className='main-box d-flex' >
                    <Sidebar issidebar={issidebar} setsidebar={setsidebar} />
                    <div className={`inner-box ${issidebar ? "open-sidebar" : ""} `}>
                        <Outlet />
                    </div>
                </main>
        </>
    )
}

export default Layout;