import React from "react";
import NavBar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About";
import Product from "./components/product/Product.jsx";
import Testimony from "./components/testimony/Testimony.jsx";
import Footer from "./components/footer/Footer";
import { Container } from "react-bootstrap";
import Detail from "./components/detail/Detail.jsx";

const App = () => {
  return (
    <Container>
      <NavBar />
      <Home />
      <Detail />
      <About />
      <Product />
      <Testimony />
      <Footer />
    </Container>
  );
};

export default App;
