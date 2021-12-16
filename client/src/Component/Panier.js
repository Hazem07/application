import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  addToCart,
  deletePanier,
  editPanier,
  getCart,
} from "../JS/actions/cartActions";
import { oneProduct } from "../JS/actions/product";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Panier2 from "./Panier2";
import Panier1 from "./Panier1";
import Ship from "../Pages/Ship";

const Panier = () => {
  const params = useParams();
  const { _id } = params;

  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

  const product = useSelector((state) => state.productReducer.product);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(oneProduct(_id));
  // }, []);

  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(cart);
  // const [qtyy, setQtyy] = useState(el.qty);
  // useEffect(() => {
  //   dispatch(getCart(_id));
  // }, []);
  // const { cartItems } = cart;
  // const [qtyy, setQtyy] = useState(cart.qty);
  return (
    <div>
      <p>{_id}</p>
      <p>{qty}</p>
      {}
      {/* {cart ? <p>(hello)</p> : <p>(no one)</p>} */}
      {_id ? (
        <>
          <section className="pt-5 pb-5">
            <div className="container">
              <div className="row w-100">
                <div className="col-lg-12 col-md-12 col-12">
                  <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                  <p className="mb-5 text-center">
                    <Link to="/Panier">
                      {" "}
                      <i className="text-info font-weight-bold">
                        {cart.length}
                      </i>
                    </Link>{" "}
                    items in your cart
                  </p>
                  <table
                    id="shoppingCart"
                    className="table table-condensed table-responsive"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "60%" }}>Product</th>
                        <th style={{ width: "12%" }}>Price</th>
                        <th style={{ width: "10%" }}>Quantity</th>
                        <th style={{ width: "16%" }} />
                      </tr>
                    </thead>

                    <tbody>
                      {cart.map((el) => (
                        <Panier1
                          el={el}
                          product={product}
                          qty={qty}
                          id={_id}
                          key={el._id}
                        />
                        //               <tr>
                        //                 <td data-th="Product">
                        //                   <div className="row">
                        //                     <div className="col-md-3 text-left">
                        //                       <img
                        //                         src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
                        //                         alt=""
                        //                         className="img-fluid d-none d-md-block rounded mb-2 shadow "
                        //                       />
                        //                     </div>

                        //                     <div className="col-md-9 text-left mt-sm-2">
                        //                       <h4>{el.Nom_du_produit}</h4>

                        //                       <p className="font-weight-light">
                        //                         Brand &amp; Name
                        //                       </p>
                        //                     </div>
                        //                   </div>
                        //                 </td>
                        //                 {el.qty >= product.min_order ? (
                        //                   <td data-th="Price">${el.prix_max_order}</td>
                        //                 ) : (
                        //                   <td data-th="Price">${el.prix_min_order}</td>
                        //                 )}
                        //                 <td data-th="Quantity">
                        //                   <input
                        //                     type="number"
                        //                     className="form-control form-control-lg text-center"
                        //                     onChange={(e) =>
                        //                       dispatch(editPanier(el._id, e.target.value))
                        //                     }
                        //                     value={el.qty}
                        //                   />
                        //                 </td>
                        //                 <td data-th>
                        //                   <div className="text-right">
                        //                     {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2"> */}
                        //                     {/* <i className="fas fa-sync" />className="actions" */}
                        //                     {/* Delete */}
                        //                     <HighlightOffIcon
                        //                       onClick={() => dispatch(deletePanier(el._id))}
                        //                     />
                        //                     {/* // onClick={() => handleDelete(el._id)} */}

                        //                     {/* </button> */}
                        //                     {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                        //   <i className="fas fa-trash" />
                        // </button> */}
                        //                   </div>
                        //                 </td>
                        //               </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* : null} */}
                  <div className="float-right text-right">
                    <h4>Subtotal:</h4>
                    <h1>$99.00</h1>
                  </div>
                </div>
              </div>
              <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                  <Button variant="success">
                    <Link
                      to="/Ship"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Order Now
                    </Link>
                  </Button>{" "}
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                  <Button variant="success">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      Shop now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        // **************************************************************************************::::;:

        // *************************************************************************************
        <>
          <section className="pt-5 pb-5">
            <div className="container">
              <div className="row w-100">
                <div className="col-lg-12 col-md-12 col-12">
                  <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                  <p className="mb-5 text-center">
                    <Link to="/Panier">
                      {" "}
                      <i className="text-info font-weight-bold">
                        {cart.length}
                      </i>
                    </Link>{" "}
                    items in your cart
                  </p>

                  <>
                    <table
                      id="shoppingCart"
                      className="table table-condensed table-responsive"
                    >
                      <thead>
                        <tr>
                          <th style={{ width: "60%" }}>Product</th>
                          <th style={{ width: "12%" }}>Price</th>
                          <th style={{ width: "10%" }}>Quantity</th>
                          <th style={{ width: "16%" }} />
                        </tr>
                      </thead>

                      <tbody>
                        {cart.map((el) => (
                          <Panier2 el={el} product={product} key={el._id} />
                          //                 <tr>
                          //                   <td data-th="Product">
                          //                     <div className="row">
                          //                       <div className="col-md-3 text-left">
                          //                         <img
                          //                           src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
                          //                           alt=""
                          //                           className="img-fluid d-none d-md-block rounded mb-2 shadow "
                          //                         />
                          //                       </div>

                          //                       <div className="col-md-9 text-left mt-sm-2">
                          //                         <h4>{el.Nom_du_produit}</h4>

                          //                         <p className="font-weight-light">
                          //                           Brand &amp; Name
                          //                         </p>
                          //                       </div>
                          //                     </div>
                          //                   </td>
                          //                   {el.qty >= product.min_order ? (
                          //                     <td data-th="Price">${el.prix_max_order}</td>
                          //                   ) : (
                          //                     <td data-th="Price">${el.prix_min_order}</td>
                          //                   )}
                          //                   <td data-th="Quantity">
                          //                     <input
                          //                       type="number"
                          //                       className="form-control form-control-lg text-center"
                          //                       // value={el.qty}
                          //                       // onChange={() =>
                          //                       //   dispatch(editPanier(el._id, el.qty))
                          //                       // }
                          //                       // onChange={(e) => setQuantite(e.target.value)}
                          //                       onChange={(e) => {
                          //                         dispatch(editPanier(el._id, e.target.value));
                          //                         set;
                          //                       }}
                          //                       value={el.qty}
                          //                     />
                          //                   </td>
                          //                   <td data-th>
                          //                     <div className="text-right">
                          //                       {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2"> */}
                          //                       {/* <i className="fas fa-sync" />className="actions" */}
                          //                       {/* Delete */}
                          //                       <HighlightOffIcon
                          //                         onClick={() => dispatch(deletePanier(el._id))}
                          //                       />
                          //                       {/* // onClick={() => handleDelete(el._id)} */}

                          //                       {/* </button> */}
                          //                       {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                          //   <i className="fas fa-trash" />
                          // </button> */}
                          //                     </div>
                          //                   </td>
                          //                 </tr>
                        ))}
                      </tbody>
                    </table>
                  </>

                  <div className="float-right text-right">
                    <h4>Subtotal:</h4>
                    <h1>$99.00</h1>
                  </div>
                </div>
              </div>
              <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                  <Button variant="success">
                    <Link
                      to="/Ship"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Order Now
                    </Link>
                  </Button>{" "}
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                  <Button variant="success">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      Shop now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Panier;
