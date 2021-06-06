const express = require ('express');
const Producto = require('./ClassProducto')

const app = express();

var router = express.Router()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/api', router)

var sesion = new Producto;

router.get('/productos', (req, res) => {
    res.json(sesion.listar(0||req.query.id))
    console.log(`get con id: ${req.query.id}`)
})
router.get('/productos/:id', (req, res) => {
    res.json(sesion.listar(req.params.id))
    console.log(`get con id: ${req.params.id}`)
})

router.post('/productos/', (req, res) => { //tiene que recibir JSON
    res.json(sesion.guardar(...Object.values(req.body)))
    console.log("POST")
})

router.put('/productos/:id', (req, res) => {
    let id = req.params.id
    res.json(sesion.actualizar(id,...Object.values(req.body)))
    console.log(`Actualizado con id: ${id}`)
})

router.delete('/productos/:id', (req, res) => {
    res.json(sesion.borrar(req.params.id||req.query.id))
    console.log(`borrado con id: ${req.params.id}`)
})
//Actualizar un producto (put) : '/api/productos/actualizar/:id' -> devuelve producto actualizado
//Borrar un producto (delete) : '/api/productos/borrar/:id' -> devuelve producto eliminado
//ncorporar el Router de express en la url base '/api' y configurar todas las subrutas en base a este.
//Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
const puerto = 8080;
const server = app.listen(puerto, () => { 
   console.log(`Servidor inicializado en ${server.address().port}`) 
})
server.on("error", error => console.log(`Error en servidor: ${error}`))