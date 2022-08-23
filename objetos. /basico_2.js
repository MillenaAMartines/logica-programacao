

const produto = { 
    nome: `ipad`, preco: 5600, desconto: 0.15,   /// o objeto produto tem 3  propriedades. 
    precoFinal:  function () { 
        return this.preco * ( 1 - this.desconto)
    }
}

console.log(produto.nome); 
console.log(produto.precoFinal ()); 

