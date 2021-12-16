import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deletePanier, { editPanier } from "../JS/actions/cartActions";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { oneProduct } from "../JS/actions/product";
const Panier2 = ({ el }) => {
  const [quantite, setQuantite] = useState(el.qty);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.product);

  useEffect(() => {
    dispatch(oneProduct(el._id));
  }, []);
  return (
    // <div>
    //   <section className="pt-5 pb-5">
    //     <div className="container">
    //       <div className="row w-100">
    //         <div className="col-lg-12 col-md-12 col-12">
    //           <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
    //           <p className="mb-5 text-center">
    //             <Link to="/Panier">
    //               {" "}
    //               <i className="text-info font-weight-bold">{cart.length}</i>
    //             </Link>{" "}
    //             items in your cart
    //           </p>

    //           <>
    //             <table
    //               id="shoppingCart"
    //               className="table table-condensed table-responsive"
    //             >
    //               <thead>
    //                 <tr>
    //                   <th style={{ width: "60%" }}>Product</th>
    //                   <th style={{ width: "12%" }}>Price</th>
    //                   <th style={{ width: "10%" }}>Quantity</th>
    //                   <th style={{ width: "16%" }} />
    //                 </tr>
    //               </thead>

    //               <tbody>
    //                 {cart.map((el) => (
    //                   <tr>
    //                     <td data-th="Product">
    //                       <div className="row">
    //                         <div className="col-md-3 text-left">
    //                           <img
    //                             src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
    //                             alt=""
    //                             className="img-fluid d-none d-md-block rounded mb-2 shadow "
    //                           />
    //                         </div>

    //                         <div className="col-md-9 text-left mt-sm-2">
    //                           <h4>{el.Nom_du_produit}</h4>

    //                           <p className="font-weight-light">
    //                             Brand &amp; Name
    //                           </p>
    //                         </div>
    //                       </div>
    //                     </td>
    //                     {qty >= el.min_order ? (
    //                       <td data-th="Price">${el.prix_max_order}</td>
    //                     ) : (
    //                       <td data-th="Price">${el.prix_min_order}</td>
    //                     )}
    //                     <td data-th="Quantity">
    //                       <input
    //                         type="number"
    //                         className="form-control form-control-lg text-center"
    //                         // value={el.qty}
    //                         // onChange={() =>
    //                         //   dispatch(editPanier(el._id, el.qty))
    //                         // }
    //                         value={el.qty}
    //                         onChange={(e) => setQty(e.target.value)}
    //                       />
    //                     </td>
    //                     <td data-th>
    //                       <div className="text-right">
    //                         {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2"> */}
    //                         {/* <i className="fas fa-sync" />className="actions" */}
    //                         {/* Delete */}
    //                         <HighlightOffIcon
    //                           onClick={() => dispatch(deletePanier(el._id))}
    //                         />
    //                         {/* // onClick={() => handleDelete(el._id)} */}

    //                         {/* </button> */}
    //                         {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
    //                               <i className="fas fa-trash" />
    //                             </button> */}
    //                       </div>
    //                     </td>
    //                   </tr>
    //                 ))}
    //               </tbody>
    //             </table>
    //           </>

    //           <div className="float-right text-right">
    //             <h4>Subtotal:</h4>
    //             <h1>$99.00</h1>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="row mt-4 d-flex align-items-center">
    //         <div className="col-sm-6 order-md-2 text-right">
    //           <a
    //             href="catalog.html"
    //             className="btn btn-primary mb-4 btn-lg pl-5 pr-5"
    //           >
    //             Checkout
    //           </a>
    //         </div>
    //         <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
    //           <a href="catalog.html">
    //             <i className="fas fa-arrow-left mr-2" /> Continue Shopping
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <tr>
      <td data-th="Product">
        <div className="row">
          <div className="col-md-3 text-left">
            <img
              src="https://via.placeholder.com/250x250/5fa9f8/ffffff"
              alt=""
              className="img-fluid d-none d-md-block rounded mb-2 shadow "
            />
          </div>

          <div className="col-md-9 text-left mt-sm-2">
            <h4>{el.Nom_du_produit}</h4>

            <p className="font-weight-light">Brand &amp; Name</p>
          </div>
        </div>
      </td>

      {el.qty >= el.min_order ? (
        <td data-th="Price">${el.prix_max_order}</td>
      ) : (
        <td data-th="Price">${el.prix_min_order}</td>
      )}
      <td data-th="Quantity">
        <input
          type="number"
          className="form-control form-control-lg text-center"
          // value={el.qty}
          // onChange={() =>
          //   dispatch(editPanier(el._id, el.qty))
          // }
          // onChange={(e) => setQuantite(e.target.value)}
          onChange={(e) => {
            dispatch(editPanier(el._id, e.target.value));
            setQuantite(e.target.value);

            // setQuantite(el.qty);
          }}
          value={quantite}
        />
      </td>
      <td data-th>
        <div className="text-right">
          {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2"> */}
          {/* <i className="fas fa-sync" />className="actions" */}
          {/* Delete */}
          <HighlightOffIcon onClick={() => dispatch(deletePanier(el._id))} />
          {/* // onClick={() => handleDelete(el._id)} */}

          {/* </button> */}
          {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
            <i className="fas fa-trash" />
          </button> */}
        </div>
      </td>
    </tr>
  );
};

export default Panier2;
