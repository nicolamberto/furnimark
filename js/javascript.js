
let stockProductos = [
    {id: 1, nombre: "frapera1", tipo: "bazar", cantidad: 1, desc: "Frapera de plata", precio: 2450, img:'../recursos/bazar-cocteleraindian.webp'},
    {id: 2, nombre: "frapera2", tipo: "bazar", cantidad: 1, desc: "Frapera albina", precio: 3750, img:'../recursos/bazar-fraperabalbina.webp'},
    {id: 3, nombre: "fraperaamery", tipo: "bazar", cantidad: 1, desc: "Frapera amery", precio: 5125, img:'../recursos/bazar-fraperaemery.webp'},
    {id: 4, nombre: "frascocafe", tipo: "bazar", cantidad: 1, desc: "Frasco para cafe", precio: 2330, img:'../recursos/bazar-frascocafe.webp'},
    {id: 5, nombre: "servilleteroarctic", tipo: "bazar", cantidad: 1, desc: "Servilletero arctic", precio: 2450, img:'../recursos/bazar-servilleteroartic.webp'},
    {id: 6, nombre: "taponindian", tipo: "bazar", cantidad: 1, desc: "Tapon indian", precio: 1220, img:'../recursos/bazar-tapoindia.webp'},
    {id: 7, nombre: "taponconejo", tipo: "bazar", cantidad: 1, desc: "Tapon cola de conejo", precio: 1550, img:'../recursos/bazar-taponconejo.webp'},
    {id: 8, nombre: "tazavidrio", tipo: "bazar", cantidad: 1, desc: "Taza de vidrio pequena", precio: 2000, img:'../recursos/bazar-tazas.webp'},
    {id: 9, nombre: "exhibidorvigo", tipo: "bazar", cantidad: 1, desc: "Exhibidor vigo", precio: 2950, img:'../recursos/bazar-exhibidorvigo.webp'},
    {id: 10, nombre: "mantel", tipo: "bazar", cantidad: 1, desc: "Mantel de seda", precio: 950, img:'../recursos/bazar-mantel.webp'},
    {id: 11, nombre: "bowl", tipo: "bazar", cantidad: 1, desc: "Bowl vidrio", precio: 7250, img:'../recursos/bazar-bowl.webp'},
    {id: 12, nombre: "frapera1", tipo: "bazar", cantidad: 1, desc: "Frapera de plata", precio: 2450, img:'../recursos/bazar-cocteleraindian.webp'},
    {id: 13, nombre: "juegote", tipo: "bazar", cantidad: 1, desc: "Juego de te", precio: 11250, img:'../recursos/bazar-juegodete.webp'},
    {id: 14, nombre: "posavasos", tipo: "bazar", cantidad: 1, desc: "Posa vasos en forma de dados", precio: 2450, img:'../recursos/bazar-posavasosdados.webp'},
    {id: 15, nombre: "tenedores", tipo: "bazar", cantidad: 1, desc: "tenedores", precio: 2450, img:'../recursos/bazar-tenedores.webp'},
    {id: 16, nombre: "vasos", tipo: "bazar", cantidad: 1, desc: "vasos prequenos", precio: 2450, img:'../recursos/bazar-vasos.webp'}
]

const contenedorProductos = document.getElementById("contenedor-productos")

const contenedorCarrito = document.getElementById("carrito-contenedor")

const botonVaciar = document.getElementById("vaciar-carrito")

const contadorCarrito = document.getElementById("contadorCarrito")

let precioTotal = document.getElementById("precioTotal")
let carrito = []

//______________________________________________________________________________________________________________________________________________________//


botonVaciar.addEventListener("click", () => {
    carrito.length = 0,  //se iguala el tamaño del carrito a cero cada vez que se haga click en el boton de vaciar Carrito
    actualizarCarrito()  // se ejecuta la funcion de actualizar carrito
})



//______________________________________________________________________________________________________________________________________________________//


stockProductos.forEach((producto)=> {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML =`               

    <div data-aos="zoom-in" >
                    <div class="productos__flex">
                        <img class="prodImag" src=${producto.img} alt="imagen dieciseis">
                        <p class="card-title">${producto.desc} </p>
                        <p><strong>${producto.precio} </strong></p>
                        <div class="botones__productos">
                        <button id="agregar${producto.id}" class="btn btn-outline-light hvr-shutter-out-horizontal agregar">Agregar</button>
                        
                        </div>
                    </div>
                </div>
    `
    contenedorProductos.appendChild(div)

  let boton = document.getElementById(`agregar${producto.id}`) //creamos la constante para que busque
                                                                 // el id del boton obteniendo el elemento (id)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)   
     })                                              // a dicho elemento (id) le agregamos el addEventListener

})



//______________________________________________________________________________________________________________________________________________________//



const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito)
}




//______________________________________________________________________________________________________________________________________________________//




const eliminarDelCarrito = (prodId) => {   //cuando llamo al eliminar del carrito recibo la id del producto, lo busco por find dentro
                                         //del parametro
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}





//______________________________________________________________________________________________________________________________________________________//





const actualizarCarrito = ()=> {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p>${prod.nombre} </p>
        <p>Precio ${prod.precio} </p>
        <p>Cantidad <span id="cantidad">${prod.cantidad} </span> </p>
        <button onclick ="eliminarDelCarrito(${prod.id} )" class="boton-eliminar><i class = "fas fa-tras-alt"></i> </button>
        
        `
        //a cada boton creado para eliminar del carrito le corremos el evento y la funcion eliminarDelCarrito
        contenedorCarrito.appendChild(div)
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio, 0)
}

localStorage.setItem("nombre", "nicolas")
localStorage.setItem("apelido", "lamberto")



// por cada producto que recorra mi carrito le digo al acumulador que le sume la propiedad precio
// a mi producto y le damos el valor inicial (0) 



//______________________________________________________________________________________________________________________________________________________//

/* const openModal = document.querySelector('.abrirmodal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
 */
