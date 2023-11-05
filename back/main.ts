import express from "npm:express@4.18.2";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const app = express();
const env = await load();
const PORT=process.env.PORT||3000;

app.get('/', (req, res) => {
    console.log("Peticion recibida");
    res.send(PORT);
});


app.listen(4000, () => {
    console.log("Corriendo en el puerto 4000");
});
