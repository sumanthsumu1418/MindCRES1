import "./App.css";
import "./styles/tailwind.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import React from "react";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Navbar from './components/Header'
function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Navbar /> */}
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <ContactUs /> 
      <Footer />
    </div>
  );
}

export default App;
