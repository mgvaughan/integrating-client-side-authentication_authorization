import * as React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { TOKEN_KEY } from '../services/api-services';

const PrivateRoutes = () => {
    const TOKEN = localStorage.getItem(TOKEN_KEY);

    if(!TOKEN) {
        return <Navigate to="/home" />
    } else {
        return <Outlet />
    }
};

export default PrivateRoutes;