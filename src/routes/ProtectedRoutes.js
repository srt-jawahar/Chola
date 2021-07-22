import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { PATH_PAGE } from './paths';

export default function ProtectedRoutes({ children }) {
  const isAuthenticated = useSelector(null);
  // const isLoading = useSelector(null);
  const token = localStorage.getItem('token');
  const refresh = localStorage.getItem('refresh');
  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  /*
    TODO: 1. Verify if token and refresh exists in localStorage.
          2. If the above mentioned keys does not exists Logout action has to be called.
  */

  if (!isAuthenticated || token === null || refresh === null) {
    return <Redirect to={PATH_PAGE.auth.login} />;
  }

  return children;
}
