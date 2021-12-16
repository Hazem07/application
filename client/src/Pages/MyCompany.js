import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import Store from "../Component/Store";
import InfoCompany from "../Component/InfoCompany";
import { oneCompany } from "../JS/actions/company";
// import { productlist } from "../JS/actions/product";

const MyCompany = () => {
  const [change, setChange] = useState("info");
  const loadCompany = useSelector((state) => state.contactReducers.isLoad);
  const company = useSelector((state) => state.contactReducers.company);
  const dispatch = useDispatch();

  // const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    dispatch(oneCompany());
  }, []);
  // useEffect(() => {
  //   dispatch(productlist());
  // }, []);
  return (
    <div>
      {loadCompany ? (
        <h3>few seconds</h3>
      ) : company ? (
        <div>
          {/* <button
            className="btno"
            class="btn btn-primary"
            type="submit"
            onClick={() => setChange("info")}
          >
            info
          </button>
          <button
            className="btna"
            class="btn btn-primary"
            type="submit"
            onClick={() => setChange("Store")}
          >
            Store
          </button> */}
          <div>
            {/* {change === "info" ? ( */}
            <InfoCompany company={company} />
            {/* ) : change === "Store" ? ( */}
            {/* <Store company={company} products={products} /> */}
            {/* ) : null} */}
          </div>
        </div>
      ) : null}
    </div>
    // <div>
    //   {loadCompany ? (
    //     <h4>few second</h4>
    //   ) : company ? (
    //     <div>
    //       <Store company={company} />
    //     </div>
    //   ) : null}
    // </div>
  );
};

export default MyCompany;
