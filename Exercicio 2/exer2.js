function calcular(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById("num3").value
    let calc = num1 * num2 * num3
    resposta.innerHTML = "O resultado é: " + calc
}