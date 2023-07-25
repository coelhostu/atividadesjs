// Faça um programa que mostre todos os números primos de 0 a 100. 

/* 
- O unico número par é o 2.
- Não pode ser divisivel por mais de dois números

numeroPrimo = []

*/

for (let n = 1; n <=100; n++) {
    let divisor = 0;
    for (let numero =1; numero <=n; numero++) {
        if (n % numero == 0) {
        divisor ++;
        }
    }
    if (divisor <=2) {
        console.log(n)
    }

} 
