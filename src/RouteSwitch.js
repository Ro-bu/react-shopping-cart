import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Contact from "./Contact";

function RouteSwitch() {
    return(
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;