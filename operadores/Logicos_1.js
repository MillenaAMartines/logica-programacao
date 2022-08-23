let temDinheiro = false; 
let estaEnsolarado = true; 
let carrosEstaNaGarragem = true;

let resultadoE = "1# AND vai para o shopping ?";    // preciso dos dois criterios para a resposta ser positiva = true.
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "2# OR vai para o shopping ?"; 
resultadoOU += estaEnsolarado || carrosEstaNaGarragem;
console.log(resultadoOU);

console.log(true !=+ true); 
console.log(true !== false); 
console.log(false !== true); 
console.log(false !== false); 

console.log( "nao verdadeiro: " + !true); 
console.log("nao falso: " + !false);
