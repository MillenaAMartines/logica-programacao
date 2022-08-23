const A = 8; 
const B = 4; 
const operacao = "+" ;  // * - / . 


const resultado = operacao === "+" ? A + B : operacao ===  "-" ? A - B :operacao ===  "*" ? A*B : A/B;


console.log( resultado) ;
