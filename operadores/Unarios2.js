let a = 1 ; 
let b = 2 ;

console.log( ++a === b++); // codigo confuso; e por conta da maior prioridade ele faz a leitura errada. 

{
    a++; 
    console.log( a === b); // um codigo melhor do que o de cima para se compreender 
    b++;
}


console.log( a === b); 
