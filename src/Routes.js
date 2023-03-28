import { useRoutes } from 'react-router';
import { lazy, Suspense } from 'react';
import React from 'react';

const Home = lazy(() => import('./Pages/Home'));
const Login = lazy(() => import('./Pages/Login'));
const Register = lazy(() => import('./Pages/Register'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Page1 = lazy(() => import('./Dashboard/Page1'));
export default function Router() {


  let element = useRoutes([
    {
      path: '/',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: '/register',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
      ),
    },
    {
      path: '/dashboard/page1',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
        <Page1 />
      </Suspense>
      ),
    },
    {
      path: '/*',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <h1>404 Not Found</h1>
        </Suspense>
      ),
    },
  ]);
  return element;
}
