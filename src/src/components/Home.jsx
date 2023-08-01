import React from "react";
import Products from "../Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0 ">
        <img src="/assests/i1.jpg" class="card-img " alt="Background" height="550px "  />
        <div className="card-img-overlay  d-flex flex-column justify-content-center ">
          <div className="container">
          <h5 className="card-title display-3 fw-bolder mb-0 ">New Season Arrival</h5>
          </div>
          
          <p className="card-text  lead fs-2">
            CHECK OUT ALL THE TREND
          </p>
          
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
