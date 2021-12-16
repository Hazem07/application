import React, { useState } from "react";
import "./App.css";

import Home from "./Pages/Home";

import Login from "./Pages/Auth/Login";
import Profile from "./Pages/Profile";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error";
import Navbar from "./Component/Navbar";
import { current } from "./JS/actions/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import PrivateRoute from "./router/PrivateRoute";
import Sign from "./Pages/Auth/Sign";
import Company from "./Pages/Company";

import MyCompany from "./Pages/MyCompany";
import AddProduct from "./Pages/AddProduct";
import Store from "./Component/Store";
import Footer from "./Component/Footer";
import Panier from "./Component/Panier";
import Edit from "./Component/Edit";
import Category from "./Pages/Category";
import Infocards from "./Pages/Infocards";
import Ship from "./Pages/Ship";

function App() {
  // *********************************************************************************
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [dispatch, token]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/Ship" element={<PrivateRoute />}> */}
        <Route path="/Ship" element={<Ship />} />
        {/* </Route> */}
        {/* ****************************************************************************************** */}

        {/* ************************************************************************ */}
        <Route path="/register" element={<Sign />} />
        <Route path="/login" element={<Login />} />

        {/* <PrivateRoute path="/profile" element={<Profile />} /> */}
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/company" element={<PrivateRoute />}>
          <Route path="/company" element={<Company />} />
        </Route>
        <Route path="/mycompany" element={<PrivateRoute />}>
          <Route path="/mycompany" element={<MyCompany />} />
        </Route>
        <Route path="/AddProduct" element={<PrivateRoute />}>
          {/* <Route path={["/addContact", "/edit/:id"]} element={<PrivateRoute />}> */}
          <Route path="/AddProduct" element={<AddProduct />} />
          {/* <Route path={["/addContact", "/edit/:id"]} element={<AddProduct />} /> */}
        </Route>
        {/* <Route path={["/addContact", "/edit/:id"]} component={AddContact} /> */}
        <Route path="/Store" element={<PrivateRoute />}>
          <Route path="/Store" element={<Store />} />
          {/* <Route path="/myproduct" element={<PrivateRoute />}>
            <Route path="/myproduct" element={<Myproduct />} />
          </Route> */}
        </Route>
        <Route path="/edit" element={<PrivateRoute />}>
          <Route path="/edit/:_id" element={<Edit />} />
        </Route>
        {/* <Route path="/info" element={<PrivateRoute />}> */}
        <Route path="/info/:_id" element={<Infocards />} />
        {/* </Route> */}
        {/* <Route path="/category" element={<PrivateRoute />}> */}
        <Route path="/category/:category" element={<Category />} />

        <Route path="/Panier/:_id" element={<Panier />} />
        <Route path="/Panier" element={<Panier />} />

        {/* </Route> */}
        <Route path="/*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
