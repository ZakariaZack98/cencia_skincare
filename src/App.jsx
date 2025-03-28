import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RootLayout from './Components/RootLayout/RootLayout';
import Shop from './Pages/Shop/Shop'
import ProductPage from './Pages/ProductPage/ProductPage';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<RootLayout/>}>
          <Route index element={<Shop/>}/>
          <Route path='/shop/:name' element={<ProductPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
