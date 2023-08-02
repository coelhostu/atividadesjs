// 1- Faça um programa que mostre a contagem de 1 a 10.

let i = 1;
function countDown() {
    if (i <=10) {
        document.getElementById('Contagem').textContent += i + ' ';
        i++
        setTimeout(countDown, 1000);
    }
     
}
countDown();  


/*
console.log("-----Crecente------")
for (let num1 = 1; num1 <=10; num1++) {
    console.log(num1)

} 
*/