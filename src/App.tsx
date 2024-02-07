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
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
        <Header />
        <Hero />
        <AboutUs />
        <WhyChooseUs />
        <Services />
        <ContactUs />
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default App;
