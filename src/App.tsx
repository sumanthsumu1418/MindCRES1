import "./App.css";
import "./styles/tailwind.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import React, { useEffect } from "react";
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
import firebase from 'firebase/app'
import { RemoteConfig } from "firebase/remote-config";
const App: React.FC = () => { // Import the 'remote-config' module from the 'firebase/app' package

  // const [configValue, setConfigValue] = React.useState(null);

  // useEffect(() => {
  //   if (!firebase.apps.length) {
  //     firebase.initializeApp({
  //       apiKey: "AIzaSyB0-2yNq9V9pYR3p2CgY5V8oZ9pR9XQ2t4",
  //       authDomain: "react-landing-page-1c3e3.firebaseapp.com",
  //       projectId: "react-landing-page-1c3e3",
  //     })
  //   }
  // })

  

  // useEffect(() => {
  //   const fetchConfig = async () => {
  //     const response = await RemoteConfig().fetchAndActivate();
  //     const greetingMessage = response.getString("greeting_message");
  //     setConfigValue(greetingMessage);
  //   };
  //   fetchConfig();
  // }, []);
  
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
