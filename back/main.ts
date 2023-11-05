import express from "npm:express@4.18.2";

const app = express();

app.get('/', (req, res) => {
    console.log("Peticion recibida");
    res.send("¡Hola, mundo!");
});
const PORT=process.env.PORT||4000;
app.listen(4000, () => {
    console.log("Corriendo en el puerto 4000");
});
