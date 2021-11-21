import { useEffect, Fragment } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

type RequireAuthProps = {
    children: React.ReactNode | React.ReactNode[]
}

function RequireAuth({ children }: RequireAuthProps){
    const navigate = useNavigate()
    const { isLoggedIn } = useAuthContext()
    const location = useLocation()

    useEffect(() => {
        if(!isLoggedIn){
            navigate("/login", { state: { from: location }})
        }
    }, [isLoggedIn, location, navigate])

    return (<Fragment>
        { children }
    </Fragment>)
}



export default RequireAuth 