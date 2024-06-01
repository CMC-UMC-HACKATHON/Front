import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Challenge, ChallengeDetails, Mission, Mypage, Root } from '@/pages';
import * as React from 'react';
// import { Register } from './pages/index';
import Register from './pages/register/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Challenge /> },
      { path: 'challenge/:id', element: <ChallengeDetails /> },
      { path: 'mission', element: <Mission /> },
      { path: 'mypage', element: <Mypage /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
