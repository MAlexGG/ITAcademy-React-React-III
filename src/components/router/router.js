import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Starship from "../starship/Starship";
import Starships from "../starships/Starships";


function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/starships" element={<Starships/>} />
                <Route path="/starship/:id" element={ <Starship /> } />
            </Routes>
        </BrowserRouter>
    )
} 
   
export default Router;
