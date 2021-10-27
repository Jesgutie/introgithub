//console.log("Hola mundo desde NodeJS")

// Importa paquete express en la constante
const express = require('express');
const mongoose = require('mongoose');
const TareaSchema = require ("./modelos/Tarea.js");

// Crea una constante llamada app con la que se puede usar todo lo del paquete express
const app = express();
// Funcionalidades para que usuarios externos puedan consultar mi BD
const router = express.Router();
// Usar codificación express modo extendido
app.use(express.urlencoded({extended:true}));

//Usar archivos en formato json
app.use(express.json()); 

// Conexión a base de datos ("cadena de conexión")
mongoose.connect("mongodb://Programa:ProyectoC4@programacionweb-shard-00-00.ee2iu.mongodb.net:27017,programacionweb-shard-00-01.ee2iu.mongodb.net:27017,programacionweb-shard-00-02.ee2iu.mongodb.net:27017/ActividadBD?ssl=true&replicaSet=atlas-bh0gkc-shard-0&authSource=admin&retryWrites=true&w=majority");

// Operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

router.post('/tarea', (req, res) => {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.detalle
    });

    nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Tarea almacenada correctamente.")
    })
});


app.use(router);
// Define la variable app
app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
});