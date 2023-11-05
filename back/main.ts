import express from "npm:express@4.17.1";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const PORT = Deno.env.get("PORT");
const app = express();


app.get('/', (req, res) => {
    console.log("Peticion recibida");
    res.send("conectado");
});


app.listen(4000, () => {
    console.log("Corriendo en el puerto 4000");
});
