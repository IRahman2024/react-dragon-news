import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Shared/RightSidenav/Register";
import News from "../pages/News/News";
import PvtRoutes from "./PvtRoutes";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/data/news.json')
            },
            {
                path:'/news/:id',
                element: <PvtRoutes><News></News></PvtRoutes>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    }
]);

export default Routes;