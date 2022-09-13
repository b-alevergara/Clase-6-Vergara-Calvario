//trasladar el proyecto a concepto de objetos,
//1. incorporar al menos un array al proyecto (que agrupe elementos similares)
//2. utilizar algunos metodos o propiedades
//ejemplos: array de productos


function usuarioNuevo(){
    let nombreCompleto = prompt('Bienvenido, ingresa tu nombre y apellido');
    let edad = parseInt(prompt('Que edad tienes?'));
    let empresa = prompt('A que empresa perteneces?');
    let codigoPostal = prompt('Cual es tu codigo postal?')
}
console.log("El nombre de la persona es "+usuarioNuevo.nombreCompleto);
console.log("El codigo postal al que pertenece es "+usuarioNuevo.codigoPostal);

if(edad >18){
    alert('Eres mayor de edad')
}else{
alert('Eres menor de edad')
}
console.log(usuarioNuevo.edad)

for(let i=0; i<101; i++){
alert('Eres la persona numero '+ i + ' en ingresar a la pagina')
}

class producto {
    constructor(unidad, nombre, precio) {
        this.unidad = unidad;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const producto1 = new producto("Kilo de ", "Caucho granulado ", "$450");
return producto1;

const producto2 = new producto("Kilo de ", "Caucho pulverizado ", "$650");
return producto2;

let precioGranulado = 450
let precioPulverizado = 650 

function sumaProductos(a,b){
    return a+b 
}
let resultado= sumaProductos(precioGranulado, precioPulverizado )
console.log(resultado)

function mostrarTotal (total){
alert('El costo de los productos seleccionados es '+total)
}
console.log(mostrarTotal('$1,100'))

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
// }    
// }


const precioMasIva = IVA.map((a+b*iva) =>(a+b)*.16)
console.log(precioMasIva)

const SUMA = [450, 650].reduce((a,b)=>a+b) 
console.log(SUMA)
