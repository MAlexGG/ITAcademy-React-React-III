import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Login from "../auth/login/Login";
import Signup from "../auth/signup/Signup";
import Starship from "../starship/Starship";
import Starships from "../starships/Starships";


function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/starships" element={<Starships/>} />
                <Route path="/starship/:id" element={<Starship />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
} 
   
export default Router;
