import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login/Login';
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Student/Home";
import Lectures from './pages/Student/Lectures/Lectures';
import Sections from './pages/Student/Sections/Sections';
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import GuestRoute from "./components/GuestRoute/GuestRoute";
import UserProvider from "./context/User.context";
import Subjects from "./pages/Student/Subjects/Subjects";
import LectureDetails from "./pages/Student/LectureDetails/LectureDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import SectionsOfSubjects from "./pages/Student/SectionsOfSubjects/SectionsOfSubjects";
import LandingPage from "./pages/LandingPage/LandingPage";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
      index:true
    },
    {
      path: "/login",
      element: (
        <GuestRoute>
          <Login />
        </GuestRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <GuestRoute>
          <SignUp />
        </GuestRoute>
      ),
    },
    {
      path: "/student",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "subjects", element: <Subjects /> },
        { path: "subject/:id", element: <Lectures /> },
        { path: "sections", element: <Sections /> },
        { path: "section/:SubjectId", element: <SectionsOfSubjects/> },
        { path: "topic/:subjectId/content/:lectureId", element: <LectureDetails /> },
      ],
    }
  ]);

  return (
    <QueryClientProvider client={queryClient}>  
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
      {/* <ReactQueryDevtools initialIsOpen={false}/> */}
    </QueryClientProvider>
  );
}

export default App;
