import {
    Impuestos
} from "./main2.js"

class Clientes {
    constructor(nombre) {
        this.nombre = nombre;
        this.impuesto = [];
    }
    set Setimpuesto(Impuestos) {
        this.impuesto.push(Impuestos)
    }
    get getimpuesto() {
        return this.impuesto;
    }
    calcularimpuesto() {
        return this.impuesto.map(impuesto => (impuesto.getMontoBrutoAnual - impuesto.getdeducciones) * 0.21)
    }

}
const clientes = new Clientes();

const calculo1 = new Impuestos(345, 268);
const calculo2 = new Impuestos(500, 100);

clientes.Setimpuesto = calculo1
clientes.Setimpuesto = calculo2

console.log(clientes.getimpuesto);
console.log(clientes.calcularimpuesto())