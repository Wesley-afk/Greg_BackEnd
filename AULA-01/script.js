// console.log("Tá funcionando sim, eu confirmo")

// let a = 7
// let b = 77

// console.log(a+b)

// let itGo = "Elsa"

// console.log(`O nome da princesa de gelo é ${itGo}`)

// console.log(process.argv)

// let argumentos = process.argv.slice(2)
// console.log(argumentos)

// let alimento = argumentos[0].split("=")
// console.log(alimento)

const moduloImportado = require("./modulo_interno")

console.log(moduloImportado);
moduloImportado.soma(6,8)

let somacao = moduloImportado.soma
somacao(41,56)
