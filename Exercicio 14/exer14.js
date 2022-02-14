function idade(){
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value
    let anos = num2 - num1
    let meses = anos * 12
    let semanas = meses * 4
    let dias = semanas * 7
    alert("A idade da pessoa em anos é: " +anos +
    "\nA idade da pessoa em meses é: " +meses + "\nA idade da pessoa em semanas é: " +semanas +
    "\nA idade da pessoa em dias é: " +dias)
}