const productos = [
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
console.log(`el total a pagar por su compra es: ${total }`)