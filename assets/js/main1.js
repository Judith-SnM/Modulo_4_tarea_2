import{
    Impuestos
}from "./main2.js"

class Clientes {
constructor (nombre, impuesto){
    this.nombre =nombre
    this.impuesto=[]
}
set SetNombre(nombre){
    this.nombre.push(nombre)
}
get getNombre(){
    return this.nombre
}
calcularimpuesto(impuesto){
    return this.impuesto.find((Impuestos.montoBrutoAnual - Impuestos.deducciones)*0.21)
}

}
const Clientes = new Clientes();

console.log(calcularimpuesto)