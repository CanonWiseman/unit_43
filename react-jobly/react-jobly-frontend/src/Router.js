import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { Home } from "./Home";
import { CompaniesList } from "./Companies/CompanyList";
import { CompanyDetails } from "./Companies/CompanyDetails";
import { JobList } from "./Jobs/JobList";
import { LoginForm } from "./forms/LoginForm";
import { SignUpForm } from "./forms/SignUpForm";
import { Profile } from "./Profile";
import { ProtectedRoutes } from "./ProtectedRoutes";

export function Router(){
    return(
        <Routes>
            <Route element={<ProtectedRoutes/>}>
                <Route path="/companies" element={<CompaniesList/>}/>
                <Route path="/companies/:id" element={<CompanyDetails/>}/>
                <Route path="/jobs" element={<JobList/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="/signup" element={<SignUpForm/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}