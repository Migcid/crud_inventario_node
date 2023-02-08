const express = require('express')

const app = express();

app.get("/", (req, res) =>{
    res.send("Bienvenido Miguel");
});
app.all("*", (req, res) => {
    res.status(404).send("No encontrado.")
})

app.listen(3000, () => console.log("http://localhost:3000"))