import { Outlet, Navigate } from 'react-router-dom';

export const ProtectRoute = () => {
  if (!localStorage.getItem('username')) {
    return <Navigate to='login' replace />
  }
  return children ? children : <Outlet />
}