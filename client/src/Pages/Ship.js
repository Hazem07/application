import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Paypal from "../Component/Paypal";
import { addCommande } from "../JS/actions/achat";
// import "./Ship.css";
const Ship = () => {
  const [achat, setAchat] = useState({
    Name: "",
    lastname: "",
    email: "",
    zipcode: "",
    adress1: "",
    adress2: "",
    state: "",
    country: "",
    number: "",
  });
  const dispatch = useDispatch();
  const {
    // addProduct,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const errorsR = useSelector((state) => state.achatReducer.errors);
  const handleProduct = (e) => {
    setAchat({ ...achat, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    dispatch(addCommande(achat));
  };
  const product = useSelector((state) => state.productReducer.product);
  const cart = useSelector((state) => state.cartReducer.cart);
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
        <p className="lead">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
      </div>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            {cart.map((el) => (
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">{el.Nom_du_produit}</h6>
                  <small className="text-muted">{el.description}</small>
                </div>
                <span className="text-muted">
                  {/*  */}
                  {el.qty >= el.min_order ? (
                    <td data-th="Price">${el.prix_max_order * el.qty}</td>
                  ) : (
                    <td data-th="Price">${el.prix_min_order * el.qty}</td>
                  )}
                </span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
          {/* <form className="card p-2"></form> */}
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          {/* ********************************************************************************************************** */}
          <form
            className="needs-validation"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="Name"
                  // placeholder
                  value={achat.Name}
                  required
                  onChange={handleProduct}
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  // placeholder
                  name="lastname"
                  value={achat.lastname}
                  required
                  onChange={handleProduct}
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="username">Email</label>
              <div className="input-group">
                {/* <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div> */}
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  // placeholder="Username"
                  name="email"
                  required
                  value={achat.email}
                  onChange={handleProduct}
                />
                <div className="invalid-feedback" style={{ width: "100%" }}>
                  Your email is required.
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                Number <span className="text-muted"></span>
              </label>
              <input
                value={achat.number}
                onChange={handleProduct}
                type="number"
                className="form-control"
                id="email"
                placeholder="+338745698"
                required
                name="number"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required
                value={achat.adress1}
                onChange={handleProduct}
                name="adress1"
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address2">
                Address 2 <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Apartment or suite"
                onChange={handleProduct}
                value={achat.adreess2}
                name="adress2"
              />
            </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <input
                  className="custom-select d-block w-100"
                  id="country"
                  required
                  value={achat.country}
                  onChange={handleProduct}
                  name="country"
                >
                  {/* <option value>Choose...</option>
                  <option>United States</option> */}
                </input>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <input
                  className="custom-select d-block w-100"
                  id="state"
                  required
                  onChange={handleProduct}
                  value={achat.state}
                  name="state"
                >
                  {/* <option value>Choose...</option>
                  <option>California</option> */}
                </input>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder
                  required
                  value={achat.zipcode}
                  onChange={handleProduct}
                  name="zipcode"
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>
            <hr className="mb-4" />
            <div
              className="custom-control custom-checkbox"
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginLefteft: "-7em",
              }}
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id="same-address"
              />
              <label className="custom-control-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <div
              className="custom-control custom-checkbox"
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginLefteft: "-5.78em",
              }}
            >
              <input
                type="checkbox"
                className="custom-control-input"
                id="save-info"
              />
              <label className="custom-control-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>
            <hr className="mb-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="d-block my-3">
              {/* <div className="custom-control custom-radio"> */}
              {/* <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  defaultChecked
                  required
                /> */}
              {/* <label className="custom-control-label" htmlFor="credit">
                  Credit card
                </label> */}
              {/* </div> */}
              {/* <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                /> */}
              {/* <label className="custom-control-label" htmlFor="debit">
                  Debit card
                </label> */}
              {/* </div> */}
              {/* <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div> */}
              {/* <div className="row">
              <div className="col-md-6 mb-3">
                {/* <label htmlFor="cc-name">Name on card</label> */}
              {/* <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder
                  required
                /> */}
              {/* <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder
                  required
                /> */}
              {/* <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div> */}
              {/* </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder
                  required
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder
                  required
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div> */}
              <container>{/* <Paypal /> */}</container>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Continue to checkout
            </button>
          </form>
          {/* ******************************************************************************************************************* */}
        </div>
      </div>
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2017-2019 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Support</a>
          </li>
        </ul>
      </footer>
    </div>

    // <div>
    //   <nav className="bg-white">
    //     <div className="d-flex align-items-center">
    //       <div className="logo">
    //         {" "}
    //         <a href="#" className="text-uppercase">
    //           shop
    //         </a>{" "}
    //       </div>
    //       <div className="ml-auto">
    //         {" "}
    //         <a href="#" className="text-uppercase">
    //           Back to shopping
    //         </a>{" "}
    //       </div>
    //     </div>
    //   </nav>
    //   {/* <header>
    //     <div className="d-flex justify-content-center align-items-center pb-3">
    //       <div className="px-sm-5 px-2 active">
    //         SHOPPING CART <span className="fas fa-check" />{" "}
    //       </div>
    //       <div className="px-sm-5 px-2">CHECKOUT</div>
    //       <div className="px-sm-5 px-2">FINISH</div>
    //     </div>
    //     <div className="progress">
    //       <div
    //         className="progress-bar bg-success"
    //         role="progressbar"
    //         aria-valuenow={25}
    //         aria-valuemin={0}
    //         aria-valuemax={100}
    //       />
    //     </div>
    //   </header> */}
    //   <div className="wrapper">
    //     <div className="h5 large">Billing Address</div>
    //     <div className="row">
    //       <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1">
    //         <div className="mobile h5">Billing Address</div>
    //         <div id="details" className="bg-white rounded pb-5">
    //           <form>
    //             <div className="form-group">
    //               {" "}
    //               <label className="text-muted">Name</label>{" "}
    //               <input
    //                 type="text"
    //                 defaultValue="David "
    //                 className="form-control"
    //               />{" "}
    //             </div>
    //             <div className="form-group">
    //               {" "}
    //               <label className="text-muted">Lastname</label>{" "}
    //               <input
    //                 type="text"
    //                 defaultValue="David Smith"
    //                 className="form-control"
    //               />{" "}
    //             </div>
    //             <div className="form-group">
    //               {" "}
    //               <label className="text-muted">Email</label>
    //               <div className="d-flex jusify-content-start align-items-center rounded p-2">
    //                 {" "}
    //                 <input
    //                   type="email"
    //                   defaultValue="david.343@gmail.com"
    //                 />{" "}
    //                 <span className="fas fa-check text-success pr-sm-2 pr-0" />{" "}
    //               </div>
    //             </div>
    //             <div className="row">
    //               <div className="col-lg-6">
    //                 <div className="form-group">
    //                   {" "}
    //                   <label>City</label>
    //                   <div className="d-flex jusify-content-start align-items-center rounded p-2">
    //                     {" "}
    //                     <input type="text" defaultValue="Houston" />{" "}
    //                     <span className="fas fa-check text-success pr-2" />{" "}
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-lg-6">
    //                 <div className="form-group">
    //                   {" "}
    //                   <label>Zip code</label>
    //                   <div className="d-flex jusify-content-start align-items-center rounded p-2">
    //                     {" "}
    //                     <input type="text" defaultValue={77001} />{" "}
    //                     <span className="fas fa-check text-success pr-2" />{" "}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="row">
    //               <div className="col-lg-6">
    //                 <div className="form-group">
    //                   {" "}
    //                   <label>Address</label>
    //                   <div className="d-flex jusify-content-start align-items-center rounded p-2">
    //                     {" "}
    //                     <input
    //                       type="text"
    //                       defaultValue="542 W.14th Street"
    //                     />{" "}
    //                     <span className="fas fa-check text-success pr-2" />{" "}
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="col-lg-6">
    //                 <div className="form-group">
    //                   {" "}
    //                   <label>State</label>
    //                   <div className="d-flex jusify-content-start align-items-center rounded p-2">
    //                     {" "}
    //                     <input type="text" defaultValue="NY" />{" "}
    //                     <span className="fas fa-check text-success pr-2" />{" "}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>{" "}
    //             <label>Country</label>{" "}
    //             <select name="country" id="country">
    //               <option value="usa">USA</option>
    //               <option value="ind">INDIA</option>
    //             </select>
    //           </form>
    //         </div>{" "}
    //         <input type="checkbox" defaultChecked />{" "}
    //         <label>Shipping address is same as billing</label>
    //         <div id="address" className="bg-light rounded mt-3">
    //           <div className="h5 font-weight-bold text-primary">
    //             {" "}
    //             Shopping Address{" "}
    //           </div>
    //           <div className="d-md-flex justify-content-md-start align-items-md-center pt-3">
    //             <div className="mr-auto">
    //               {" "}
    //               <b>Home Address</b>
    //               <p className="text-justify text-muted">542 W.14th Street</p>
    //               <p className="text-uppercase text-muted">NY</p>
    //             </div>
    //             <div className="rounded py-2 px-3" id="register">
    //               {" "}
    //               <a href="#">
    //                 {" "}
    //                 <b>Register Now</b>{" "}
    //               </a>
    //               <p className="text-muted">
    //                 Create account to have multiple address saved
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1 pt-lg-0 pt-3">
    //         <div id="cart" className="bg-white rounded">
    //           <div className="d-flex justify-content-between align-items-center">
    //             <div className="h6">Cart Summary</div>
    //             <div className="h6">
    //               {" "}
    //               <a href="#">Edit</a>{" "}
    //             </div>
    //           </div>
    //           <div className="d-flex jusitfy-content-between align-items-center pt-3 pb-2 border-bottom">
    //             <div className="item pr-2">
    //               {" "}
    //               <img
    //                 src="https://images.unsplash.com/photo-1569488859134-24b2d490f23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    //                 alt=""
    //                 width={80}
    //                 height={80}
    //               />
    //               <div className="number">2</div>
    //             </div>
    //             <div className="d-flex flex-column px-3">
    //               {" "}
    //               <b className="h5">BattleCreek Coffee</b>{" "}
    //               <a href="#" className="h5 text-primary">
    //                 C-770
    //               </a>{" "}
    //             </div>
    //             <div className="ml-auto">
    //               {" "}
    //               <b className="h5">$80.9</b>{" "}
    //             </div>
    //           </div>
    //           <div className="my-3">
    //             {" "}
    //             <input
    //               type="text"
    //               className="w-100 form-control text-center"
    //               placeholder="Gift Card or Promo Card"
    //             />{" "}
    //           </div>
    //           <div className="d-flex align-items-center">
    //             <div className="display-5">Subtotal</div>
    //             <div className="ml-auto font-weight-bold">$80.9</div>
    //           </div>
    //           <div className="d-flex align-items-center py-2 border-bottom">
    //             <div className="display-5">Shipping</div>
    //             <div className="ml-auto font-weight-bold">$12.9</div>
    //           </div>
    //           <div className="d-flex align-items-center py-2">
    //             <div className="display-5">Total</div>
    //             <div className="ml-auto d-flex">
    //               <div className="text-primary text-uppercase px-3">usd</div>
    //               <div className="font-weight-bold">$92.98</div>
    //             </div>
    //           </div>
    //         </div>
    //         <p className="text-muted">Need help with an order?</p>
    //         <p className="text-muted">
    //           <a href="#" className="text-danger">
    //             Hotline:
    //           </a>
    //           +314440160 (International)
    //         </p>
    //         <div className="h4 pt-3">
    //           {" "}
    //           <span className="fas fa-shield-alt text-primary pr-2" /> Security
    //           of your shopping
    //         </div>
    //         <div id="summary" className="bg-white rounded py-2 my-4">
    //           <div className="table-responsive">
    //             <table className="table table-borderless w-75">
    //               <tbody>
    //                 <tr className="text-muted">
    //                   <td>Battlecreek Coffee</td>
    //                   <td>:</td>
    //                   <td>$80.9</td>
    //                 </tr>
    //                 <tr className="text-muted">
    //                   <td>Code-770</td>
    //                   <td>:</td>
    //                   <td>770</td>
    //                 </tr>
    //                 <tr className="text-muted">
    //                   <td>Quantity</td>
    //                   <td>:</td>
    //                   <td>
    //                     <div className="d-flex align-items-center">
    //                       {" "}
    //                       <span className="fas fa-minus btn text-muted" />{" "}
    //                       <span>2</span>{" "}
    //                       <span className="fas fa-plus btn text-muted" />{" "}
    //                     </div>
    //                   </td>
    //                 </tr>
    //               </tbody>
    //             </table>
    //           </div>
    //           <div className="border-top py-2 d-flex align-items-center ml-2 font-weight-bold">
    //             <div>Total</div>
    //             <div className="ml-auto text-primary">USD</div>
    //             <div className="px-2">$92.98</div>
    //           </div>
    //         </div>
    //         <div className="row pt-lg-3 pt-2 buttons mb-sm-0 mb-2">
    //           <div className="col-md-6">
    //             <div className="btn text-uppercase">back to shopping</div>
    //           </div>
    //           <div className="col-md-6 pt-md-0 pt-3">
    //             <div className="btn text-white ml-auto">
    //               {" "}
    //               <span className="fas fa-lock" /> Continue to Shopping{" "}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="text-muted pt-3" id="mobile">
    //           {" "}
    //           <span className="fas fa-lock" /> Your information is save{" "}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="text-muted">
    //       {" "}
    //       <span className="fas fa-lock" /> Your information is save{" "}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Ship;
