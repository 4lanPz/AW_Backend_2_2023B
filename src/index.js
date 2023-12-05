// Creacion de un web server en express
// Invocar la librewrpia de express
const express = require('express') //commonjs
// import { engine } from 'express-handlebars'; //esmodules
 const {engine} = require ('express-handlebars')

// crear una instancia de la variable express
const app = express()

// utilizar un motor de plantillas
app.engine('handlebars', engine());
// extension de las paginas
app.set('view engine', 'handlebars');
// ubicacion del directorio views
//path 
// const ruta = path.join(--dirname,"views")
app.set('views', './src/views');



// ---------- ruta "/" - request / response se entrega----------------
// si importa el orden de la ruta
// app.get('/',(req,res)=>{
//     res.send("Bienvenue")
// })

// app.get('/dashboard',(req,res)=>{
//     res.send("Dashboard principal")
// })

// app.use((req,res)=>{
//     res.send("404 - Not Found")
// })
// ---------- ruta ----------------

app.use(express.json())

// app.post('/register',(req,res)=>{
//     const{pedido,solicitado} = req.body // desestructuracion
//     res.send(`el pedido de ${pedido} es realizado por ${solicitado}`)
//     // console.log(req.body)
// })

app.use(express.json())

// app.get('/pedido/:tipo',(req,res)=>{
//     // console.log(req.params)
//     res.send(`El pedido es hamburguer ${req.params.tipo}`)
// })

// app.get('/search',(req,res)=>{
//     // console.log(req.query)
//     if (req.query.tipo ==="sencilla"){
//         res.send("hamborguesa sencilla")
//     }
//     else {
//         res.send("otra hamborguesa")
//     }
// })

app.get('/hamburguesa/simple',(req,res)=>{
    res.send('hamborguesa - simple')
})
console.log(__dirname)
app.get('/hamburguesa/doble',(req,res)=>{
    res.sendFile('./amborguesa.jpg',{
        root:__dirname
    })
})
app.get('/hamburguesa/neco',(req,res)=>{
    res.sendFile('./neco-arc-dance.gif',{
        root:__dirname
    })
})
app.get('/hamburguesa/texto',(req,res)=>{
    res.sendFile('./texto.docx',{
        root:__dirname
    })
})
app.get('/hamburguesa/texto2',(req,res)=>{
    res.sendFile('./textochido.txt',{
        root:__dirname
    })
})
app.get('/hamburguesa/mixta',(req,res)=>{
    res.status(200).json({
        "tipo":"mixta",
        "extra":"No"
    })
})

//iniciar el servidor en el puerto 3000
app.listen(3000)
console.log("Web server ejecutandonse en el puerto 3000")

// handlebars codigo

app.get('/hamburguesa/vegana', (req, res) => {
    res.render('home');
});
app.get('/hamburguesa/contactos', (req, res) => {
    res.render('contactos');
});
//
// app.get('/hamburguesa/contactos', (req, res) => {
//    //request peticion cliente
//    req.body
//    req.params
//    req.query
//    // responder al usuario desde el servidor
//    res.send()
//    res.sendFile()
//    res.json()
//    res.render()
// });
//publicas

// app.get('/entrada', (req, res) => {
//     res.send("Entrada al local")
// })
// //crear un Middleware
// app.use((req,res,next)=>{
//     const {email,password} = req.body
//     if(email === "alan@gmail.com" && password === "12345"){
//         next()
//     }
//     else {
//         res.send("usuario no registrado")
//     }
// })
// //privadas
// app.get('/dashboard', (req, res) => {
//     res.send(`Bienvenido ${req.body.email} Listo para tomar su orden`)
// })

app.get('/', (req, res) => {
    res.send("landing page")
})
app.get('/dashboard', (req, res) => {
    res.send(`Bienvenido ${req.body.email} Listo para tomar su orden`)
})
app.get('/contacto', (req, res) => {
    res.send(`que pex xd`)
})
