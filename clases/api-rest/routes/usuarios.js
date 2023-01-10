var express = require("express");
var UserController = require("../controllers/usuarios");

var router = express.Router();

router.post("/login", UserController.login);
router.post("/guardarUsuario", UserController.save);
router.put("/actualizar/:id", UserController.update);
router.delete("/eliminar/:id", UserController.delete);
router.get("/usuarios", UserController.listarUsuarios);
router.get("/usuarios/:id", UserController.verUsuario);

module.exports = router;