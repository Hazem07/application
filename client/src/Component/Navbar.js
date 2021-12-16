import React, { useState } from "react";
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import a1 from "../images/a1.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/actions/user";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dropdown, DropdownButton, NavDropdown } from "react-bootstrap";
import { Container, IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { FiShoppingCart } from "react-icons/bs";
const Navbar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const cart = useSelector((state) => state.cartReducer.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  return (
    // <div>
    //   <button>
    //     <Link to="/">Home</Link>
    //   </button>
    //   {isAuth ? (
    //     <button onClick={handleLogout}>logout</button>
    //   ) : (
    //     <div>
    //       {""}
    //       <button>
    //         <Link to="/login">Login</Link>
    //       </button>
    //       <button>
    //         <Link to="/register">Register</Link>
    //       </button>
    //     </div>
    //   )}
    // </div>
    <Container>
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="/">
          {/* style={{ marginLeft: "3em" }} */}
          <img
            src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
            height={30}
            alt="mdb logo"
          />
        </a>
        {/* Collapse button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav11"
          aria-controls="basicExampleNav11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Breadcrumbs */}
        {/* <ol className="breadcrumb" style={{ marginLeft: "20em" }}>
        <li className="breadcrumb-item">
          <a className="waves-effect" href="#!">
            Home
          </a>
        </li>
        <li className="breadcrumb-item">
          <a className="waves-effect" href="#!">
            Templates
          </a>
        </li>
        <li className="breadcrumb-item active">
          <a className="waves-effect" href="#!">
            E-commerce
          </a>
        </li>
      </ol> */}
        {/* Breadcrumbs */}
        {/* Links */}
        <div
          className="collapse navbar-collapse"
          id="basicExampleNav11"
          style={{ flexDirection: "column-reverse" }}
        >
          {/* Right */}
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
            <a href="#!" className="nav-link navbar-link-2 waves-effect">
              <span className="badge badge-pill red">1</span>
              <i className="fas fa-shopping-cart pl-0" />
            </a>
          </li> */}
            {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle waves-effect"
              id="navbarDropdownMenuLink3"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <i className="united kingdom flag m-0" />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#!">
                Action
              </a>
              <a className="dropdown-item" href="#!">
                Another action
              </a>
              <a className="dropdown-item" href="#!">
                Something else here
              </a>
            </div>
          </li> */}
            <li className="nav-item" style={{ paddingLeft: "2em" }}>
              <Link to="/" className="nav-link waves-effect">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link waves-effect">
                Templates
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link waves-effect">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link waves-effect">
                E-commerce
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#!" className="nav-link waves-effect">
                Contact
              </Link>
            </li>

            {isAuth ? (
              <li>
                <div style={{ marginLeft: "10em" }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle style={{ fontSize: "2rem" }} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem>
                      <Link
                        to="/profile"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>My account</MenuItem>
                  </Menu>
                  <Link to="/Panier">
                    <AddShoppingCartIcon />
                  </Link>
                  {/* <i class="fas fa-shopping-cart"></i */}
                </div>
              </li>
            ) : (
              // <button onClick={handleLogout}>logout</button>
              <div style={{ display: "flex", marginLeft: "10em" }}>
                <Link to="/Panier">
                  <AddShoppingCartIcon />
                </Link>
                <li className="nav-item">
                  <Link to="/login" className="nav-link waves-effect">
                    Sign in
                  </Link>
                  &nbsp; &nbsp;
                </li>
                <li className="nav-item pl-2 mb-2 mb-md-0">
                  <Link
                    to="/register"
                    type="button"
                    className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light"
                  >
                    Sign up
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </Container>
  );
};
export default Navbar;
