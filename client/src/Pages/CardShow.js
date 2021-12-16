import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardShow = (el) => {
  console.log(el);
  return (
    <div className="card" style={{ width: "14rem", height: "22rem" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLErmBUMY0UwgHouSM4LfUlGu_7KhoE2h4A&usqp=CAU"
        className="card-img-top"
        alt="..."
        style={{ width: "225px", height: "185px" }}
      />
      <div className="card-body">
        <p className="card-text">
          {el.Nom_du_produit}
          <br />
          {el.prix_min_order}Dinars
          <br />
          {el.min_order}piéces
        </p>
        <Button variant="success">
          <Link
            to={`/info/${el._id}`}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Success
          </Link>
        </Button>{" "}
      </div>
    </div>
  );
};

export default CardShow;
