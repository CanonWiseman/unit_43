import React, {useState, useContext} from "react";
import UserContext from "./UserContext";
import JoblyApi from "./api";

export function Profile(){
    const {currUser, setCurrUser} = useContext(UserContext);
    
    const INITIAL_VALUES = {
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        email: currUser.email
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
        try{
            const res = await JoblyApi.updateUser(formData, currUser.username);
            setCurrUser(res);
        }
        catch(e){
            console.log(e);
        }
        
    }
    if(!currUser){
        return <p>Loading</p>
    }
    return (
        <div className="container">
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={currUser.username}
                    disabled
                />
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <input
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}