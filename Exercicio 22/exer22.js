function lados(){
    let num1 = document.getElementById("num1").value 
    let diag = num1 * (num1 - 3) / 2
    alert("O número de diagonais são: " +diag)
}