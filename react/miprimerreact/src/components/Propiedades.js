import React, { Component } from "react";

class Propiedades extends Component {
    contador = 0;
    state = {
        contador:0
    }
    sumar() {
        this.setState({
            contador : (this.state.contador + 1)
        });
    }
    restar() {
        this.setState({
            contador : (this.state.contador - 1)
        });
    }
    render() {
        console.log(this.props)
        return(
            <div id="propiedades">
                <h4>Propiedades</h4>
                <button>{this.props.btn}</button>
                <p>Contador: {this.state.contador}</p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar.bind(this)}/>
                    <input type="button" value="Restar" onClick={this.restar.bind(this)}/>
                </p>
            </div>
        )
    }
}

export default Propiedades;