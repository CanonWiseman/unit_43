import React, {useState, useContext} from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom"; 
import { DisplayMessage } from "../DisplayMessage";
import "./LoginForm.css"

export function LoginForm(){
    const {Login} = useContext(UserContext);
    const navigate = useNavigate();
    const INITIAL_VALUES = {
        username: "",
        password: "" 
    }

    const [formData, setFormData] = useState(INITIAL_VALUES);
    const [errors, setErrors] = useState([]);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
        ...fData,
        [name]: value
        }));
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const loginRes = await Login({...formData});
        if(loginRes){
            setErrors(loginRes);
        }
        else{
            setFormData(INITIAL_VALUES);
            navigate("/");
        }
    }

    return (
        <div className="container Login">
            <h1 className="Login-title">Log In</h1>
            <form className="Login-Form text-center" onSubmit={handleSubmit}>
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
                <button className="btn btn-dark">Submit</button>
            </form>
            <DisplayMessage color="#d9534f" messages={errors}/>
        </div>
        
    )
}