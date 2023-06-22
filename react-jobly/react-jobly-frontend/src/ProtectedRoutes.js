import {useContext} from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "./UserContext";

export function ProtectedRoutes(){
    const {currUser} = useContext(UserContext);

    
    if(!currUser){
        return <Navigate to="/"/>
    }
    return(
            <Outlet>

            </Outlet>
    )
    
}