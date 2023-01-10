const express = require("express");
const app = express();

const puerto = 3000;

app.use(express.static(__dirname+"/public"));

app.get("/",(req, res)=>{
    res.send("Hola Mundo");
    res.render("index");
});

app.get("/usuarios",(req, res)=>{
    res.send("Estamos en la página de usuarios");
    res.render("usuarios");
});

app.use((req,res) => {
    res.status(404).sendFile(__dirname+"/public/404.html");
});

app.listen(puerto, () =>{
    console.log("servidor escuchando por el puerto", puerto);
})