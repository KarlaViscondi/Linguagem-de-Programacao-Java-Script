function subtracao(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let calcular = (num1 - num2)
    resposta.innerHTML = "O resultado é: " +calcular
}