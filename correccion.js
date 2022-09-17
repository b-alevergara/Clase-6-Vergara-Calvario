function usuarioNuevo(){
    let nombre = prompt("Bienvenido, ingresa tu nombre y apellido");
    let edad = parseInt(prompt('Que edad tienes?'));
    let empresa = prompt("A que empresa perteneces?");
    let codigoPostal = parseInt(prompt("Cual es tu codigo postal?"))
//esta mal que sean undefined?
//por que no me arroja el prompt?
    return (nombre, edad, empresa, codigoPostal)
}
console.log(`El nombre de la persona es ${usuarioNuevo.nombre}`);
console.log(`El codigo postal al que pertenece es ${usuarioNuevo.codigoPostal}`);

if(edad >18){
    alert('Eres mayor de edad')
}else{
alert('Eres menor de edad')
}
console.log(usuarioNuevo.edad)

for(let i=0; i<101; i++){
alert('Eres la persona numero '+ i + ' en ingresar a la pagina')
}
//aqui deberia empezar a preguntar los productos
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
        opciones = parseInt(prompt('Elige el producto que deseas adquirir: \n1.-Caucho Granulado \n2.-Caucho Pulverizado \n3.-Salir'))
    while(opciones != '3' ){
        switch (opciones){
            case 1:
                alert('Caucho Granulado')
                break;
            case 2: 
                alert('Caucho Pulverizado')
                break;
            case 3:
                alert('Salir')
                break;
            default: 
                alert('Opción inválida')
}
}    
}
//aqui encontrar forma de vicular los productos que el cliente selecciona, y preguntarle cantidad
//para sacar calculos con la cantidad
//puedo copiar lo que hice en la pre entrega,
//pero coo le pongo los arrays?

let precios = [450, 650];

function sumarProductos(precio){
    return precio.reduce((a,b) => a+b)
}
console.log(precios)
console.log(sumarProductos(precios))
alert(`El costo de los productos seleccionados es $ ${sumarProductos(precios)}`)

function calculoIva(arr){
    return arr.map(precios => precios*0.16)
}
console.log(calculoIva(precios))

function calculoTotal(arr){
    return arr.reduce((a,b) => a+b)
}
console.log(calculoTotal((sumarProductos(precios)),(calculoIva(precios))))
//no estoy segura que este console log funcione
alert(`El costo total de tu pedido es de $ ${calculoTotal((sumarProductos(precios)),(calculoIva(precios)))}`)


