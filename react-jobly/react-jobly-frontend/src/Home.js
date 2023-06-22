import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import "./Home.css";

export function Home(){
    const {currUser} = useContext(UserContext);

    return(
        <div className="container Home">
            <div className="Home-content text-center row">
                <h1>Jobly</h1>
                <p className="Home-slogan">All the jobs in one, convenient place.</p>
                {currUser?
                    <>
                        <p className="Home-user">Welcome Back, {currUser.firstName}!</p>
                    </>            
                    :
                    <>
                        <Link className="" to="/login"><button className="btn btn-dark Home-buttons">Log in</button></Link>
                        <Link to="/signup"><button className="btn btn-dark Home-buttons">Sign up</button></Link>
                    </>
                }
            </div>
        </div>
    )
}