import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home/Index";
import RootLayout from "./Components/RootLayout/RootLayout";
import Shop from "./Pages/Shop/Shop";
import ProductPage from "./Pages/ProductPage/ProductPage";
import { CartProvider } from "./contexts/CartContext";
import CartButton from "./Components/HomeComponents/CartButton";
import Cart from "./Pages/Cart/Cart";
import Blog from "./Pages/Blog/Blog";
import BlogPost from "./Pages/BlogPostPage/BlogPost";
import { ClipLoader } from "react-spinners";
import Error from "./Pages/Error/Error";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-lightPink">
        <ClipLoader color="#E69149" size={100} />
      </div>
    );
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <CartButton />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<RootLayout />}>
            <Route index element={<Shop />} />
            <Route path="/shop/cart" element={<Cart />} />
            <Route path="/shop/:name" element={<ProductPage />} />
          </Route>
          <Route path="/blog" element={<RootLayout />}>
            <Route index element={<Blog />} />
            <Route path="/blog/:name" element={<BlogPost />} />
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
