import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class AgregarUsuario extends Component {
    nombre = React.createRef();
    apellido = React.createRef();
    correo = React.createRef();
    password = React.createRef();

    state = {
        usuario: {},
        state: null
    }

    changeState = () => {
        this.setState({
            nombre: this.nombre.current.value,
            surname: this.apellido.current.value,
            email: this.correo.current.value,
            pass: this.password.current.value
        });
    }

    guardarUsuario = (e) => {
        e.preventDefault();
        this.changeState();
        var usuario =  {
            nombre: this.nombre.current.value,
            surname: this.apellido.current.value,
            email: this.correo.current.value,
            pass: this.password.current.value
        }
        axios.post('http://localhost:3000/api/guardarUsuario', usuario)
            .then( res => {
                this.setState({
                    status: "success",
                    usuario: res.data
                })
            })
            .catch( function(error) {
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
                <h1>Agregar Usuario</h1>
                <form onSubmit={this.guardarUsuario}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" ref={this.nombre} onChange={this.changeState}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="apellido" name="apellido" ref={this.apellido} onChange={this.changeState}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" ref={this.correo} onChange={this.changeState}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" ref={this.password} onChange={this.changeState}/>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}


export default AgregarUsuario;