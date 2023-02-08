const express = require('express') // (1) se crea la peticion al servidor
const fs = require('fs'); // (6) importamos el archivo filesystem
const app = express();

app.get("/", (req, res) =>{
    res.send("Bienvenido Miguel"); 
}); 
    //(2) crear el require con un callback


app.get("/productos", (req, res) =>{
    fs.readFile("productos.json", "utf-8", (err, data) => {
        if(err) return res.status(500).send({code: 500, message: "No se pudo leer la informacion de productos."})
        let productos = JSON.parse(data);
        res.json(productos);
        
    })

})   
    // (5) vamos a traer productos para ingresarlos al productos.json con fileSystem y hay que importarlo arriba como const

app.all("*", (req, res) => {
    res.status(404).sendfile(__dirname + "/404.html") 
  
}) 
    //(4) hay que crear la direccion del html para que lo bra cuando hay un error en la direccion o no lo encuentre.

app.listen(3000, () => console.log("http://localhost:3000")) 
    //(3) creamos el puerto