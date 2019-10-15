function somar(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = num1 + num2 ;
    var resultado = parseFloat(resultado.toFixed(2));
    document.getElementById('resultado').setAttribute("value",resultado);
}
function subtracao(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var resultado = num1 - num2 ;
    var resultado = parseFloat(resultado.toFixed(2));
    document.getElementById('resultado').setAttribute("value",resultado)
}
function divisao(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var resultado = num1 / num2 ;
    var resultadoArredondado = parseFloat(resultado.toFixed(2))
    document.getElementById('resultado').setAttribute("value",resultadoArredondado);
}
function multiplicacao(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var resultado = num1 * num2 ;
    var resultado = parseFloat(resultado.toFixed(2));
    document.getElementById('resultado').setAttribute("value",resultado)
}
function raizQuadrada(){
    var raizQuadrada = parseFloat(document.getElementById('resultado').value)
    var raizQuadrada = Math.sqrt(raizQuadrada)
    document.getElementById('raiz').setAttribute("value",raizQuadrada)
}
function primo(){
    var numeroPrimo = parseFloat(document.getElementById('resultado').value)
    var i = 0
    var auxiliar = 0
    for(i = 0; i <= numeroPrimo;i++){
        if(numeroPrimo % i == 0){
            auxiliar = auxiliar + 1
        }

    }
    for(i=0;i<=numeroPrimo;i++){
        if(auxiliar > 2){
            document.getElementById('primo').setAttribute("value","Número não é primo!")
        }
        else{
            document.getElementById('primo').setAttribute("value","Número é primo!")
        }
    }
}
