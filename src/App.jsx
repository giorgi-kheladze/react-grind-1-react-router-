import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
