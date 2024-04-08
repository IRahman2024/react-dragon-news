import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PvtRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-[800px]">
            <span className="loading loading-spinner size-40
            "></span>
        </div>
    }

    if (user) {
        return children;
    }
    //saves state: where last time page was visited before logging in
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PvtRoutes;