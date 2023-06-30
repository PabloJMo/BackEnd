const express = require('express');

const { libraryRouter, bookRouter, userRouter } = require('./routes');
const { initializeDB } = require('./config/dbConfig');

const PORT = 8090;
//Creating an app from express
const app = express();

// Application Middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.send("¡Bienvenido a mi aplicación!");
    });

app.get('/hello', (req, res) => {
  res.send(`Hello, ${req.query.person}!`);
});

app.use("/library", libraryRouter);
app.use("/book", bookRouter);
app.use("/user", userRouter);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});