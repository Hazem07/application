import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearErrors } from "../JS/actions/user";
import "react-toastify/dist/ReactToastify.css";

const Notification = ({ error }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    toast(error.msg);
    setTimeout(() => {
      setshow(false);
      dispatch(clearErrors());
    }, 10000);
  }, [show, dispatch]);
  return (
    <div>
      {show && (
        <ToastContainer
          position="bottom-right"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
    </div>
  );
};
export default Notification;
