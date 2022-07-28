/* const productos = [
    {nombre: "mixer", precio: 2500},
    {nombre: "frapera de plata", precio: 2560},
    {nombre: "frapera con frase champagne", precio: 3450},
    {nombre: "hielera de plata", precio: 1240},
    {nombre: "servilletero de plata", precio: 1110},
    {nombre: "tapador de plata", precio: 1050},
    {nombre: "wiskera de vidrio", precio: 7550},
    {nombre: "taza pequenia de vidrio", precio: 2000}
];

 let carrito = [];

 let seleccion = prompt("desea comprar un producto? responda si o no")

 while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa si o no")
    seleccion = prompt("desea comprar un producto? responda si o no")
 }


 if(seleccion == "si" ){
    alert("a continuacion la lista de todos nuestros productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$"
    )
    alert(todosLosProductos.join(" - "))
 } else if (seleccion == "no") {
    alert("gracias por venir, hasta pronto")
 }

while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "mixer" || producto == "frapera de plata" || producto == "frapera con frase champagne" || 
    producto == "hielera de plata" || producto == "servilletero de plata" || producto == "tapador de plata" || 
    producto == "wiskera de vidrio" || producto == "taza pequenia de vidrio" ) {
        switch(producto) {
            case "mixer":
            precio = 2500;
            break;

            case "frapera de plata":
            precio = 2560;
            break;

            case "frapera con frase champagne":
            precio = 3450;
            break;

            case "hielera de plata":
            precio = 1240;
            break;

            case "servilletero de plata":
            precio = 1110;
            break;

            case "tapador de plata":
            precio = 1050;
            break;

            case "wiskera de vidrio":
            precio = 7550;
            break;

            case "taza pequenia de vidrio":
            precio = 2000;
            break;
            default:
            break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
    carrito.push({producto, unidades, precio})
    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando?")

    while (seleccion == "no") {
        alert("gracias por tu compra, lo esperamos nuevamente")
        carrito.forEach((carritoFinal)=>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            el total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break
    }
} 

const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total }`) */

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

     /* boton.onclick = ()=> {
        agregarAlCarrito(producto.id)  + ´ ´{ ñ l  [ ; / . l [ ']}
     } */
})

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}


