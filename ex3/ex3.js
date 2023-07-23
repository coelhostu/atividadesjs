// 3. Faça um programa que recebe um número inteiro e mostre a contagem de 1 até tal nú
/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número inteiro: ', num => {
    num = parseInt(num);
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }
    readline.close();
  });
  */

const target = window.prompt('Digite um número inteiro:', '10');

for (let i=1; i<=target; i++) {
    console.log(i);
}