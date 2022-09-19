//como capturar datos desde un return?
//construir un objeto con los datos obtenidos
class Persona {
    constructor(nombre, edad, empresa, codigoPostal) {
        this.nombre = nombre;
        this.edad = edad;
        this.empresa = empresa;
        this.codigoPostal = codigoPostal;
    }
    informacion(){
        console.log("El usuario se llama "+ this.nombre + "y pertenece a la empresa " + this.empresa)
    }
}
const nuevaPersona = new Persona(  //aqui no estoy segura si funcionan los prompt y si funcionan los estoy guardando correctamente en el objeto?
    {nombre: prompt("Bienvenido, ingresa tu nombre"), 
    edad: parseInt(prompt('Que edad tienes?')), 
    empresa: prompt("A que empresa perteneces?"), 
    codigoPostal: parseInt(prompt("Cual es tu codigo postal?"))
});
nuevaPersona.informacion();

//y por fuera guardarlos en un array de usuarios
//puedo acceder a propiedades de un objeto? 
//no son como las funciones, que no puedo acceder a ellas?



if(nuevaPersona.edad >18){ 
    alert('Eres mayor de edad')
}else{
alert('Eres menor de edad')
}

for(let i=0; i<101; i++){
alert('Eres la persona numero '+ i + ' en ingresar a la pagina')
}
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
//aqui no se como conectar la opcion que el usuario ingresa, para pasar a hacerle el calculo del iva del producto seleccionado


//array de precios 
const Precio = [450]
//map debe recibir un array con precios para que logre crear un nuevo array
//de los precios mas el iva
function calculoIva(arr){
    return arr.map(Precio*0.16)
}    console.log(calculoIva)

function calculoTotal(arr){
    return arr.reduce((a,b) => a+b)
}       console.log(calculoTotal)
//al llamar las funciones que usan arrays no les estoy pasando un array(porque en parametro puse array)
calculoTotal( 450, calculoIva)
alert(`El total de su compra es de $ ${calculoTotal}`)
