const express = require ("express");
const app = express ();

app.listen (3030, () =>{
    console.log ("Servidor exitoso")
})

app.get ('/', (req, res) =>{
    res.send ('primera pagina web')
})