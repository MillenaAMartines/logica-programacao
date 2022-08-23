
function somar ( a = 0,b = 0 ,c = 0,d = 0) { // pre definircum valor para o parametro faz com que ele posssa ser executato se um deles naao for passado evitando a mensagem nan

    return a + b + c + d 
}

console.log(somar ( 1,2,3,4 ) ); 
console.log( somar ( 1,2,3)) ; // é necessario passar todos os parametros  
console.log( somar ( 1,2)) ;
console.log( somar ( 1)) ;


