import React from "react";
import { Link } from "react-router-dom";
import { CardBody, Card, CardTitle, CardText } from "reactstrap";

export function CompanyCard({company}){
    return (
        <div className="col-lg-8">
            <Link to={`/companies/${company.handle}`}>
                <Card color="light">
                    <CardBody>
                        <CardTitle>{company.name}</CardTitle>
                        <CardText>{company.description}</CardText>
                        {company.logoUrl?<img src={company.logoUrl} alt={company.handle}/>:null}
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}