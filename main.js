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

let precio = 450;

function calculoIva(arr){
    let precio = 450
    return arr.map(precio*0.16)
}    console.log(calculoIva)

function calculoTotal(arr){
    return arr.reduce((a,b) => a+b)
}       console.log(calculoTotal)

calculoTotal( 450, calculoIva)
alert(`El total de su compra es de $ ${calculoTotal}`)
