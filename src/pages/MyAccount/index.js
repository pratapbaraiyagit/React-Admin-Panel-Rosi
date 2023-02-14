import React from 'react';
import { Link } from 'react-router-dom';
import './myAccount.scss';

const MyAccount = () => {

    return (
        <>
            In MyAccount <br />

            <Link to="/dashboard">Dashboard</Link>
        </>
    );
}

export default MyAccount;