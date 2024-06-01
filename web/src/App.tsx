import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Challenge, ChallengeDetails, Mission, Mypage, Root } from '@/pages';
import Register from './pages/register/index';
import Login from './pages/login/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Challenge /> },
      {
        path: 'challenge/:id',
        element: <ChallengeDetails />,
      },
      { path: 'challenge/:id/mission', element: <Mission /> },
      { path: 'mypage', element: <Mypage /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
