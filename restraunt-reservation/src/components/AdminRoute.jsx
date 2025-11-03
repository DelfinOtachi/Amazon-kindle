import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    alert('access denied. admins only');
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AdminRoute;
