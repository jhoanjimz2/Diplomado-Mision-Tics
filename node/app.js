//console.log("Hola Mundo");
const frutas = require("./frutas");
var cowsay = require("cowsay");
  
frutas.forEach((fruta) => {
    console.count(fruta);
})

console.log(
    cowsay.say({
        text:"Soy un modulo",
        e:"OO",
        T:"U",
    })
)