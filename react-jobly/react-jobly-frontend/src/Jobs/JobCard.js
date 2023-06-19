import React from "react";
import { CardBody, Card, CardTitle, CardText } from "reactstrap";
 
export function JobCard({job }){

    return(
        <div className="col-lg-8">
            <Card color="light">
                <CardBody>
                    <CardTitle>
                        {job.title}
                    </CardTitle>
                    {job.companyHandle?
                        <CardTitle>{job.companyHandle}</CardTitle>: null}
                    
                    <CardText>
                        Salary: {job.salary || "N/A"}
                    </CardText>
                    <CardText>
                        Equity: {job.equity || "N/A"}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}