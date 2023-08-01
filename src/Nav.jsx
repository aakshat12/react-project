import React from "react";


const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand" href="#">
            Dream Bazaar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              
             
            </ul>
            <div className="buttons">
             <a href="" className="btn btn.outline-dark">
              <i className="fa fa-sign-in me-1"></i>Login</a>
              <a href="" className="btn btn.outline-dark">
              <i className="fa fa-user-plus me-1"></i>Register</a>
              <a href="" className="btn btn.outline-dark">
              <i className="fa fa-shopping-cart me-1"></i>Cart (0)</a>
            </div>
            
          </div>
        </div>
      </nav>
    </div>

    /* {" "}
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
      </section>*/
  );
};

export default Nav;
