const express = require('express')
const axios = require("axios");
const app = express()
const port = 3000

//Middleware para parse de JSON no corpo da requisição
app.use(express.json());

//Set EJS as templating engine
app.set('view engine', 'ejs');

app.get('/lista', (req,res) => {

    let name = "Roberto";
    let listaCompras = ["carne", "sumo", "arroz"];

    res.render('lista', { nameOfTheClient: name, lista: listaCompras});
})

app.get('/main', (req,res) => {

    let name = "Roberto";
    let listaCompras = ["carne", "sumo", "arroz"];

    res.render('main', { nameOfTheClient: name, lista: listaCompras});
})

app.get('/contacts', (req,res) => {

    let name = "Roberto";
    let listaCompras = ["carne", "sumo", "arroz"];

    res.render('contacts', { nameOfTheClient: name, lista: listaCompras});
})


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${3000}`)
  })
