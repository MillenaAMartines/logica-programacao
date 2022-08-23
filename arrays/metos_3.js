const numeros = [ 10,20,30]; 

numeros.forEach(function() { 
    console.log("dentro do foreach"); 
}); 


function paraCadaElemento( elemento,indice,array) { 
    console.log(elemento,indice,array)
}

numeros.forEach(paraCadaElemento); 

