function area(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById("num3").value
    let soma = parseInt(num1) + parseInt(num2)
    let area = (soma * num3) / 2
    resposta.innerHTML = "A área do trapézio é: " + area
}