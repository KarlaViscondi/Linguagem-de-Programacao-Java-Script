function temperatura(){
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value
    let area = num1 * num2
    let pot = 18 * area
    alert("A área do cômodo é: " +area +
    "\nA potência de iluminação necessária é: " +pot)
}