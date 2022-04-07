import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../../App";
import Login from "../auth/login/Login";
import Signup from "../auth/signup/Signup";
import Starship from "../starship/Starship";
import Starships from "../starships/Starships";


function Router() {

    const AuthRoute = ({ children }) => {
        if (localStorage.getItem('form')) {
            return <Navigate to="/starships" />
        }
        return children
    };    

    const AuthShips = ({ children }) => {
        if (!localStorage.getItem('form')) {
            return <Navigate to="/login" />
        }
        return children
    }; 

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/starships" element={<AuthShips><Starships/></AuthShips>} />
                <Route path="/starship/:id" element={<AuthShips><Starship /></AuthShips>} />
                <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
                <Route path="/signup" element={<AuthRoute><Signup/></AuthRoute>}/>
            </Routes>
        </BrowserRouter>
    )
} 
   
export default Router;
