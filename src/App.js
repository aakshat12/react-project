import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav'
import Home from './Component/Home'
import {Route,Routes} from 'react-router-dom'
import Product from './Component/Products';
import Cart from './Component/Cart';

function App() {
  return (
  <div>
    
    <Nav/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path="/products/:productName" element={<Product/>} /> 
      <Route path='/cart' element={<Cart/>}/>     
    </Routes>
    
    
   
    
  </div>
  );
}

export default App;
