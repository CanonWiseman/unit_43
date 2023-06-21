import {useContext, useEffect, useState} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import UserContext from "./UserContext";

export function ProtectedRoutes(){
    const {currUser, loading} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() =>{
        function checkUser(){
            if(!loading){
                if(!currUser){
                    return navigate('/');
                }
            }
        }
        checkUser()
    },[loading])

    if(loading){
        return <></>
    }
    return(
            <Outlet>

            </Outlet>
    )
    
}