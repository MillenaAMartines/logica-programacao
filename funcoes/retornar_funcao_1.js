

//// 1

function retornar ( ) { 

    function bomDia( ) { 
        return "Bom Dia"; 
    }
    return bomDia; 
}

console.log( retornar ()); 
console.log( retornar ); 
console.log( retornar () ()); 


 /////// 2

 function retornarUmaFuncao () { 
    return function ( ) { 
        return "Boa Tarde!"
    }

 }

 console.log( retornarUmaFuncao () ()); 

 //// 3 

 function somar1 (a, b ) { 
    return a + b 

 }
 console.log(somar1( 3, 5)); 

 
 function somar2 (a ) { 
    return function ( b ) { 
        return a + b; 
    }

 }
 console.log( somar2 (1)(4)); 