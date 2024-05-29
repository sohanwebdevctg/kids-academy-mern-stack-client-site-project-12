import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import AdminHome from './../pages/Dashboard/Admin/AdminHome';
import ManageClasses from './../pages/Dashboard/Admin/ManageClasses';
import ManageUsers from './../pages/Dashboard/Admin/ManageUsers';
import ManageStudents from './../pages/Dashboard/Admin/ManageStudents';
import InstructorHome from "../pages/Dashboard/Instructors/InstructorHome";
import AddAClass from "../pages/Dashboard/Instructors/AddAClass";
import MyClasses from "../pages/Dashboard/Instructors/MyClasses";
import UserHome from "../pages/Dashboard/User/UserHome";
import MySelectedClasses from "../pages/Dashboard/User/MySelectedClasses";
import MyEnrollClasses from './../pages/Dashboard/User/MyEnrollClasses';
import PaymentHistory from "../pages/Dashboard/User/PaymentHistory";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AdminRoute from "../privateRoute/AdminRoute";
import InstructorRoute from "../privateRoute/InstructorRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'adminHome',
        element : <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'manageClasses',
        element : <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'manageUsers',
        element : <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
      },
      {
        path: 'manageStudents',
        element : <AdminRoute><ManageStudents></ManageStudents></AdminRoute>
      },
      {
        path: 'instructorHome',
        element : <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
      },
      {
        path: 'addAClass',
        element : <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
      },
      {
        path: 'myClasses',
        element : <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
      },
      {
        path: 'userHome',
        element : <UserHome></UserHome>
      },
      {
        path: 'mySelectedClasses',
        element : <MySelectedClasses></MySelectedClasses>
      },
      {
        path: 'myEnrollClasses',
        element : <MyEnrollClasses></MyEnrollClasses>
      },
      {
        path: 'paymentHistory',
        element : <PaymentHistory></PaymentHistory>
      }
    ]
  }
]);