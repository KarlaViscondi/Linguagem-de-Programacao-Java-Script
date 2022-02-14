function massa(){
    let num1 = document.getElementById("num1").value
    let eng = parseInt(num1) + parseFloat(num1 * 0.15)
    let emag = num1 - (num1 * 0.20)
    resposta.innerHTML = "A nova massa se a pessoa engordar é: " + eng + " \n A nova massa se a pessoa emagrecer é: " + emag
}