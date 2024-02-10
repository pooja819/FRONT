import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Master(props) {
  const Comps = props.Cmp;
  const Redircet = useNavigate();
  const LogOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    Redircet("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid ">
          <Link className="navbar-brand text-light" href="#">
            Task
          </Link>
          <span className="d-flex justify-content-between">
            <button className="btn btn-danger" onClick={() => LogOut()}>
              Logout
            </button>
          </span>
        </div>
      </nav>
      <div className="container">
        <Comps></Comps>
      </div>
    </>
  );
}

export default Master;
