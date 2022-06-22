import React, { FC } from 'react'

import Footer from './footer/Footer'
import AuthHeader from './header/AuthHeader'
import Header from './header/Header'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'

interface Props {
    // any props that come into the component
}

const Layout: FC<Props> = ({ children, ...props }: any) => {

    const { is_loggedin } = useSelector((state: any) => state.login)
    const location = useLocation();
    return (
        <div>
            {is_loggedin ?
             <AuthHeader />
               : <Header />} 
            <div className={location.pathname === "/" ? "pb-308 bg-homepage" : "pb-308"} {...props}>{children}</div>
             {/* <div className="pb-308" {...props}>{children}</div> */}
            {/* <Footer /> */}
        </div>
    )
};

export default Layout;