import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Features from "./components/Features";
import Footer from "./components/Footer";
import banner from "./assets/banner.jpg";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <img src={banner} class="img-fluid mb-4" alt="Shop Now"></img>
      <Products></Products>
      <hr class="my-4 my-hr" />
      <Features></Features>
      <Footer></Footer>
    </>
  );
}

export default App;
