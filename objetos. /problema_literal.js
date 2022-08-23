const nascimento1 = { 
    dia: 1, 
    mes: 10, 
    ano: 2021, 
    exibir: function () { 
        return `${this.dia} / ${this.mes} /${this.ano}`
    }
}



const nascimento2 = { 
    dia: 20, 
    mes: 12, 
    ano: 2021, 
    exibir: function () { 
        return `${this.dia} / ${this.mes} /${this.ano}`
    }
}


const nascimento3 = { 
    dia: 16, 
    mes: 05, 
    ano: 2021, 
    exibir: function () { 
        return `${this.dia} / ${this.mes} /${this.ano}`
    }
}


console.log( nascimento1.exibir()); 
console.log( nascimento2.exibir()); 
console.log( nascimento3.exibir()); 

