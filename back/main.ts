import express from "npm:express@4.18.2";

const app = express();
const env = await load();
app.get('/', (req, res) => {
    console.log("Peticion recibida");
    res.send("¡Hola, mundo!");
});
const PORT=process.env.PORT||3000;
app.listen(4000, () => {
    console.log("Corriendo en el puerto 4000");
});
