import React from "react";
import { JobCard } from "./JobCard";
import { useFetch } from "../hooks/useFetch";
import { SearchForm } from "../forms/SearchForm";

export function JobList(){

    const jobs = useFetch([], "getJobs");
    if(jobs.isLoading){
        return <p>isLoading</p>
    }
    return(
        <div className="container">
            <SearchForm updateList={jobs.updateApiCall}/>
            {jobs.data.map(job => (
                <JobCard key={job.id} job={job}/>
            ))}
        </div>
    )
}