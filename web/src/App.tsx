import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Challenge, ChallengeDetails, Mission, Mypage, Root } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Challenge /> },
      { path: 'challenge/:id', element: <ChallengeDetails /> },
      { path: 'mission', element: <Mission /> },
      { path: 'mypage', element: <Mypage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
