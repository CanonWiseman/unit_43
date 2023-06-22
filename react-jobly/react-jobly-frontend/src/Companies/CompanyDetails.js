import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { JobCard } from "../Jobs/JobCard";
import "./CompanyDetails.css";

export function CompanyDetails(){
    const params = useParams();
    const company = useFetch({}, "getCompany", params.id);
    
    if(company.loading){
        return <></>
    }
    return(
        <div className="container">
            <div className="col-lg-8">
                <h1 className="CompanyDetails-title">{company.data.name}</h1>
                <h2 className="CompanyDetails-desc">{company.data.description}</h2>
            </div>
            {company.data.jobs.map(job => (
                <JobCard key={job.id} job={job}/>
            ))}
        </div>

    )
}