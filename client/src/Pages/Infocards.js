import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { oneProduct } from "../JS/actions/product";
import "./Infocards.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Table from "react-bootstrap/Table";
import { oneCompanyy } from "../JS/actions/company";

import { Button } from "@mui/material";
import { addToCart } from "../JS/actions/cartActions";
const Infocards = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  // const loadProduct = useSelector((state) => state.productReducer.isLoad);
  const product = useSelector((state) => state.productReducer.product);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const id = product.id_company;
  // console.log(id);
  const company = useSelector((state) => state.contactReducers.company);
  useEffect(() => {
    dispatch(oneProduct(_id));
  }, []);
  useEffect(() => {
    // dispatch(oneCompanyy(id));
    dispatch(oneCompanyy(product && product.id_company));
  }, [product]);
  const [change, setChange] = useState("info");
  const [qty, setQty] = useState();

  // useEffect(() => {

  //     dispatch(addToCart(_id, qty));
  //   }
  // }, [dispatch, _id, qty]);
  const handleAdd = () => {
    if (_id) {
      dispatch(addToCart(_id, qty));
      navigate(`/Panier/${_id}?qty=${qty}`, { replace: true });
    }
  };

  return (
    <div className="super_container">
      <header className="header" style={{ display: "none" }}>
        <div className="header_main">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div className="header_search">
                  <div className="header_search_content">
                    <div className="header_search_form_container">
                      <form action="#" className="header_search_form clearfix">
                        <div className="custom_dropdown">
                          <div className="custom_dropdown_list">
                            {" "}
                            <span className="custom_dropdown_placeholder clc">
                              All Categories
                            </span>{" "}
                            <i className="fas fa-chevron-down" />
                            <ul className="custom_list clc">
                              <li>
                                <a className="clc" href="#">
                                  All Categories
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="single_product">
        <div
          className="container-fluid"
          style={{ backgroundColor: "#fff", padding: "11px" }}
        >
          <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
              {/* <ul className="image_list">
                <li data-image="https://i.imgur.com/21EYMGD.jpg">
                  <img src="https://i.imgur.com/21EYMGD.jpg" alt="" />
                </li>
                <li data-image="https://i.imgur.com/DPWSNWd.jpg">
                  <img src="https://i.imgur.com/DPWSNWd.jpg" alt="" />
                </li>
                <li data-image="https://i.imgur.com/HkEiXfn.jpg">
                  <img src="https://i.imgur.com/HkEiXfn.jpg" alt="" />
                </li>
              </ul> */}
            </div>
            <div className="col-lg-4 order-lg-2 order-1">
              <div
                className="image_selected"
                style={{ marginLeft: "-5em", height: "60%" }}
              >
                <img src="https://i.imgur.com/qEwct2O.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-3">
              <div className="product_description">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">{company && company.numero}</a>
                    </li>

                    <li className="breadcrumb-item active">Product</li>
                    <li className="breadcrumb-item active">
                      {product && product.categories}
                    </li>
                  </ol>
                </nav>

                <div className="col-xs-6">
                  <div>
                    <h5>{product && product.description}</h5>
                    <div>
                      <Table responsive="sm">
                        <thead>
                          <tr>
                            <th>
                              Minimuim order&nbsp;:&nbsp;
                              {product && product.min_order}{" "}
                            </th>
                            <th>
                              Maximuim order&nbsp;:&nbsp;
                              {product && product.max_order}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              Prix Minimuim order&nbsp;:&nbsp;
                              {product && product.prix_min_order}DT
                            </td>
                            <td>
                              Prix Maximuim order&nbsp;:&nbsp;
                              {product && product.prix_max_order}DT
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>{" "}
                  <form>
                    {/* <label>Nom du produit</label> */}
                    <input
                      type="number"
                      placeholder={product && product.min_order}
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      // name="Nom_du_produit"
                      // onChange={handleProduct}
                      // value={produit && produit.Nom_du_produit}
                    />
                  </form>
                  {/* <button type="button" className="btn btn-primary shop-button">
                    Add to Cart
                  </button>{" "} */}
                  {/* <Link to="/Panier"> */}{" "}
                  <button
                    type="button"
                    className="btn btn-success shop-button"
                    onClick={handleAdd}
                  >
                    <AddShoppingCartIcon /> &nbsp;&nbsp;Buy Now
                  </button>
                  {/* </Link> */}
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="row row-underline">
            <div className="col-md-6">
              {" "}
              {/* <span className=" deal-text">Specifications</span>{" "} */}
              <Button
                type="button"
                class="btn btn-outline-success"
                onClick={() => setChange("info")}
                style={{ borderColor: "white" }}
              >
                {/* <button type1="button" class="btn btn-outline-success"> */}
                Product Details
              </Button>
              <button
                class="btn btn-outline-success"
                type="button"
                class="btn btn-outline-success"
                style={{ borderColor: "white" }}
                onClick={() => setChange("Store")}
              >
                Company
              </button>
            </div>

            <div className="col-md-6">
              {" "}
              <a href="#" data-abc="true">
                {" "}
                <span className="ml-auto view-all" />{" "}
              </a>{" "}
            </div>
          </div>
          {change === "info" ? (
            <div className="row">
              <div className="col-md-12">
                <table className="col-md-12">
                  <tbody>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Product Name</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>{product && product.Nom_du_produit}</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Description :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li> {product && product.description} </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Categories :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>{product && product.categories}</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Date d'ajout :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>{product && product.date}</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="row mt-10">
                      {/* ****************************************************************************** */}
                      <td className="col-md-4">
                        <span className="p_specification">Color :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>product &&product.color</li>
                        </ul>
                      </td>
                    </tr>
                    {/* ************************************************************************************** */}
                    {/* **************************************************************************: */}
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">Brand :</span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>product &&product.Brand</li>
                        </ul>
                      </td>
                    </tr>
                    {/* *********************************************************************: */}
                    <tr className="row mt-10">
                      <td className="col-md-4">
                        <span className="p_specification">
                          Place of Origin :
                        </span>{" "}
                      </td>
                      <td className="col-md-8">
                        <ul>
                          <li>product &&product.country</li>
                        </ul>
                      </td>
                    </tr>
                    {/* *****************************************************::; */}
                  </tbody>
                </table>
              </div>
            </div>
          ) : change === "Store" ? (
            <div className="col-md-12">
              <table className="col-md-12">
                <tbody>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Company Name</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>{company.Nom}</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Business Type :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li> company.type </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Country :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>company.country</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Verification :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>company.isVerified</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">
                        Statut juridique :
                      </span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>company.Statut_juridique</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="row mt-10">
                    <td className="col-md-4">
                      <span className="p_specification">Adresse :</span>{" "}
                    </td>
                    <td className="col-md-8">
                      <ul>
                        <li>company.Implantation</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Infocards;
