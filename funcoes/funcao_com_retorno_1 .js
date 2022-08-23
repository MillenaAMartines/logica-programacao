function sempreRetornaUm () {
    return 1 ;
}

function textoOuNumero(retornaTexto) {
    if( retornaTexto) {  // se for verdadeiro ele retorna sou um texto - se for falso retorna 123
        return "sou um texto!";
    
    } else {
        return 123;  // quando usado sera interrompido qualquer coisa que vem  a seguir.  
    }

}

let valor = sempreRetornaUm () ; 

console.log ( valor); 

let texto  = textoOuNumero (true); 
console.log (texto); 

console.log (textoOuNumero ( false) ) ;
