import React, { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/peliculas" activeClassName="active">Peliculas</NavLink></li>
                    <li><NavLink to="/componente">Componente</NavLink></li>
                </ul>
                <Link to="/peliculas">Peliculas</Link>
                <Routes>
                    <Route path="/" element={<div>Home</div>}></Route>
                    <Route path="/peliculas" element={<Peliculas></Peliculas>}></Route>
                    <Route path="/componente" element={<MiComponente></MiComponente>}></Route>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;