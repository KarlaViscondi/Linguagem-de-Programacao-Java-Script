function salario(){
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value
    let num3 = document.getElementById("num3").value
    let h_trab = num2 * (1/8)
    let v_trab = num1 * h_trab
    let h_ext = num2 * (1/4)
    let v_ext = num3 * h_ext
    let sal = parseFloat(v_ext) + parseFloat(v_trab)
    alert("O valor das horas trabalhadas são: " +v_trab +
    "\nO valor das horas extras são: " +v_ext +
    "\nO salário final é: " +sal)
}