
// # 1 funcao COM parametro e COM retorno.  
function soma( a, b ) {  // recebe parametro de entrada e  retorna  algo em resposta dessa funcao, 
    return a + b ; 
    

}

let resultado = soma( 30, 56);  
console.log ( "resultado da operacao: ", resultado );  
console.log ( soma( 30,56) ); 



// #2 funcao Com parametro e SEM retorno. 

function exibirMultiplicao ( a, b) {
    console.log( a * b); 

}

exibirMultiplicao ( 10 , 40) ; 


// #3v funcao SEM parametro e COM retorno  

function retornarDataAtual ( ) {  // nao foi necessario passar nenhum parametro para obter o resultado.  
 return new Date (); 
}

console.log ( retornarDataAtual ( ) );  


// #3v funcao SEM parametro e Sem retorno 

function exibirHoraAtal ( ) {
    console.log ( new Date ().getHours ( )); 
}

exibirHoraAtal ( ); 