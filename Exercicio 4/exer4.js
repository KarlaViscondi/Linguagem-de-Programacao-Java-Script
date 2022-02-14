function media(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let calc = (((2 * num1)+(3 * num2))) / (2 + 3)
    resposta.innerHTML = "O resultado é: " +calc
}