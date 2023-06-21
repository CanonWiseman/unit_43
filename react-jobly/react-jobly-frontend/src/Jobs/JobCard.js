import React, {useContext, useState, useEffect} from "react";
import { CardBody, Card, CardTitle, CardText } from "reactstrap";
import UserContext from "../UserContext";

export function JobCard({job}){
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();
    
    async function handleApply() {
        if (hasAppliedToJob(job.id)) return;
        await applyToJob(job.id);
        setApplied(true);
    }

    useEffect(function updateAppliedStatus() {
        setApplied(hasAppliedToJob(job.id));
    }, [job.id, hasAppliedToJob]);

    return(
        <div className="col-lg-8">
            <Card color="light">
                <CardBody>
                    <CardTitle>
                        {job.title}
                    </CardTitle>
                    {job.companyHandle?<CardTitle>{job.companyHandle}</CardTitle>: null}
                    <CardText>
                        Salary: {job.salary || "N/A"}
                    </CardText>
                    <CardText>
                        Equity: {job.equity || "N/A"}
                    </CardText>
                    <button
                        onClick={handleApply}
                        disabled={applied}
                    >
                        {applied ? "Applied" : "Apply"}
                    </button>
                </CardBody>
            </Card>
        </div>
    )
}