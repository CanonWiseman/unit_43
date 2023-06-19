import {useContext, useEffect} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import UserContext from "./UserContext";

export function ProtectedRoutes(){
    const {currUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() =>{
        async function checkUser(){
            await currUser;
            if(!currUser){
                return navigate("/")
            }
        }
        checkUser()
    },[])

    return(
        <div className="container">
            <Outlet></Outlet>
        </div>
        
    )
    
}