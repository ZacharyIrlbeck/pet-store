import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { useAuthContext } from "../context/AuthContext";

type RequireAuthProps = {
    children: React.ReactNode
}

function RequireAuth({ children }: RequireAuthProps){
    const { isLoggedIn } = useAuthContext()
    const location = useLocation()

    if(!isLoggedIn){
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children 
}



export default RequireAuth 