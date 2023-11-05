import express from "npm:express@4.17.1";
import mongoose from "npm:mongoose@8.0.0";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();
const PORT = env.PORT;
if(!PORT){
    console.log("No existe PORT")
}
//const DB = Deno.env.get("DB") || "contactos";

/*if (!MONGO_URL) {
  throw new Error("Please provide a MONGO_URL");
  Deno.exit(-1);
}

// connecto to MongoDB

//const uri = `${MONGO_URL}/${DB}?retryWrites=true&w=majority`;
//await mongoose.connect(uri);
//console.info("MongoDB connected");

*/// create express app
const app = express();
app.use(express.json());
/*
// create endpoints
app
  .get("/api/contactos", getAllContacts)
  .get("/api/contactos/:dni", getContactFromDNI)
  .post("/api/contactos", pushContact)
  .put("/api/contactos/:dni", putContact)
  .delete("/api/contactos/:dni", deleteContact);
*/
// start express server
app.listen(PORT, () => {
  console.info(`Server started on port  ${PORT}`);
});