// Faça um programa que recebe um número inteiro e mostre a tabuada desse número.
function mostrarTabuada() {
    let numeroInput = document.getElementById('numero').value;
    let numero = parseInt(numeroInput);
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpa os resultados anteriores

    if (isNaN(numero) || numeroInput.trim() === '') {
        resultadoDiv.innerHTML = 'Por favor, digite um número inteiro válido.';
        return;
    }

    for (let i = 0; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML += numero + " x " + i + " = " + resultado + "<br>";
    }
}


