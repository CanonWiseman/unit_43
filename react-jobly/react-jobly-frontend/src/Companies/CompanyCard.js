import React from "react";
import { Link } from "react-router-dom";
import { CardBody, Card, CardTitle, CardText } from "reactstrap";
import "./CompanyCard.css";

export function CompanyCard({company}){
    return (
        <div className="col-lg-8">
            <Link to={`/companies/${company.handle}`}>
                <Card className="CompanyCard-card">
                    <CardBody className="CompanyCard-card-body">
                        <CardTitle className="CompanyCard-title">{company.name}</CardTitle>
                        <CardText className="CompanyCard-desc">{company.description}</CardText>
                        {company.logoUrl?<img className="CompanyCard-img" src={company.logoUrl} alt={company.handle}/>:null}
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}