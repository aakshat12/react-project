import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import './Signup.css';
export const Signup = () => {
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()

  const handleSubmit= (e)=> {
    e.preventDefault()
    axios.post('',{name,email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    // <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    //   <div className="bg-white p-3 rounded w-25">
    //     <h2>Register</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="mb-3">
    //         <label htmlFor="email">
    //           <strong>Name</strong>
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="Enter Name"
    //           autoComplete="off"
    //           name="email"
    //           className="form-control rounded-0"
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="email">
    //           <strong>Email</strong>
    //         </label>
    //         <input
    //           type="email"
    //           placeholder="Enter Email"
    //           autoComplete="off"
    //           name="email"
    //           className="form-control rounded-0"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="email">
    //           <strong>Password</strong>
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="Enter Password"
    //           autoComplete="off"
    //           name="password"
    //           className="form-control rounded-0"
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </div>
    //       <button type="submit" className="btn btn-success w-100 rounded-0">
    //         Register
    //       </button>
    //       </form>
    //       <p>Already Have an Account</p>
    //       <Link to="/Login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
    //         Login
    //       </Link>

          
       
    //   </div>
    //   <div className='login'>
    //     <form>
    //         <label for='chk' aria-hidden='true'>Login</label>
    //         <input type="email" name="email" placeholder='Email' required=""/>
    //         <input type="password" name="pswd" placeholder='Password' required=""/>
    //         <button>Login</button>

    //     </form>
    // </div>
    // </div>
    
   <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
        <p style={{color:'white',padding:"15px"}}>Already Have an Account</p>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
  
  );
};
export default Signup;
