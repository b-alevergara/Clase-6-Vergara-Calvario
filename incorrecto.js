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
    constructor(unidad, nombre, precio, cantidad) {
        this.unidad = unidad;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    costo=() => this.precio * this.cantidad;
}
const producto1 = new producto("Kilo de ", "Caucho granulado ", "$450", 10);
return producto1;

const producto2 = new producto("Kilo de ", "Caucho pulverizado ", "$650", 5);
return producto2;

let precioGranulado = 450
let precioPulverizado = 650 

const SUMA = [{precioGranulado}, {precioPulverizado}].reduce((a,b)=>a+b) 
alert('El costo de los productos seleccionados es '+total)
console.log(SUMA)

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


const precioMasIva = IVA.map((a+b*iva) => (a+b)*.16);
console.log(precioMasIva)
//pendiente cambiar el calculo del iva 

