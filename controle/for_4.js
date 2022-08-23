// [1,1] ,  [ 1,2]  , [ 1,3]
// [2,1] ,  [ 2,2]  , [ 2,3]
// [3,1] ,  [ 3,2]  , [ 3,3]



for( let i = 1; i <= 3; i++ ) {
    let linhas = " " ;


    for( let j = 1; j <= 3; j++) { 
        linhas += ` [ ${i}, ${j}]`
    }
    console.log( linhas);

}
    
