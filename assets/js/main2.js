export class Impuestos {
    constructor(MontoBrutoAnual, deducciones) {
        this.MontoBrutoAnual = MontoBrutoAnual
        this.deducciones = deducciones
    }
    get getMontoBrutoAnual() {
        return this.MontoBrutoAnual;
    }
    get getdeducciones() {
        return this.deducciones;
    }
    set setMontoBrutoAnual(value) {
        this.MontoBrutoAnual = value;
    }
    set setdeducciones(value) {
        this.deducciones = value;
    }

}
const calculo1 = new Impuestos(345, 268);
const calculo2 = new Impuestos(500, 100);