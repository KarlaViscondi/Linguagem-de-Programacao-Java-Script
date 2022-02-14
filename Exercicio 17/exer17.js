function esfera(){
    let num1 = document.getElementById("num1").value 
    let comp = (2 * 3.14) * num1
    let area = 3.14 * (num1 ** 2)
    let vol = (3/4) * 3.14 * (num1 ** 3)
    alert("O comprimento da esfera é: " +comp +
    "\nA área da esfera é: " +area +
    "\nO volume da esfera é: " +vol)
}