import {
  CARD_ADD_ITEM,
  DELETE_PANIER,
  EDIT_PANIER,
} from "../constants/cartConstant";
const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cart.find((x) => x._id == item._id);

      if (existItem) {
        let carts = state.cart.map((x) => (x === existItem ? item : x));
        localStorage.setItem("cartItems", JSON.stringify(carts));

        return {
          ...state,
          cart: state.cart.map((x) => (x === existItem ? item : x)),
        };
      } else {
        let carts = [...state.cart, item];
        localStorage.setItem("cartItems", JSON.stringify(carts));

        return { ...state, cart: [...state.cart, item] };
      }
    case DELETE_PANIER:
      let carts = state.cart.filter((x) => x._id != action.payload);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cart.filter((x) => x._id != action.payload))
      );
      return {
        ...state,
        cart: carts,
      };
    case EDIT_PANIER:
      let c = state.cart.map((x) =>
        x._id == action.payload.id ? { ...x, qty: action.payload.qty } : x
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(
          state.cart.map((x) =>
            x._id == action.payload.id ? { ...x, qty: action.payload.qty } : x
          )
        )
      );
      return {
        ...state,
        cart: c,
      };
    default:
      return state;
  }
};
export default cartReducer;
