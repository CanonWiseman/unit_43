import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { JobCard } from "../Jobs/JobCard";

export function CompanyDetails(){
    const params = useParams();
    
    const company = useFetch({}, "getCompany", params.id);
    
    if(company.isLoading){
        return <p>Loading</p>
    }
    return(
        <div className="container">
            <h1>{company.data.name}</h1>
            <h2>{company.data.description}</h2>
            {company.data.jobs.map(job => (
                <JobCard key={job.id} job={job}/>
            ))}
        </div>

    )
}