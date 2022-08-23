
const numeros = [ 10,20,30]
const produto = {
    nome: "caneta", preco: 9.99, desconto: 0.2
} ; 

console.log( typeof produto); 
console.log(numeros[0]); 

console.log(produto.nome);  // acessa o que esta dentro do objeto.  
console.log(produto.preco); 
console.log(produto.preco);

console.log(produto[`nome`]); // forma de acessar o que esta dentro do objeto menos tradicional.  
console.log(produto[`preco`]);
console.log(produto[`desconto`]);


