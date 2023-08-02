// 2. Faça um programa que mostre a contagem de 10 a 1.
let i = 10;
function countDown() {
    if (i >= 1) {
        document.getElementById('contagem').textContent += i + ' ';
        i--;
        setTimeout(countDown, 1000); 
    } 
}
countDown();



