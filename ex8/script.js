// Faça um programa que receba 5 idades no navegador em button, calcule e mostre a média das idades digitadas
function calcularMedia() {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        let idadeInput = document.getElementById('idade' + i).value; 
        soma += parseInt(idadeInput);
    }
    let media = soma / 5;
    let resultadoDiv = document.getElementById('result'); 
    resultadoDiv.innerHTML = "A média das idades é " + media;
}
