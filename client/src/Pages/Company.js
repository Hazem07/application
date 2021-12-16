import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
// import "./Register.css";
// import { register as signup } from "../../JS/actions/company";
import { register as signup } from "../JS/actions/company";
import { useForm } from "react-hook-form";
// import Notification from "../../Component/Notification";
const Company = () => {
  const [company, setCompany] = useState({
    // Gender: "",
    // Country: "",
    // Name: "",
    // Last_Name: "",
    // Email: "",
    // Password: "",
    // Company_Name: "",
    // Number: "",
    // Role: "",
    description: "",
    Nom: "",
    numero: "",
    email: "",
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const errorsR = useSelector((state) => state.userReducer.errors);
  const navigate = useNavigate();
  console.log(navigate);
  const dispatch = useDispatch();
  const handleCompany = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };
  console.log(watch());
  const onSubmit = () => {
    dispatch(signup(company, navigate));
    //   setUser({
    //     Country: "",
    //     Name: "",
    //     Last_Name: "",
    //     Email: "",
    //     Password: "",
    //     Company_Name: "",
    //     Number: "",
    //     Role: "",
    //   });
  };

  return (
    <>
      {/* {errors && errors.map((el) => <Notification error={el} />)} */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>description</label>
        <input
          type="text"
          placeholder="enter your name"
          required
          name="description"
          onChange={handleCompany}
          value={company.description}
        />
        <label>email</label>
        <input
          type="email"
          required
          placeholder="enter your email"
          name="email"
          onChange={handleCompany}
          value={company.email}
        />
        <label>Nom</label>
        <input
          type="text"
          placeholder="enter your name"
          required
          name="Nom"
          onChange={handleCompany}
          value={company.Nom}
        />
        <label>numero </label>
        <input
          type="number"
          placeholder="enter your phone number"
          name="numero"
          onChange={handleCompany}
          value={company.numero}
        />
        <input type="submit" />
      </form>
    </>
  );
};
// onClick={handleRegister}
export default Company;
