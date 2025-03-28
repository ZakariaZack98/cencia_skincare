import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home/Index";
import RootLayout from "./Components/RootLayout/RootLayout";
import Shop from "./Pages/Shop/Shop";
import ProductPage from "./Pages/ProductPage/ProductPage";
import { CartProvider } from "./contexts/CartContext";
import CartButton from "./Components/HomeComponents/CartButton";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);

  const handleCartClick = () => {
    console.log("Cart button clicked!");
    // Add logic to navigate to the cart page or open a cart modal
  };

  return (
    <CartProvider>
      <BrowserRouter>
        {/* CartButton is added here to make it global */}
        <CartButton onClick={handleCartClick} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<RootLayout />}>
            <Route index element={<Shop />} />
            <Route path="/shop/:name" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
