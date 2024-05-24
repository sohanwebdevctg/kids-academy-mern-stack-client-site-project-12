import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>Error...</p>,
    children: [
      {
        path: "/",
        element: <h1>this is home page</h1>,
      },
    ],
  },
]);