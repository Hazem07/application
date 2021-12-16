import axios from "axios";
import { Navigate } from "react-router-dom";
import {
  CARD_ADD_ITEM,
  DELETE_PANIER,
  EDIT_PANIER,
} from "../constants/cartConstant";
import { FAIL_PRODUCT, LOAD_PRODUCT } from "../constants/product";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/product/${id}`);
  // const {
  //   cart: { cartItems },
  // } = getState();
  // localStorage.setItem("car")

  dispatch({
    type: CARD_ADD_ITEM,
    payload: {
      Nom_du_produit: data.product.Nom_du_produit,
      prix_min_order: data.product.prix_min_order,
      prix_max_order: data.product.prix_max_order,
      description: data.product.description,
      _id: data.product._id,
      product: data.product._id,
      min_order: data.product.min_order,
      max_order: data.product.max_order,
      id_company: data.product.id_company,
      qty,
    },
  });
  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const deletePanier = (id) => {
  return {
    type: DELETE_PANIER,
    payload: id,
  };
};
export default deletePanier;
export const editPanier = (id, qty) => {
  return {
    type: EDIT_PANIER,
    payload: { id, qty },
  };
};
