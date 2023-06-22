import React, {useState, useContext} from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import { DisplayMessage } from "../DisplayMessage";
import "./SignUpForm.css";

export function SignUpForm(){
    const {SignUp} = useContext(UserContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const INITIAL_VALUES = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
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
        const registerRes = await SignUp({...formData});
        if(registerRes){
            setErrors(registerRes);
        }
        else{
            setFormData(INITIAL_VALUES);
            navigate("/");
        }
        
    }
    return (
        <div className="container SignUp">
            <h1>Sign Up</h1>
            <form className="text-center" onSubmit={handleSubmit}>
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
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder={`Enter First Name`}
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder={`Enter Last Name`}
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder={`Enter Email`}
                    value={formData.email}
                    onChange={handleChange}
                />
                <button className="btn btn-dark">Submit</button>
            </form>
            <DisplayMessage color="#d9534f" messages={errors}/>
        </div>
        
    )
}