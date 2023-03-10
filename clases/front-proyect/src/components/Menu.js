import React, { Component } from "react"; 
import { useAuth0 } from "@auth0/auth0-react";

//const {isAuthenticated} = useAuth0();

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">HOME</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/usuarios">Usuarios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/comentarios">Comentarios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/roles">Roles</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Usuarios
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/usuarios">Listar Usuarios</a></li>
                                <li><a className="dropdown-item" href="/agregarUsuario">Agregar Usuarios</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Comentarios
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/usuarios">Listar Comentarios</a></li>
                                <li><a className="dropdown-item" href="/agregar">Agregar Comentario</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Roles
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/usuarios">Listar Roles</a></li>
                                <li><a className="dropdown-item" href="/agregar">Agregar Rol</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Menu;