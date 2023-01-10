import React, { Component } from "react";

class MiComponente extends Component {
    render() {
        let receta = {
            nombre: "pizza",
            ingredientes: ["Tomate", "Queso", "Jamon"],
            calorias: 400
        }
        return (
            <React.Fragment>
                <h1>Hola soy un componente</h1>
                <h2>Sigo probando</h2>
                <ul>
                    <li>{receta.nombre}</li>
                    <li>{receta.calorias}</li>
                </ul>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i)=> {
                            return (
                                <li key={i}>{ingrediente}</li>
                            );
                        })
                    }
                </ol>
            </React.Fragment>
        )
    }
}
export default MiComponente;