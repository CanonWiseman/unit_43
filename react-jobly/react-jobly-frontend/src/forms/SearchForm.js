import React, {useState} from "react";
import "./SearchForm.css";
export function SearchForm({updateList}){

    const INITIAL_VALUES = {
        searchVal: ""
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
        updateList(formData.searchVal);
        setFormData(INITIAL_VALUES);
    }
    return (
        <form className="SearchForm"onSubmit={handleSubmit}>
            <input
                id="searchVal"
                name="searchVal"
                type="text"
                placeholder={`Enter Search Term`}
                value={formData.searchVal}
                onChange={handleChange}
            />
            <button className="btn btn-dark">Submit</button>
        </form>
    )
}