import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

export function Home(){
    const {currUser} = useContext(UserContext);

    return(
        <div className="container">
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            {currUser?
                <>
                    <p>Welcome Back, {currUser.firstName}!</p>
                </>            
                :
                <>
                    <Link to="/login"><button>Log in</button></Link>
                    <Link to="/signup"><button>Sign up</button></Link>
                </>
            }
        </div>
    )
}