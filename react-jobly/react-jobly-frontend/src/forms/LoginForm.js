import React, {useState, useContext} from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";

export function LoginForm(){
    const {Login} = useContext(UserContext);
    const navigate = useNavigate();
    const INITIAL_VALUES = {
        username: "",
        password: "" 
    }

    const [formData, setFormData] = useState(INITIAL_VALUES);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
        ...fData,
        [name]: value
        }));
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        Login({...formData})
        setFormData(INITIAL_VALUES);
        navigate("/");
    }
    return (
        <div className="container">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder={`Enter Username`}
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder={`Enter Password`}
                    value={formData.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
        
    )
}