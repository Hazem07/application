import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editProduct, oneProduct } from "../JS/actions/product";

const Edit = () => {
  const [produit, setProduit] = useState({
    Nom_du_produit: "",
    categories: "",
    description: "",
    min_order: "",
    max_order: "",
    prix_min_order: "",
    prix_max_order: "",
  });
  const { _id } = useParams();
  const loadProduct = useSelector((state) => state.productReducer.isLoad);
  const product = useSelector((state) => state.productReducer.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(oneProduct(_id));
  }, []);
  useEffect(() => {
    setProduit(product);
  }, [product]);
  const handleProduct = (e) => {
    setProduit({ ...produit, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct(_id, produit, navigate));
  };
  return (
    // <div>
    //   {/*  */}
    // </div>
    // {loadProduct ? <h4>few seconds</h4> : product ?
    <div>
      <>
        {/* <h2>{edit ? "EDIT The Contact" : "Add a new Contact"}</h2> */}
        <form>
          <label>Nom du produit</label>
          <input
            type="text"
            placeholder="enter your product name"
            required
            name="Nom_du_produit"
            onChange={handleProduct}
            value={produit && produit.Nom_du_produit}
          />
          <label>description</label>
          <input
            type="text"
            required
            placeholder="enter your email"
            name="description"
            onChange={handleProduct}
            value={produit && produit.description}
          />
          <label> min order</label>
          <input
            type="number"
            required
            name="min_order"
            onChange={handleProduct}
            value={produit && produit.min_order}
          />
          <label> max order </label>
          <input
            type="number"
            name="max_order"
            onChange={handleProduct}
            value={produit && produit.max_order}
          />

          <label>px min order</label>
          <input
            type="number"
            required
            name="prix_min_order"
            onChange={handleProduct}
            value={produit && produit.prix_min_order}
          />
          <label> px max order </label>
          <input
            type="number"
            name="prix_max_order"
            onChange={handleProduct}
            value={produit && produit.prix_max_order}
          />
          <label>categoris</label>
          <input
            type="text"
            required
            placeholder="enter your email"
            name="categories"
            onChange={handleProduct}
            value={produit && produit.categories}
          />
          <input type="submit" onClick={onSubmit} />
        </form>
      </>
    </div>
    // : null}
  );
};

export default Edit;
