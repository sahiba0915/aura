import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
 <>
   <Navbar/>
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/products" element = {<Products/>} />
   </Routes>
   
 </>
  );
}

export default App;
