function desconto(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById("num3").value
    let comissao = num2 * (num3 / 100)
    let sal = parseFloat(comissao) + parseFloat(num1)
    resposta.innerHTML = "A comissão é de: " + comissao + "\nO salário final é: " + sal
}