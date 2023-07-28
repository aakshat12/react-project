import React from "react";
import "./Nav.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Nav = () => {
  return (
    <>
      {" "}
      <nav className="main-nav">
        <div className="float-container">
          <div className="float-child">
            <h2>
              <span>A</span>kshat
              <span>T</span>echnical
            </h2>
          </div>
          <div
            className="float-child"
            style={{
              width: "41%",
              height: "81px",
              justifyContent: "space-between",
              marginLeft: "127px",fontSize:"17px"
            }}
          >
            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Products</a>

            <a href="#">Contact</a>
          </div>

          <div
            className="float child"
            style={{
              height: "71px",
              width: "293px",
              justifyContent: "flex-end",
              marginBottom: "-19x",
              display: "flex",
            }}
          >
            <a
              href="https://www.facebook.com/AmazonIN"
              target="
                    -Akshat"
              style={{
                color: "3b5998",
                height: "100px",
                width: "25px",
                marginBlock: "35px",fontSize:"17px"
              }}
            >
              <FaFacebookSquare className="Facebook" />
            </a>

            <a
              href="https://www.instagram.com/amazon/?hl=en" target="-Akshat"
              style={{
                color: "#c32aa3",
                height: "100px",
                width: "25px",
                marginBlock: "35px",fontSize:"17px"
              }}
            >
              <FaInstagramSquare className="Instagram" />
            </a>

            <a href="https://www.youtube.com/@AmazonInOfficial"
              target="
                    -Akshat"
              style={{
                color: "#ff0000",
                height: "100px",
                width: "25px",
                marginBlock: "35px",fontSize:"17px",
              }}
            >
              <FaYoutubeSquare className="Youtube" />
            </a>
          </div>
          
         < div className="bottons" style={{display:"flex",justifyContent:"end", fontSize:"21px",width:"83px",marginBlock:"29px"}}>
            <a href=""  className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Login</a>
          </div>
          
        </div>
        
      </nav>
      {/* <section className="hero-section"> 
        <p>Welcome to</p>
        <h1> Akshat Ecommerce website</h1>
      </section>*/}
    </>
  );
};

export default Nav;
