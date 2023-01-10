import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

class Usuarios extends Component {
    state = {
        usuarios: [],
        status: null
    };
    componentWillMount() {
        this.getUsuarios();
    }
    getUsuarios = () => {
        axios.get('http://localhost:3000/api/usuarios').
            then( res => {
                this.setState({
                    usuarios: res.data.doc
                });
            }).catch( error => {
            });
    };
    borrarUsuario = (id) => {
        axios.delete('http://localhost:3000/api/eliminar/'+id).
            then( res => {
                this.setState({
                    status: "deleted"
                })
            }).catch( error => {
                console.log(error);
            });
            window.location.reload(true);
            swal(
                "Usuario Eliminado",
                "El usuario ha sido eliminado exitosamente",
                "success"
            )
    }
    render() {
        return (
            <React.Fragment>
                <h1>Usuarios</h1>
                <Link to="/agregarUsuario" className="btn btn-success">Agregar Usuarios</Link>
                <div className="container">
                    <table className="table mt-5 table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                                <th>Contraseña</th>
                                <th>Imagen</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map((usuario) => {
                                    return(
                                        <React.Fragment>
                                            <tr>
                                                <td>{usuario._id}</td>
                                                <td>{usuario.name}</td>
                                                <td>{usuario.surname}</td>
                                                <td>{usuario.email}</td>
                                                <td>{usuario.password}</td>
                                                <td>{usuario.image}</td>
                                                <td>{usuario.role}</td>
                                                <td>
                                                    <Link to={"/editarUsuario/"+usuario._id} className="btn btn-success">Editar</Link>
                                                    <button className="btn btn-danger ms-3" onClick={
                                                        () => {
                                                            this.borrarUsuario(usuario._id)
                                                        }
                                                    }>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}


export default Usuarios;