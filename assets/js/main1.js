export class Clientes {
    constructor() {
        this.nombre = [];
       
    }
    set setnombre (Impuestos) {
        this.nombre.push(Impuestos);
    }
    get getnombre () {
        return this.nombre;
    }
    calcularimpuesto () {
        return this.nombre.map(Impuestos => (Impuestos.getMontoBrutoAnual - Impuestos.getdeducciones) * 0.21)
    }
}