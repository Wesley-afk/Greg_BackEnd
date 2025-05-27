const express = require("express");
const app = express();
const port = 5000;

const path = require("path")
const caminho = path.join(__dirname, 'pages')

app.get("/users/cadastrar", (req,res)=>{
    res.sendFile(`${caminho}/cadastro.html`)
})

app.use(
    express.urlencoded({ extended:true })
)

app.use(express.json())

app.post("/users/save", (req, res) =>{
    console.log(req.body)
    
    const login = req.body.usuario
    const senha = req.body.senha

    console.log(`Login do indivíduo: ${login}, Senha: ${senha}`)
    res.sendFile(`${caminho}/cadastroConfirmado.html`)
}
)


app.get("/users/:id", (req,res) =>{
    const id = req.params.id

    console.log(`O usuário ${id} foi encontrado`)
    res.sendFile(`${caminho}/users.html`)
}
)

app.get("/home", (req, res) => {
//   res.send("<h1>Olá mundo</h1>");
    res.status(200)
    res.sendFile(`${caminho}/index.html`)
});

app.get("/", (req, res) => {
//   res.send("<h1>Olá mundo</h1>");
    res.status(200)
    res.sendFile(`${caminho}/index.html`)
});

app.use((req,res,next)=>{
    res.status(404).sendFile(`${caminho}/404.html`)
})

const checkAuth = function (req, res, next) {
  req.authStatus = true;

  if (req.authStatus) {
    console.log("Este usuário está autenticado");
    next();
  } 
  else {
    console.log("Este usuário não pode acessar");
    next();
  }
};

app.use(checkAuth)


app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
