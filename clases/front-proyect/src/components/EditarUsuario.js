import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

class EditarUsuario extends Component {
    path = null;
    url= [];
    usuariosId = null;

    nombre = React.createRef();
    apellido = React.createRef();
    correo = React.createRef();
    pass = React.createRef();

    state = {
        usuario: [],
        status: null
    }
    componentWillMount() {
        this.path = window.location.pathname;
        this.url = this.path.split('/');
        this.usuariosId = this.url[2];
        this.getUsuario(this.usuariosId);
    }
    getUsuario = (id) => {
        axios.get('http://localhost:3000/api/usuarios/'+id)
            .then(res => {
                this.setState({
                    usuario: res.data.usuario
                });
            })
            .catch( error => {
                console.log(error);
            })
    }
    actualizarUsuario = (e) => {
        e.preventDefault();
        var usuario = {
            nombre  : this.nombre.current.value,
            surname : this.apellido.current.value,
            email   : this.correo.current.value,
            pass    : this.pass.current.value
        }
        axios.put('http://localhost:3000/api/actualizar/'+this.usuariosId, usuario)
            .then(res => {
                this.setState({
                    status: "success"
                });
            })
            .catch( error => {
                console.log(error);
            })
    }
    render() {
        if (this.state.status === "success") {
            return <Navigate to="/usuarios"></Navigate>
        }
        return (
            <React.Fragment>
                <div className="container">
                <h1>Editar Usuario</h1>
                <form onSubmit={this.actualizarUsuario}>
                    <div className="mb-3">
                        <label className=" form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" defaultValue={this.state.usuario.name} ref={this.nombre}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellido" defaultValue={this.state.usuario.surname} ref={this.apellido}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" defaultValue={this.state.usuario.email} ref={this.correo}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" defaultValue={this.state.usuario.password} ref={this.pass}/>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}


export default EditarUsuario;