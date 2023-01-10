import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgregarUsuario from "./components/AgregarUsuario";
import EditarUsuario from "./components/EditarUsuario";
import Menu from "./components/Menu";
import Roles from "./components/Roles";
import Usuarios from "./components/Usuarios";
import Comentarios from "./components/Comentarios";

class Rutas extends Component {
    render() {
        return(
            <BrowserRouter>
                <Menu></Menu>
                <Routes>
                    <Route path="/" element={<div>HOME</div>}></Route>
                    <Route path="/usuarios" element={<Usuarios></Usuarios>}></Route>
                    <Route path="/agregarUsuario" element={<AgregarUsuario></AgregarUsuario>}></Route>
                    <Route path="/comentarios" element={<Comentarios></Comentarios>}></Route>
                    <Route path="/roles" element={<Roles></Roles>}></Route>
                    <Route path="/editarUsuario/:id" element={<EditarUsuario></EditarUsuario>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Rutas;