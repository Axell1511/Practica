//Importamos express
const express = require("express");
const ejs = require("ejs")
var path = require("path")



//Creamos nuestra app
const app = express();

//Implementando EJS-Motor de plantillas HTML
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//
app.use(express.static('public'));



    //Acceso a Home
    app.get("/", (req, res)=>{
        res.render("cursos")

    })

    app.get("/cursos", (req, res) => {
        res.render("cursos");
    });
    
    app.get("/contactos", (req, res) => {
        res.render("contactos");
    });
    
    app.get("/soporte", (req, res) => {
        res.render("soporte");
    });
    
    app.get("/registro", (req, res) => {
        res.render("registro");
    });
    
    app.get ("/style.css", (req,res)=>{
        res.sendFile(__dirname + "/public/css/style.css")
    });

//Publicamos nuestro App
app.listen(3001, (req, res)=>{
    //console.log("Mi App esta corriendo en el puerto 3001")

})