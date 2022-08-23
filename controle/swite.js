
let nota = 12; 
 
switch ( Math.ceil ( nota)) { 

    default : 
    console.log ( "nota invalida")
    break; 
    
    case 10 :
    case 9 :     
    case 8 : 
    console.log ( "parabens ")
    break; 

    case 7 :
    case 6 :

    case 5 :     
    console.log ( "na media")
    break; 

    case 4 : 
    case 3 : 
    case 2: 
    case 1: 
    case 0 : 
    console.log( "reprovado ")

}
console.log( "fim")