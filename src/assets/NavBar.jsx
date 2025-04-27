import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const query = useRef(null);
  const navigate = useNavigate();

  const handelSearch = () => {
    const vehical = query.current.value;
    if (vehical != "") {
      query.current.value = "";
      navigate("/search", { state: vehical });
    }
  };

  const handelClick = () => {
    navigate("/");
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" onClick={handelClick}>
          Live Number Plate Detection System
        </span>
        <div className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            ref={query}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handelSearch}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
