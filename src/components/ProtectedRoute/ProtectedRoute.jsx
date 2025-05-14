import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../../context/User.context';

export default function ProtectedRoute({ children }) {
  const { token } = useContext(userContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
