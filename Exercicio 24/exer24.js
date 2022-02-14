function conversao(){
    let num1 = document.getElementById("num1").value 
    let dolar = num1 / 1.80
    let marco = num1 / 2.00
    let libra = num1 / 3.57
    alert("O valor em dólar é: " +dolar.toFixed(2) +
    "\nO valor em marco alemão é: " +marco.toFixed(2) +
    "\nO valor em libra esterlina é: " +libra.toFixed(2))
}