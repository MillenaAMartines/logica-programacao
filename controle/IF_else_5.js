const hora = 24 ; 
let saudacao; 

if(hora <12) 
{ 
   saudacao= "Bom Dia! "; 
}else if(hora < 18) { 
       {saudacao= "Boa Tarde! ";  } 
    } else if ( hora < 23) { 
       { saudacao= "Boa Noite! "  } 
    }else { 
       {saudacao = "madrugada" }
    }
       

    

console.log( saudacao); 