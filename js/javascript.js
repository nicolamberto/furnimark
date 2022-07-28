
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

let carrito = []

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

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}


