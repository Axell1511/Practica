//Importamos express
const express = require("express");

//
var path = require("path")



//Creamos nuestra app
const app = express();

//Implementando EJS-Motor de plantillas HTML
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//
app.use( express.static(path.join(__dirname, 'public')))


//Acceso a Home
app.get("/", (req, res)=>{
    res.render("index")

})

//Acceso a Cursos
app.get("/cursos", (req, res)=>{
    res.render("cursos")

})

//Acceso a Contactos
app.get("/contactos", (req, res)=>{
    res.render("contactos")

})

//Acceso a Soporte
app.get("/soporte", (req, res)=>{
    res.render("soporte")

})

//Acceso a Registro
app.get("/registro", (req, res)=>{
    res.render("registro")

})

//Publicamos nuestro App
app.listen(3001, (req, res)=>{
    //console.log("Mi App esta corriendo en el puerto 3001")

})