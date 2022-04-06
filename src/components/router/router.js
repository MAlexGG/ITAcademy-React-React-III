import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Starship from "../starship/Starship";


function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/starship/:id" element={ <Starship /> } />
            </Routes>
        </BrowserRouter>
    )
} 
   
export default Router;
