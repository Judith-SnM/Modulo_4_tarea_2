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
