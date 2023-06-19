import React, {useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "./UserContext";

export function NavBar () {
    const navigate = useNavigate();
    const {Logout, currUser} = useContext(UserContext)
    return (
        <div>
            <Navbar expand="md">
                <NavLink to="/" className="navbar-brand">
                    JOBLY
                </NavLink>  
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        {currUser?
                            <>
                                <NavLink to="/companies">Companies</NavLink>
                                <NavLink to="/jobs">Jobs</NavLink>
                                <NavLink to="/profile">Profile</NavLink>
                                <NavLink onClick={()=>{Logout(); navigate("/")}}>Logout {currUser.username}</NavLink>
                            </>
                        : 
                          <>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/signup">Signup</NavLink>
                          </> 
                        }
                        
                        
                        
                        
                        
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}