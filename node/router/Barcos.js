const express = require("express");
const router = express.Router();

router.get("/",(req, res)=>{
    res.render("barcos", {
        arrayBarcos: [
            { id: "125fsdfd", nombre: "El Perla Negra", descripcion: "El Barco del Pirata" },
            { id: "2196fsd66", nombre: "Titanic", descripcion: "El barco hundido" }
        ]
    });
});


module.exports = router;