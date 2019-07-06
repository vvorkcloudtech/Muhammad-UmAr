import React, { Component } from "react";
import Nav from "./Nav";
import About from "./About";
import Company from "./Company";
import Offer from "./Offer";
import Investment from "./Investment";
import Clients from "./Clients";
import Contact from "./Contact";
import Map from "./Map";
import Footer from "./Footer";

class App extends Component {
  render() {
    return(
    <div>
    <Nav/>
    <About/>
    <Company/>
    <Offer/>
    <Investment/>
    <Clients/>
    <Contact/>
    <Map/>
    <Footer/>
    </div>
    );
  }
}
export default App;
