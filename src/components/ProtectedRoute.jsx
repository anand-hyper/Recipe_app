import React from 'react'
import { Navigate } from 'react-router-dom';
import { getUserID } from '../hooks/GetUserId'

const ProtectedRoute = ({ children }) => {
    const userID = getUserID();
    return (
        <div>
            {userID ? (
                children
            ) : (
                <Navigate to="/login" />
            )}
        </div>
    )
}

export default ProtectedRoute