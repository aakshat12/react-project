import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Singleproduct from './Singleproduct';
import Cart from './Cart';
/*import { GlobalStyle } from './Globalstyle';
import {Themeprovider} from 'styled-components';*/


const App=() =>{
  
  return <Router>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/Products" element ={<Products/>}/>
      <Route path="/Contact" element ={<Contact/>}/>
      <Route path="/Singleproduct/:id" element ={<Singleproduct/>}/>
      <Route path="/Cart" element ={<Cart/>}/>
    </Routes>
  </Router>
};

export default App;
