let stockProductos = [
    {id: 17, tipo: "iluminacion", cantidad: 1, desc: "Frapera de plata", precio: 2450, img:'../recursos/iluminuno.webp'},
    {id: 18, tipo: "iluminacion", cantidad: 1, desc: "Frapera albina", precio: 3750, img:'../recursos/ilumindos.webp'},
    {id: 19, tipo: "iluminacion", cantidad: 1, desc: "Frapera amery", precio: 5125, img:'../recursos/ilumintres.webp'},
    {id: 20, tipo: "iluminacion", cantidad: 1, desc: "Frasco para cafe", precio: 2330, img:'../recursos/ilumincuatro.webp'},
    {id: 21, tipo: "iluminacion", cantidad: 1, desc: "Servilletero arctic", precio: 2450, img:'../recursos/ilumincinco.webp'},
    {id: 22, tipo: "iluminacion", cantidad: 1, desc: "Tapon indian", precio: 1220, img:'../recursos/iluminseis.webp'},
    {id: 23, tipo: "iluminacion", cantidad: 1, desc: "Tapon cola de conejo", precio: 1550, img:'../recursos/iluminsiete.webp'},
    {id: 24, tipo: "iluminacion", cantidad: 1, desc: "Taza de vidrio pequena", precio: 2000, img:'../recursos/iluminocho.webp'},
    {id: 25, tipo: "iluminacion", cantidad: 1, desc: "Exhibidor vigo", precio: 2950, img:'../recursos/iluminnueve.webp'},
    {id: 26, tipo: "iluminacion", cantidad: 1, desc: "Mantel de seda", precio: 950, img:'../recursos/ilumindiez.webp'},
    {id: 27, tipo: "iluminacion", cantidad: 1, desc: "Bowl vidrio", precio: 7250, img:'../recursos/iluminonce.webp'},
    {id: 28, tipo: "iluminacion", cantidad: 1, desc: "Frapera de plata", precio: 2450, img:'../recursos/ilumindoce.webp'},
    {id: 29, tipo: "iluminacion", cantidad: 1, desc: "Juego de te", precio: 11250, img:'../recursos/ilumintrece.webp'},
    {id: 30, tipo: "iluminacion", cantidad: 1, desc: "Posa vasos en forma de dados", precio: 2450, img:'../recursos/ilumincatorce.webp'},
    {id: 31, tipo: "iluminacion", cantidad: 1, desc: "tenedores", precio: 2450, img:'../recursos/luminquince.webp'},
    {id: 32, tipo: "iluminacion", cantidad: 1, desc: "vasos prequenos", precio: 2450, img:'../recursos/ilumindieciseis.webp'},
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
        const existe = carrito.some(prod => prod.id === prodId)
    
        if(existe) {
            const prod = carrito.map (prod => {
                if(prod.id === prodId){
                    prod.cantidad++
                }
            })
        } else {
        
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
        console.log(carrito)
    }
    
    actualizarCarrito()
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
            <p>${prod.desc} </p>
            <p>Precio ${prod.precio} </p>
            <p>Cantidad <span id="cantidad">${prod.cantidad} </span> </p>
            <button onclick ="eliminarDelCarrito(${prod.id} )" class="boton-eliminar">x</button>
            
            `
            //a cada boton creado para eliminar del carrito le corremos el evento y la funcion eliminarDelCarrito
            contenedorCarrito.appendChild(div)
    
            localStorage.setItem("carrito", JSON.stringify(carrito))
        })
        //contadorCarrito.innerText = carrito.length
        precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio, 0)
    }
    
    localStorage.setItem("nombre", "nicolas")
    localStorage.setItem("apelido", "lamberto")
    
    
    
    // por cada producto que recorra mi carrito le digo al acumulador que le sume la propiedad precio
    // a mi producto y le damos el valor inicial (0) 
    
    
    
    //______________________________________________________________________________________________________________________________________________________//
    
    const openModal = document.querySelector('.hero__cta');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal-close');
    
    openModal.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.style.display = "flex";
    });
    
    closeModal.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.style.display = "none";
    });
     
    

