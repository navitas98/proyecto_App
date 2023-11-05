import express from "express";
const app = express();

app.get('/', (req, res) => {
    console.log("Peticion recibida");
    res.send("¡Hola, mundo!"); // Envía una respuesta al cliente
});

app.listen(4000, () => {
    console.log("Corriendo en el puerto 4000");
});
