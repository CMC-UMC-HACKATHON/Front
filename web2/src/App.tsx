import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Root,
  ChallengePage,
  ChallengeDetailPage,
  MissionPage,
  ProfilePage,
  SignupPage,
  SigninPage,
  PayPage,
} from "@/pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useChallenge } from "./hooks/useChallenge";
import { CustomDrawer } from "./components/custom-drawer";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <ChallengePage /> },
      {
        path: "challenge/:id",
        element: <ChallengeDetailPage />,
      },
      { path: "challenge/:id/mission", element: <MissionPage /> },
      { path: "challenge/:id/mypage", element: <ProfilePage /> },
      { path: "register", element: <SignupPage /> },
      { path: "login", element: <SigninPage /> },
      { path: "pay", element: <PayPage /> },
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
