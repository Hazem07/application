import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../JS/actions/product";
import "./Product.css";
const ProductCard = ({ prod }) => {
  console.log({ prod });
  const dispatch = useDispatch();
  const handleDelete = () => {
    const result = window.confirm("Are you sure to delete that?");
    if (result) {
      dispatch(deleteProduct(prod._id));
    }
  };

  return (
    // <div>
    //   <section className="section-products">
    //     <div className="container">
    //       <div className="row">

    //         <div className="col-md-6 col-lg-4 col-xl-3">
    //           <div id="product-1" className="single-product">
    //             <div className="part-1">
    //               <ul>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fas fa-shopping-cart" />
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fas fa-heart" />
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fas fa-plus" />
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#">
    //                     <i className="fas fa-expand" />
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //             <div className="part-2">
    //               <h3 className="product-title">{prod.description}</h3>
    //               <h4 className="product-old-price">$79.99</h4>
    //               <h4 className="product-price">$49.99</h4>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-10">
          <div className="row p-2 bg-white border rounded">
            <div className="col-md-3 mt-1">
              <img
                className="img-fluid img-responsive rounded product-image"
                src="https://i.imgur.com/QpjAiHq.jpg"
              />
            </div>
            <div className="col-md-6 mt-1">
              <h5>{prod.Nom_du_produit}</h5>
              <div className="d-flex flex-row">
                <div className="ratings mr-2">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <p>Catégories&nbsp;:</p>
                &nbsp;<span>{prod.categories}</span>
              </div>
              <div className="mt-1 mb-1 spec-1">
                <p>Minimuim order</p>
                <span className="dot" />
                <span>{prod.min_order}</span>

                <p>Maximuim order</p>

                <span className="dot" />
                <span>
                  {prod.max_order} <br />
                </span>
                {/* <span className="dot" /> */}
                {/* <span>
                  Best finish
                  <br />
                </span> */}
              </div>
              {/* <div className="mt-1 mb-1 spec-1">
                <span>Unique design</span>
                <span className="dot" />
                <span>For men</span>
                <span className="dot" />
                <span>
                  Casual
                  <br />
                </span>
              </div> */}
              <p className="text-justify text-truncate para mb-0">
                {prod.description}
                <br />
                <br />
              </p>
            </div>
            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
              <div className="d-flex flex-row align-items-center">
                <h4 className="mr-1">{prod.prix_min_order}DT</h4>
                {/* <span className="strike-text">$20.99</span> */}
              </div>
              <div className="d-flex flex-row align-items-center">
                <h4 className="mr-1">{prod.prix_max_order}DT</h4>
              </div>
              {/* <h6 className="text-success">Free shipping</h6> */}
              <div className="d-flex flex-column mt-4">
                <Link to={`/edit/${prod._id}`}>
                  <button className="btn btn-primary btn-sm" type="button">
                    Edit
                  </button>
                </Link>

                <button
                  className="btn btn btn-outline-danger btn-sm mt-2"
                  type="button"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
