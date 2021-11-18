import React from "react";
import { NavLink } from "react-router-dom";

function Pages() {
  return (
    <section className="page page">
      <h2 className="page__title">Page</h2>
      <div className="page__breadcrumb">
        <NavLink to="/" className="page__breadcrumb__link">
          Home
        </NavLink>
        <p>Page</p>
      </div>
      <div className="container"></div>
    </section>
  );
}

export default Pages;
