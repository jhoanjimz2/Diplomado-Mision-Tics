import React, { Component } from "react";
import Mensaje from "./Mensaje";

class Peliculas extends Component {
    render() {
        return(
            <div id="peliculas">
                <h4>Peliculas</h4>
                <Mensaje/>
            </div>
        )
    }
}

export default Peliculas;