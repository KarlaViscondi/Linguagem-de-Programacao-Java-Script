function conversao(){
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value
    let hora = num1 * 60
    let min = parseFloat(hora) + parseFloat(num2)
    let seg = min * 60
    alert("O valor da hora em minutos é: " +hora +
    "\nO valor total de minutos é: " +min +
    "\nO valor em segundos é: " +seg)
}