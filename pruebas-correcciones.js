function usuarioNuevo(){
    let nombre = prompt("Bienvenido, ingresa tu nombre y apellido");
    let edad = parseInt(prompt('Que edad tienes?'));
    let empresa = prompt("A que empresa perteneces?");
    let codigoPostal = parseInt(prompt("Cual es tu codigo postal?"))
    alert(`El nombre ingresado es ` + nombre + `y peretenece a la empresa ` + empresa)
    return (nombre, edad, empresa, codigoPostal)
}
console.log(nombre + edad + empresa + codigoPostal)
usuarioNuevo()

if(usuarioNuevo(edad) >18){
    alert('Eres mayor de edad')
}else{
alert('Eres menor de edad')
}

for(let i=0; i<101; i++){
alert('Eres la persona numero '+ i + ' en ingresar a la pagina')
}
class producto {
    constructor(unidad, nombre, precio, cantidad) {
        this.unidad = unidad;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    costo=() => this.precio * this.cantidad; //revisar esto
}
const producto1 = new producto("Kilo de ", "Caucho granulado ", "$450", 1);
return producto1;
const producto2 = new producto("Kilo de ", "Caucho pulverizado ", "$650", 1);
return producto2;

let opciones 
    do{
        opciones = parseInt(prompt('Selecciona el producto a comprar: \n1.-Caucho Granulado \n2.-Salir'))}
    while(opciones != '2' ){
        switch (opciones){
            case 1:
                alert('Kilo de Caucho Granulado - $450')
                break;
            case 2:
                alert('Salir')
                break;
            default: 
                alert('Opción inválida')
}
}    
let precio = [450];
// function sumarProductos(precios){
//     return precios.reduce((a,b) => a+b)
// }
// console.log(precios)
// console.log(sumarProductos(precios))
function calculoIva(arr){
    let precio = 450
    return arr.map(precio*0.16)
}    console.log(calculoIva)

function calculoTotal(arr){
    return arr.reduce((a,b) => a+b)
}       console.log(calculoTotal)
// console.log(calculoTotal((sumarProductos(precios)),(calculoIva(precios))))
//no estoy segura que este console log funcione
// alert(`El costo total de tu pedido es de $ ${calculoTotal((sumarProductos(precios)),(calculoIva(precios)))}`)

// sumarProductos(450, 650)
calculoTotal( 450, calculoIva)
// alert(`El costo de los productos seleccionados es $ ${sumarProductos}`)
alert(`El total de su compra es de $ ${calculoTotal}`)

