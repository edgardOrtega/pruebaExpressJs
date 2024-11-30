const express = require("express");

// inicializar express en una variable llamada app
const app = express();
const fs = require("fs");
const cors = require('cors')

app.listen(3000, console.log("!Servidor encendido!"));

// habilitar cors para permitir peticiones desde cualquier origen
app.use(cors())
// usar middleware para parsear los datos de los formularios
app.use(express.json())
app.get("/home", (req, res) => {
  res.send("Hello World Express JS");
});

app.get("/pets", (req, res) => {
  res.send("<h1> Mascotas </h1>");
});

app.get("/productos", (req, res) => {
  const productos = JSON.parse(fs.readFileSync("productos.json"));
  res.json(productos);
});

app.post("/productos", (req, res) => {
  const producto = req.body;
  const productos = JSON.parse(fs.readFileSync("productos.json"));
  productos.push(producto);
  fs.writeFileSync("productos.json", JSON.stringify(productos));
  res.send("Producto agregado con éxito!");
});

//ruta con html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
    })
