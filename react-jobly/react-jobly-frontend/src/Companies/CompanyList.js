import React from "react";
import { CompanyCard } from "./CompanyCard";
import { useFetch } from "../hooks/useFetch";
import { SearchForm } from "../forms/SearchForm";

export function CompaniesList(){

    const companies = useFetch([], "getCompanies");

    if(companies.isLoading){
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <SearchForm updateList={companies.updateApiCall}/>
            {companies.data.map(company => (
                <CompanyCard key={company.handle} company={company}/>
            ))}
        </div>
    )
}