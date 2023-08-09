import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav'
import Home from './Component/Home'
import {Route,Routes} from 'react-router-dom'
import Product from './Component/Products';



function App() {
  return (
  <div>
    
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path="/products/:productName" element={<Product/>} />      
    </Routes>
    
   
    
  </div>
  );
}

export default App;
