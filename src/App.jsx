import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Index'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RootLayout from './assets/Components/RootLayout/RootLayout';
import Shop from './Pages/Shop/Shop'

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
          <Route path='/shop/cleanser' element={'This is cleanser page'}/>
          <Route path='/shop/toner' element={'This is toner page'}/>
          <Route path='/shop/mask' element={'This is mask page'}/>
          <Route path='/shop/emulsion' element={'This is emulsion page'}/>
          <Route path='/shop/cream' element={'This is cream page'}/>
          <Route path='/shop/bodymist' element={'This is bodymist page'}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
