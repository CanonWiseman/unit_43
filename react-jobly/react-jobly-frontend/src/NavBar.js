import React, {useContext} from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "./UserContext";
import "./NavBar.css"

export function NavBar () {
    const navigate = useNavigate();
    const {Logout, currUser} = useContext(UserContext)
    return (
        <div className="Navbar">
            <Navbar expand="md">
                <Link to="/" className="Navbar-logo">
                    JOBLY
                </Link>  
                <Nav className="ml-auto" navbar>
                    <NavItem className="Navbar-links">
                        {currUser?
                            <>
                                <NavLink to="/companies">Companies</NavLink>
                                <NavLink to="/jobs">Jobs</NavLink>
                                <NavLink to="/profile">Profile</NavLink>
                                <Link onClick={()=>{Logout(); navigate("/")}}>Logout {currUser.username}</Link>
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