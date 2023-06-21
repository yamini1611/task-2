import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import React1 from './components/react';
import Display from './components/display';
import Data from './components/data/data';
import ProductList from './components/task-4/ProductList';
import ProductDetails from './components/task-4/ProductDetails';
function App() {
  
  return (
    <Router> 
      <div>
        <Navbar />
       
        <Routes>
          <Route exact path="home/*" element={<Home />} />
          <Route  exact path="react" element={<React1 />} />
          <Route  exact path="trainees" element={<Display />} />
          <Route  exact path="data" element={<Data />} />
          <Route exact path="ProductList" element={<ProductList />} />

          <Route path="ProductDetails/:id" element={<ProductDetails />} />
          
        </Routes>
      
      </div>

    </Router>
  );
}

export default App;
