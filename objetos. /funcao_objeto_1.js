function criarData(dia,mes,ano) { 
    return { 
        dia:dia,
        mes:mes,
        ano:ano,
        exibir: function () { 
            return `${this.dia} / ${this.mes} /${this.ano}`
        }
    };
}

const d1 = criarData (9,10,2021);
const d2 = criarData (23,11,2020);
const d3 = criarData (6,12,2023);


console.log( d1.exibir()); 
console.log( d2.exibir()); 
console.log( d3.exibir()); 
