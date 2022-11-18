//import react into the bundle
//import { apply } from "file-loader";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from './app.jsx';

//render your react application
ReactDOM.render(
    <AuthContextProvider>
        <BrowserRouter>
        <App/>
    </BrowserRouter>
    </AuthContextProvider>
    ,
    document.getElementById('app')
);
