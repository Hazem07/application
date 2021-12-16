import React from "react";

const InfoCompany = ({ company }) => {
  return (
    <div>
      <ul>
        <li>{company.Nom}</li>
        <li>{company.description}</li>
        <li>{company.email}</li>
        <li>{company.numero}</li>
        <li>{company.isVerfied ? "verified" : "not verified"}</li>
      </ul>
    </div>
  );
};

export default InfoCompany;
