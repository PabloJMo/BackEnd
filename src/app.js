const express = require('express');
const PORT = 8090

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("¡Bienvenido a mi aplicación!");
    });

app.get('/hello', (req, res) => {
  res.send(`Hello, ${req.query.person}!`);
});

app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});