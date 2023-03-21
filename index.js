const express = require('express')
const express = require('bcrypt')
const express = require('cors')
require('dotenv/config')
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

//configuracion claves firebase
const firebaseConfig = {
    apiKey: "AIzaSyAZCYugAdNP87aaT56A6qk3t70OBs64LRU",
    authDomain: "proyecto-back-b2433.firebaseapp.com",
    projectId: "proyecto-back-b2433",
    storageBucket: "proyecto-back-b2433.appspot.com",
    messagingSenderId: "849316438374",
    appId: "1:849316438374:web:5f2e68e0b0f841d25b28a7"
  };

//Inicializar la BD
const firebase = initializeApp(firebaseConfig);
const db = getFirestore()

//Iniciar el sirvidor
const app = express()

//configuracion cors
const corsOptions = {
    "Origin": "*",
    "optionSuccessStatus": 200
}

app.use(express.json())
app.use(cors(corsOptions))

//configuracion rutas
//Rutas para insertar un nuevo registro
app.post('/insertar', (req, res) => {
    const { nombre, apaterno, amaterno, direccion, telefono, ciudad, estado, email} = req.body

    //validaciones de los datos
    if(nombre.length <3) {
        res.json({'alert': 'El nombre debe tener minimo 3 caracteres'})
    }
})

//Ruta para leer o traer todos los datos de una coleccion
app.get('/read', (req, res) => {

})

//Ruta para actualizar un registro de la coleccion
app.post('/update', (req, res) => {

})

//Ruta para borrar un registro de la coleccion
app.post('/delete', (req, res) => {

})

//Poner servidor escucha
const PORT = process.env.PORT || 20000

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
})