//7. Faça um programa que recebe um número inteiro e mostre os números pares e ímpares (separados), de 1 até esse inteiro.
document.getElementById('numForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const numero = document.getElementById('numInput').value;

    const pares = [];
    const impares = [];

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }

    document.getElementById('result').innerHTML = `
    <p>Números pares: ${pares.join(', ')}</p>
    <p>Números ímpares: ${impares.join(', ')}</p>
    `;
});
