import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import "./Register.css";
// import { register as signup } from "../../JS/actions/company";
import { addProduct, editProduct, getProduct } from "../JS/actions/product";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  // import Notification from "../../Component/Notification";

  const [product, setProduct] = useState({
    Nom_du_produit: "",
    categories: "",
    description: "",
    min_order: "",
    max_order: "",
    prix_min_order: "",
    prix_max_order: "",
  });
  // const [edit, setedit] = useState(false);
  const dispatch = useDispatch();
  // const editProductState = useSelector((state) => state.productReducer.product);
  // const params = useParams();
  // useEffect(() => {
  //   if (params.id) {
  //     dispatch(getProduct(params.id));
  //   }
  // }, [params.id, dispatch]);
  // // when the component update
  // useEffect(() => {
  //   if (params.id) {
  //     setedit(true);
  //   } else {
  //     setedit(false);
  //   }
  //   edit
  //     ? setProduct(editProductState)
  //     : setProduct({
  //         Nom_du_produit: "",
  //         categories: "",
  //         description: "",
  //         min_order: "",
  //         max_order: "",
  //         prix_min_order: "",
  //         prix_max_order: "",
  //       });
  // }, [edit, editProductState, params.id]);
  // *********
  const {
    // addProduct,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const errorsR = useSelector((state) => state.userReducer.errors);
  const navigate = useNavigate();
  console.log(navigate);

  const handleProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  console.log(watch());
  const onSubmit = () => {
    dispatch(addProduct(product, navigate));
  };
  // const handlesSubmit = () => {
  //   if (product.email && product.name) {
  //     if (edit) {
  //       dispatch(editProduct(params.id, product, navigate));
  //     } else {
  //       dispatch(addProduct(product, navigate));
  //     }
  //   } else {
  //     alert("email and required");
  //   }
  // };
  return (
    <>
      {/* <h2>{edit ? "EDIT The Contact" : "Add a new Contact"}</h2> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nom du produit</label>
        <input
          type="text"
          placeholder="enter your product name"
          required
          name="Nom_du_produit"
          onChange={handleProduct}
          value={product.Nom_du_produit}
        />
        <label>description</label>
        <input
          type="text"
          required
          placeholder="enter your email"
          name="description"
          onChange={handleProduct}
          value={product.description}
        />
        <label> min order</label>
        <input
          type="number"
          required
          name="min_order"
          onChange={handleProduct}
          value={product.min_order}
        />
        <label> max order </label>
        <input
          type="number"
          name="max_order"
          onChange={handleProduct}
          value={product.max_order}
        />

        <label>px min order</label>
        <input
          type="number"
          required
          name="prix_min_order"
          onChange={handleProduct}
          value={product.prix_min_order}
        />
        <label> px max order </label>
        <input
          type="number"
          name="prix_max_order"
          onChange={handleProduct}
          value={product.prix_max_order}
        />
        <label>categoris</label>
        <input
          type="text"
          required
          placeholder="enter your email"
          name="categories"
          onChange={handleProduct}
          value={product.categories}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default AddProduct;
