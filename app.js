const express = require ("express");
const app = express();
const path = require("path")

app.listen (3030, () =>{
    console.log ("Servidor exitoso")
})

app.get ('/', (req, res) =>{
    let home = path.join(__dirname, './DH-Heroes/Views/index.html')
     res.sendFile (home)
})

app.get ('/babbage', (req, res) =>{
    let babbage = path.join(__dirname, './DH-Heroes/Views/babbage.html')
     res.sendFile (babbage)
})

app.get ('/berners-lee', (req, res) =>{
    let bernersLee = path.join(__dirname, './DH-Heroes/Views/berners-lee.html')
     res.sendFile (bernersLee)
})

app.get ('/clarke', (req, res) =>{
    let clarke = path.join(__dirname, './DH-Heroes/Views/clarke.html')
     res.sendFile (clarke)
})

app.get ('/hamilton', (req, res) =>{
    let hamilton = path.join(__dirname, './DH-Heroes/Views/hamilton.html')
     res.sendFile (hamilton)
})

app.get ('/hopper', (req, res) =>{
    let hopper = path.join(__dirname, './DH-Heroes/Views/hopper.html')
     res.sendFile (hopper)
})

app.get ('/lovelace', (req, res) =>{
    let lovelace = path.join(__dirname, './DH-Heroes/Views/lovelace.html')
     res.sendFile (lovelace)
})

app.get ('/turing', (req, res) =>{
    let turing = path.join(__dirname, './DH-Heroes/Views/turing.html')
     res.sendFile (turing)
})
