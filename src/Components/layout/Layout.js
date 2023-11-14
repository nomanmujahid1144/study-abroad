import React from "react";
import { Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
import CollapsibleExample from "../navbar";
import Footer from "../../Components/footer";

function Layout(props) {
    
    // const params = useLocation();
    // const [isAuth, setIsAuth] = useState(true);

    

    // useEffect(() => {
    //     const excludedRoutes = ['/register', '/login', '/reset-password', '/confirm-password'];
    //     const isExcludedRoute = excludedRoutes.some((route) => params.pathname.startsWith(route));

    //     setIsAuth(!isExcludedRoute);
    // }, [params.pathname]);

    return (
        <>
            <div className="bg-clr">
                <CollapsibleExample />
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;