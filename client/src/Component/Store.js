import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { oneCompany } from "../JS/actions/company";
import { productlist } from "../JS/actions/product";
import ProductCard from "./ProductCard";
// import ProductCard from "./ProductCard";

const Boutique = ({}) => {
  const products = useSelector((state) => state.productReducer.products);
  const company = useSelector((state) => state.contactReducers.company);
  useEffect(() => {
    dispatch(oneCompany());
  }, []);
  const loadProduct = useSelector((state) => state.productReducer.isLoad);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productlist());
  }, []);
  return (
    <container>
      {/* <div>{products._id}</div> */}

      <div>
        <div>
          {loadProduct ? (
            <h3>few seconds</h3>
          ) : company ? (
            <div>
              {company.isVerfied ? (
                <div>
                  <Link to="/AddProduct">
                    <button>addProduct</button>
                  </Link>
                  {/* {products && */}
                  {/* {products.map((el) => (
                    <div>{el.description}</div>
                  ))} ***********/}
                  <div>
                    {products.map((el) => (
                      <ProductCard prod={el} key={el.id} />
                    ))}
                  </div>
                  {/* {products.map((el) => (
                    <div>{el.description}</div>
                  ))} */}
                </div>
              ) : (
                "not verified"
              )}
            </div>
          ) : null}
        </div>
      </div>
    </container>
  );
};
export default Boutique;
