import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    // const isLoggedIn = useSelector(s => !!s?.auth?.user?.token);
    // const isLoggedIn = useSelector(s => !!s?.auth?.user?.data?.authToken);
    // console.log(isLoggedIn)

    let isLoggedIn = false;

    const token = JSON.parse(localStorage.getItem("user"));
    if (token) {
        isLoggedIn = true;
    }

    // console.log("token", token)
    useEffect(() => {
        if (!isLoggedIn) navigate('/signin', { replace: true });
    }, [isLoggedIn, navigate])

    return (
        <>
            {children}
        </>
    )
}

export default AuthGuard;