import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function RequireAuth({ children }){
    const { isLoggedIn } = useContext(AuthContext)
    const location = useLocation()

    console.log('is logged in?', isLoggedIn)

    if(!isLoggedIn){
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children 
}



export default RequireAuth 