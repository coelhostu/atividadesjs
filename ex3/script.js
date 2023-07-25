// 3. Faça um programa que recebe um número inteiro e mostre a contagem de 1 até tal número. </p>

function contando() {
    const num2 = document.getElementById('numero').value;
    let output = document.getElementById('output');
    output.textContent = '';
    for (let numero = 1; numero <= num2; numero++) {
        output.textContent += numero + ' ';
    }

}