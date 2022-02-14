function idade(){
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById('num3').value
    let div1 = parseFloat(num2) + (num2 * 0.02)
    let div2 = parseFloat(num3) + (num3 * 0.02)
    let divt = parseFloat(div1) + parseFloat(div2)
    let sal = num1 - divt

    resposta.innerHTML = "\n O salário restante é: " + sal
}