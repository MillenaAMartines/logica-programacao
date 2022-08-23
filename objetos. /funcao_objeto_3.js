function data(dia = 1,mes = 1,ano = 2022 ) { 
  this.dia= dia; 
  this.mes= mes; 
  this.ano= ano; 
}


const d1 = new data(); 
const d2 = new data(16,05,2022); 
const d3 = new data(23,05,2022); 

console.log(typeof d1) ; 
console.log(d1); 
console.log(d2); 
console.log(d3); 
