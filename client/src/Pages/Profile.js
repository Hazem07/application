import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Company from "./Company";
import Store from "../Component/Store";

import "./Profile.css";
import { current, editContact, oneUser } from "../JS/actions/user";

const Profile = () => {
  // console.log("test");
  const [usere, setUsere] = useState({
    // Gender: "",
    // Country: "",
    Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    // Company_Name: "",
    Number: "",
    // Role: "",
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const loadUser = useSelector((state) => state.userReducer.isLoad);
  const company = useSelector((state) => state.contactReducers.company);

  const { _id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(current());
  }, []);
  useEffect(() => {
    setUsere(user);
  }, []);
  const handleUser = (e) => {
    setUsere({ ...usere, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editContact(user._id, usere, navigate));
  };
  return (
    // <div>
    //   {loadUser ? (
    //     <h3>few seconds</h3>
    //   ) : user ? (
    //     <div>
    //       <h3>{user.Name}</h3>
    //       {user.hasCompany ? (
    //         <Link to="/MyCompany">
    //           <button>My Company</button>
    //         </Link>
    //       ) : (
    //         <div>
    //           {""}

    //           <Link to="/Company">
    //             <button>Create Company</button>
    //           </Link>
    //         </div>
    //       )}
    //     </div>
    //   ) : null}
    // </div>
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      {loadUser ? (
        <h4>few seconds</h4>
      ) : user ? (
        <div className="container rounded bg-white mt-5 mb-5 profile">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span className="font-weight-bold">{user.Name}</span>
                <span className="text-black-50">{user.Email}</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="first name"
                      Value={user.Name}
                      onChange={handleUser}
                      name="Name"
                      // onInput={handleUser}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      Value={user.Last_Name}
                      placeholder="surname"
                      onChange={handleUser}
                      // onInput={handleUser}
                      name="Last_Name"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      Value={user.Number}
                      onChange={handleUser}
                      name="Number"
                      // onInput={handleUser}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 1"
                      defaultValue
                      // onInput={handleUser}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      defaultValue
                      // onInput={handleUser}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Postcode</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      defaultValue
                      // onInput={handleUser}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      defaultValue
                      // onInput={handleUser}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Area</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      defaultValue
                      // onInput={handleUser}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                      Value={user.Email}
                      onChange={handleUser}
                      name="Email"
                      // onInput={handleUser}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Profession</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="education"
                      defaultValue
                      // onInput={handleUser}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                      defaultValue
                      // onInput={handleUser}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State/Region</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue
                      placeholder="state"
                      // onInput={handleUser}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                    // onClick={handleSumbit}
                    onClick={onSubmit}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 py-5">
                {/* <div className="d-flex justify-content-between align-items-center experience"> */}
                {/* <span>Edit Experience</span> */}
                {/* <button> */}
                {/* <span className="border px-3 p-1 add-experience"> */}
                {/* <i className="fa fa-plus" /> */}
                {/* &nbsp;Experience */}
                {/* </span> */}
                {/* </button> */}
                {/* </div> */}
                {/* <br /> */}
                <div className="mt-5 text-center">
                  {user.hasCompany ? (
                    <>
                      {" "}
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Link to="/MyCompany">
                        <button
                          className="btn btn-primary profile-button"
                          type="button"
                        >
                          My Company
                        </button>
                        <br />
                      </Link>
                      <br />
                      <Link to="/Store">
                        <button
                          className="btn btn-primary profile-button"
                          style={{ "margin-top": "5em" }}
                        >
                          My Store
                        </button>
                      </Link>
                    </>
                  ) : (
                    <Link to="/Company">
                      <button
                        className="btn btn-primary profile-button"
                        type="button"
                      >
                        Create Company
                      </button>
                    </Link>
                  )}
                </div>

                {/* <div className="mt-5 text-center">
                  <Link to="/Store">
                    <button
                      className="btn btn-primary profile-button"
                      type="button"
                    >
                      My Store
                    </button>
                  </Link>
                </div> */}
                {/* <div className="col-md-12">
                <label className="labels">Experience in Designing</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="experience"
                  defaultValue
                />
              </div>{" "}
              <br />
              <div className="col-md-12">
                <label className="labels">Additional Details</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="additional details"
                  defaultValue
                />
                
              // </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
// );
// };
// };
export default Profile;
