import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import MenClothing from './pages/MenClothing';
import WomenClothing from './pages/WomenClothing';
import Jewelery from './pages/Jewelery';
import Electronics from './pages/Electronics';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar/>
      <Routes>
        <Route path='*' element={<NotFound/> } />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Navigate to={'/'} replace />  } />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/men-clothing' element={<MenClothing />} />
        <Route path='/women-clothing' element={<WomenClothing/>} />
        <Route path='/jewelery' element={<Jewelery/>} />
        <Route path='/electronics' element={<Electronics/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App