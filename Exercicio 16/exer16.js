function hipotenusa(){
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value
    let hip = (num1 ** 2) + (num2 ** 2)
    let res = Math.sqrt(hip)
    alert("O valor da hipotenusa é: " + res.toFixed(2))
}