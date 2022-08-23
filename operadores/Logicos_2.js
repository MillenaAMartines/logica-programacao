const T1 = true;
const T2 = true;

const comprarTV50 = T1 && T2
console.log("Vamos comprar a TV 50 ? " + (comprarTV50)); // AND

const comprarTv32 = T1 !== T2
console.log("Vamos comprar a TV 32 ?" + (comprarTv32)); // XOR

let TomarSorvete = T1 || T2; 
console.log("Vamos comprar Sorvete ?" + (TomarSorvete)); // OR

let ficarEmCasa = !TomarSorvete
console.log("Vamos ficar em casa ?" + (ficarEmCasa)); // NOT