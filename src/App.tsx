import "./App.css";
import "./styles/tailwind.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import React, { useEffect, useState } from "react";
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

// Import the functions you need from the SDKs you need

import { error } from "console";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const App: React.FC = ({mindCresContent}:any) => { // Import the 'remote-config' module from the 'firebase/app' package

console.log(mindCresContent)


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <Header mindCresContent={mindCresContent} />
        <Hero  />
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
