
class Crucero {

constructor(numeroDeButaca, destino, precioPasaje) {
this.numeroDeButaca = numeroDeButaca;
this.destino = destino;
this.cantidadDeAsientos = cantidadDeAsientos;

this.confirmarAsientos();
}

confirmarAsientos () {
    this.asiento = [];

     for(let i = 0; i < 30; i++){

      const asiento = new asiento (i, false);
      this.asientos.push (asiento);

     }

}
}

class Asiento {
    constructor(id, ocupado){
    this.id = id;
    this.ocupado = ocupado;
    }
}

function obtenerCrucero(numeroDeCrucero){
return listaDeCruceros.find((Crucero) => {
    return Crucero.numeroDeButaca === numeroDeButaca;
}
)};

function hayLugaresDisponibles(crucero,cantidadDeAsientos){
    const asientosDisponibles = crucero.asiento.filter((asiento) => {
        return !asiento.ocupado;
    })};

    return asientosDisponibles.lenght >= cantidadDeAsientos;

const listaDeCruceros = [
    new Crucero("cd3456", "brasil", 30),

    new Crucero("ab1234", "uruguay", 50),
     
    new Crucero("jh9999", "mexico", 20),

];

let viajeAComprar = prompt("ingrese el viaje que quiere comprar. Ingrese SALIR si quiere salir del programa");

while(viajeAComprar !== "SALIR"){
    const Crucero = obtenerCrucero(viajeAComprar)
    if(Crucero !== undefined){
     
        let cantidadDeAsientos = parseInt(prompt("ingrese la cantidad de asientos que desea comprar"));
        while(cantidadDeAsientos <= 0 || !hayLugaresDisponibles(crucero, cantidadDeAsientos)) {
            cantidadDeAsientos = parseInt(prompt("ingrese la cantidad de asientos que desea comprar"));
        }



    } else{
        alert("numero de crucero invalido");
    }
    
    
    viajeAComprar = prompt("ingrese el viaje que quiere comprar. Ingrese SALIR si quiere salir del programa");


}