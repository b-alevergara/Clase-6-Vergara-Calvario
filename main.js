//como capturar datos desde un return?

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
//si estoy construyendo correctamente el objeto con los datos obtenidos?

const nuevaPersona = []{
nuevaPersona.push(new Persona( //aqui no estoy segura si funcionan los prompt y si funcionan los estoy guardando correctamente en el objeto?
nombre: prompt("Bienvenido, ingresa tu nombre"), 
edad: parseInt(prompt('Que edad tienes?')), 
empresa: prompt("A que empresa perteneces?"), 
codigoPostal: parseInt(prompt("Cual es tu codigo postal?"))
))}
nuevaPersona.informacion();

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
//map debe recibir un array con precios
function calculoIva(){
    return arr.map(Precio*0.16)
}    console.log(calculoIva(Precio))
//en teoria calculoIva crea un nuevo array y mi calculoTotal ya no seria necesario, porque este array
//ya me esta dando el resultado de la multiplicacion

function calculoTotal(){
    // return arr.reduce((a,b) => a+b)
    //aqui mas bien iria un alert que le ense;e al usuario el total
    alert( `El total de su compra es de $ ${calculoIva(Precio)}`)
}       console.log(calculoTotal())
//aqui ya me arrojaria el alert aunque no le haya puesto ningun array a la funcion?
