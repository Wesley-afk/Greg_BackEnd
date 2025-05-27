//UTILIZANDO MÓDULO NO NPM
const minimist = require("minimist");

//UTILIZACAO MÓDULO DO NODE "CORE MODULES"
const fs = require("fs");

//UTILIZACAO MODULO INTERNO
const moduloSoma = require("../modulo_interno");

// Variavel pra guardar os argumentos passados
const args = minimist(process.argv.slice(2));

const funcSoma = moduloSoma.soma;

//Variáveis vindas do objeto gerado pelo minimist
const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

const resultado = funcSoma(a, b);

fs.writeFile("resultado.txt", resultado, "utf8", (erro, dados) => {
  if (erro) {
    console.log("Deu ruim, concerta");
  } else {
    console.log("Deu bom, parabéns");
  }
});
