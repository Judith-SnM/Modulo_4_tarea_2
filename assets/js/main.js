import {
    Impuestos
} from "./main2.js"

import {
    Clientes
} from "./main1.js"

const cliente = new Clientes();

const calculo1 = new Impuestos(378, 268);
const calculo2 = new Impuestos(500, 100);

cliente.setnombre = calculo1;
cliente.setnombre = calculo2;

console.log(cliente.getnombre);
console.log(cliente.calcularimpuesto());

