const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")))

app.listen( process.env.PORT || 3030, () => 
    {console.log("Servidor corriendo http://localhost:3030")})

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/register.html', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/login.html', (req, res) =>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
})