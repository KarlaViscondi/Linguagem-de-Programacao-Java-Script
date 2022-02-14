function desconto(){
    let num1 = document.getElementById("num1").value
    let calc = num1 - (num1 * 0.10)
    resposta.innerHTML = "O resultado é: " +calc
}