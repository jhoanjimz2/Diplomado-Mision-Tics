const http = require("http");
var colors = require("colors");
const fs = require("fs");
const puerto = 3000;

const server = http.createServer((req, res) => {
    console.log("Respuesta del servidor".green);
    console.log(req.url);
    if(req.url == '/') {
        res.write("<h1>Hola Mundo</h1>");
    } 
    
    
    if (req.url == '/registro') {
        const arch = fs.readFileSync("./registro.html");
        res.write(arch);
        return res.end();
    }
    
    
    if (req.url == '/contacto') {
        const arch = fs.readFileSync("./contacto.html");
        res.write(arch);
        return res.end();
    }


    res.end("Te saludo desde el servidor");
});

server.listen(puerto, () => {
    console.log("Escuchando.............".rainbow);
})