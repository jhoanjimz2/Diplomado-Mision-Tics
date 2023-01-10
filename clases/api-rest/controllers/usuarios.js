var validator = require("validator");
const Usuario = require("../models/usuarios")

var controller = {

    save: function (req,res) {
        var params = req.body;
        var validate_name = !validator.isEmpty(params.nombre);
        var validate_surname = !validator.isEmpty(params.surname);
        var validate_email = validator.isEmail(params.email) && !validator.isEmpty(params.email);
        var validate_pass = !validator.isEmpty(params.pass);

        if (validate_name && validate_surname && validate_email && validate_pass) {
            var usuario = new Usuario();
            usuario.name = params.nombre;
            usuario.surname = params.surname;
            usuario.email = params.email;
            usuario.password = params.pass;
            usuario.image = null
            usuario.role = "Rol de usuario";


            usuario.save((err, userStored) => {
                return res.status(200).send({
                    message: "Usuario guardado",
                    usuario: userStored
                });
            });

        } else {
            return res.status(400).send({
                message: "Ingresa todos los datos y asegurate que el correo sea valido",
                params
            });
        }

    },

    login: function (req,res) {
        return res.status(200).send({
            message: "Metodo login"
        });
    },

    update: function (req,res) {
        var params = req.body;
        var usuarioId = req.params.id;
        var validate_name = !validator.isEmpty(params.nombre);
        var validate_surname = !validator.isEmpty(params.surname);
        var validate_email = validator.isEmail(params.email) && !validator.isEmpty(params.email);
        var validate_pass = !validator.isEmpty(params.pass);

        if (validate_name && validate_surname && validate_email && validate_pass) {
            var update = {
                name: params.nombre,
                surname: params.surname,
                email: params.email,
                password: params.pass
            };
            Usuario.findOneAndUpdate({_id: usuarioId}, update, {new: true}, (err, userUpdate) => {
                if (err) {
                    return res.status(200).send({
                        message: "Error en la petición",
                        status: "Error"
                    });
                } 
                if (!userUpdate) {
                    return res.status(200).send({
                        message: "No se pudo actualizar",
                        status: "Error"
                    });
                }
                return res.status(200).send({
                    message: "Se actualizó correctamente",
                    userUpdate
                });
            });
        } else {
            return res.status(200).send({
                message: "Validación de los datos invalida"
            });
        }
    },

    delete: function (req,res) {
        var usuarioId = req.params.id;
        Usuario.findOneAndDelete({_id: usuarioId}, (err, userRemoved) => {
            if (err) {
                return res.status(500).send({
                    message: "Error en la petición",
                    status: "Error"
                });
            }
            if (!userRemoved) {
                return res.status(200).send({
                    message: "No se pudo eliminar",
                    status: "Error"
                });
            }
            return res.status(200).send({
                message: "Usuario Eliminado",
                status: userRemoved
            });
        });
    },

    listarUsuarios: function (req,res) {
        Usuario.find(function(err,doc){
            return res.status(200).send({
                message: "Listado de Usuarios",
                doc
            });
        });
    },

    verUsuario: function (req,res) {
        var usuarioId = req.params.id;
        Usuario.findById(usuarioId).exec((err, usuario) => {
            if (err) {
                return res.status(500).send({
                    message: "Error en la petición",
                    status: "Error"
                });
            }
            if (!usuario) {
                return res.status(400).send({
                    message: "No se encontró el usuario",
                    status: "Error"
                });
            }
            return res.status(200).send({
                message: "Usuario encontrado",
                usuario
            });
        });
    }
};


module.exports = controller;