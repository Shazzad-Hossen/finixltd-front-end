import React from 'react';
import Login from '../pages/admin/Login';
import { Outlet } from 'react-router';

const AdminLayout = () => {
    const user  = null;

    if(!user) return <Login/>
    else
 return (
        <>
            <Outlet />
        </>
    );
};

export default AdminLayout;