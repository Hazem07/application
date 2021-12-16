import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productHome } from "../JS/actions/product";
import Page0 from "./Page0";
import Page1 from "./Page1";

const Home = () => {
  const loadProduct = useSelector((state) => state.productReducer.isLoad);
  const product = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productHome());
  }, []);
  return (
    <div>
      {loadProduct ? (
        <h3>few seconds</h3>
      ) : product ? (
        <div>
          <Page1 product={product} />
          {/* {product.map((el) => ( */}
          {/* <Page1 prod={el} key={el.id} /> */}
          {/* ))} */}
          {/* {product.map((el) => (
            <div>{el.description}</div>
          ))} */}
        </div>
      ) : null}
    </div>
  );
};

export default Home;
