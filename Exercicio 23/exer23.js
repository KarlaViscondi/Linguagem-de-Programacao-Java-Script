function angulo(){
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value
    let num3 = parseInt(num1)  + parseInt(num2)
    let ang = 180 - num3
    alert("A medida do terceiro ângulo é: " +ang)
}