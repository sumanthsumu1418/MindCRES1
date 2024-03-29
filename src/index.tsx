import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
} from "firebase/remote-config";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyCRXsDPjf3u-dmdPTs4TcatPqKKEd0b9gk",
  authDomain: "mindcreswebsite.firebaseapp.com",
  databaseURL: "https://mindcreswebsite-default-rtdb.firebaseio.com",
  projectId: "mindcreswebsite",
  storageBucket: "mindcreswebsite.appspot.com",
  messagingSenderId: "282039816576",
  appId: "1:282039816576:web:2f53a86c335dee4965b165",
  measurementId: "G-8CJ0X412VN",
};

const app = initializeApp(firebaseConfig);
// console.log("fetchData getting called")
const remoteConfig = getRemoteConfig();
// fetchAndActivate(remoteConfig)
//   .then(() => {
//     return getRemoteConfig()
//   })
//   .then(() => {
//     return getValue(remoteConfig, "mindcresContent")
//   })
//   .then((value) => {
//     console.log("value==>", value)
//   })
//   .catch((error) => {
//     console.error("Error fetching remote config:", error);
//   });

// const isFetched = await fetchAndActivate(remoteConfig)

// console.log("isFetched==>", isFetched)
function Index() {
  const [isFetched, setIsFetched] = useState(false);
  const [mindCresContent, setMindCresContent] = useState(false);

  useEffect(() => {
    const fetchRemoteConfig = async () => {
      try {
        // const remoteConfig = firebase.remoteConfig();
        const fetched = await fetchAndActivate(remoteConfig);
        setIsFetched(fetched);
      } catch (error) {
        console.error("Error fetching remote config:", error);
        // Handle error fetching remote config
      }
      const value = getValue(remoteConfig, "mindcresContent");
//@ts-ignore
      setMindCresContent(JSON.parse(value._value));
    };

    fetchRemoteConfig();
  }, []); // Run once on component mount

  return (
    <>
      {mindCresContent ? (
        <App mindCresContent={mindCresContent} />
      ) : (
        <div className="flex items-center justify-center h-screen">
        <div style={{borderColor:"#fdc103"}} className="border-t-8 border-#fdc103 border-solid rounded-full animate-spin w-16 h-16"></div>
        {/* <p className="ml-4 text-lg font-semibold text-#6B7280">Loading...</p> */}
      </div>
      )}
    </>
  );
}

root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
