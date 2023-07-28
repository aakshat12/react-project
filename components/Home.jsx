import React from "react";
import Products from "../Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="components/bg.jpg" class="card-img" alt="Background" height="550px" />
        <div className="card-img-overlay">
          <h5 className="card-title display-3">New Season Arrival</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
