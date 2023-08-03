//Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos

function idadeMaior() {
    let maior = 0;

    for (let i = 1; i <= 10; i++) {
        const idade = parseInt(document.getElementById('idade' + i).value, 10);
        if (idade >= 18) {
            maior++;
        }
    }

    alert(`Quantidade de pessoas com idade maior ou igual a 18 anos: ${maior}`);
}
