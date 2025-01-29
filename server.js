// Importamos Express
const express = require("express");

// Creamos la aplicación
const app = express();

// Definimos el puerto
const PORT = 3000;

// Servimos los archivos estáticos desde "public"
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
