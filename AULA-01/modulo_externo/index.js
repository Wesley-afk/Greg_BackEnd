const minimist = require('minimist')

const soma = require("../modulo_interno").soma
const argumentos = minimist(process.argv.slice(2))

console.log(argumentos)

const num = parseInt(argumentos['a'])
const num2 = parseInt(argumentos['b'])

soma(num, num2)