import React from 'react'
import NavBar from './components/navbar/Navbar.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About'
import Product from './components/product/Product.jsx'
import Footer from './components/footer/Footer'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <Container>
      <container-fluid>
        <NavBar/>
        <Home/>
        <About/>
        <Product/>
        <Footer/>
      </container-fluid>
    </Container> 
  )
}

export default App