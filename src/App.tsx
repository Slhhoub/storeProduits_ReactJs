
import './App.css'
import Navbar from './components/navbar/Navbar';
import Product from './components/Product/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';


const App = () => {

  return <>
  <ToastContainer position="top-right" />
  <Navbar/>
  <Product/>
  
  </>
}

export default App;