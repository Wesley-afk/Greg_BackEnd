const fs = require("fs");
//console.log(fs)

//READ
// fs.readFile("teste.txt", "utf8", (erro, dados) => {
//   if (erro) {
//     console.log(erro);
//   } else {
//     console.log(dados);
//   }
// });

const mensagem = "Boa sorte \nSHAZAM";

// CREATE
fs.writeFile("teste2oretorno.txt", mensagem, "utf8", (erro) => {
  if (erro) {
    console.log("Deu erro parça, resolve ai");
  } else {
    console.log("Arquivo gerado com sucesso!");
  }
});

// UPDATE
const mensagem2 = "\nOutra mensagem tão importante quanto a outra mensagem";
fs.appendFile("teste2oretorno.txt", mensagem2, "utf8", (erro) => {
  if (erro) {
    console.log("Deu erro parça, resolve ai");
  } else {
    console.log("Texto adicionado com sucesso!");
  }
});

// DELETE
fs.unlink("teste2oretorno.txt", (erro) => {
  if (erro) {
    console.log("Deu erro AQUI");
  } else {
    console.log("Arquivo deleted com sucesso!");
  }
});
