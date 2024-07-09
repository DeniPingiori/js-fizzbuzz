// creo for che mi stampa i num da 1 a 100
for(let i=1; i<=100; i++) {
    //console.log(i)
  
    //verifico se il num attualmente iterato è multiplo di 3 
    if(i % 3 ==0 && i % 5 !=0) {
        console.log('Fizz');
    }
    //verifico se il num attualmente iterato è multiplo di 5 
    else if(i % 5 ==0 && i % 3 !=0) {
        console.log('Buzz')
    }
    //verifico se il num attualmente iterato è multiplo di 3 e di 5
    else if(i % 3 ==0 && i % 5 ==0){
        console.log('Fizzbuzz') //non entra nella condizione perchè incontra un'altra condizione prec
    }
    else{
        console.log(i);
    }
} 
    //oppure 
 /*   if(i % 3 ==0 && i % 5 ==0) {
        console.log('Fizz');
    }
    //verifico se il num attualmente iterato è multiplo di 5 
    else if(i % 5 ==0) {
        console.log('Buzz')
    }
    //verifico se il num attualmente iterato è multiplo di 3 e di 5
    else if(i % 3 ==0){
        console.log('Fizzbuzz') //non entra nella condizione perchè incontra un'altra condizione prec
    }
    else{
        console.log(i);
    }

*/
