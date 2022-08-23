const hora = 24 ; 
let saudacao; 

if(hora <12) 
{ 
   saudacao= "Bom Dia! "; 
}else if(hora < 18) { 
        saudacao= "Boa Tarde! ";   // so pode ser executado um unico bloco - sentenca para toda a estrutura.  
    } else if ( hora < 23) { 
        saudacao= "Boa Noite! "  
    }else { 
        saudacao = "madrugada"
    }
       

    

console.log( saudacao); 