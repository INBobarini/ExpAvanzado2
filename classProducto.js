var idCounter = 0;
var listado = [];
var borrados = [];
class Producto {
    constructor(){

    }
    listar(id){
        if (!id){
            if (listado.length === 0){
                return {error:"no hay productos cargados"}
            }
            return listado;
        }
        else {
            if((listado.findIndex(e => e.id == id))==-1){
                return {error:"producto no encontrado"}
            }
            return listado.find(e => e.id == id);
        }
    }
    guardar(titulo, precio, url){
        listado.push({
            title: titulo,
            price: precio,
            thumbnail: url,
            id: ++idCounter
        })
        return listado.find(e => e.id == idCounter);
    }
    actualizar(id, titulo, precio, url){
        let updId = listado.findIndex(e => e.id == id);
        if(updId==0){return {error:"producto no encontrado"}}
        listado[updId].title = titulo; //tiene que haber una mejor forma
        listado[updId].price = precio;
        listado[updId].url = url;
        listado[updId].id = id;
        if(id > idCounter) idCounter = id;  
        return listado[updId];
    }

    borrar (id){
        let prodBorrado = listado.find(e => e.id == id);
        let delId = listado.findIndex(e => e.id == id)
        listado[delId] = {producto:"borrado"}
        borrados.push(prodBorrado);
        console.log(prodBorrado)
        return prodBorrado;
    }
}

var prueba = new Producto;
prueba.guardar("regla", 25, "url")
prueba.guardar("goma", 15, "url")
//console.log(prueba.listar(1))
//console.log(prueba.listar())
//prueba.actualizar(1,"sacapuntas",12,"url")
//prueba.borrar(1)
//console.log(listado)
module.exports = Producto;