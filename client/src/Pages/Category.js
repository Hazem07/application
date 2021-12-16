import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Page0 from "./Page0";

const Category = () => {
  const produits = useSelector((state) => state.productReducer.products);
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <Page0 />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignContent: "center",
          marginTop: "3em",
          marginLeft: "6em",
          marginRight: "6em",
          paddingLeft: "2em",
          justifyContent: "flex-start",
        }}
      >
        {produits &&
          produits
            .filter((el) => el.categories.includes(category))
            .map((el) => (
              <div
                className="card"
                style={{
                  width: "14rem",
                  height: "22rem",
                  marginRight: "2em",
                  marginBottom: "2em",
                }}
              >
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
            ))}
      </div>
    </div>
  );
};
//  /><CardShow el={el} key={el.id} />
export default Category;
