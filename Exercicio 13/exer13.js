function tabuada(){
    let num1 = document.getElementById("num1").value
    let resposta = document.getElementById('resposta')
    let tabuada = ' '

    for (let count=1; count<=10; count++){
        tabuada += num1+" x "+count+" = "+
                   num1*count+" <br />"
    resposta.innerHTML = tabuada
    }
}