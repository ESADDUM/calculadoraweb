function insert (num) { /* funcção chamada pelo "onclick"  */
    var numero = document.getElementById ('resultado').innerHTML;
    document.getElementById ('resultado').innerHTML = numero + num

}
function limpar () {
    document.getElementById ('resultado').innerHTML = ""
}

function voltar () {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById ('resultado').innerHTML = resultado.substring (0,resultado.length -1);

}

function calcular() {
    var resultadoElemento = document.getElementById('resultado');
    var resultado = resultadoElemento.innerHTML.trim;
    
    /* verifica se o ultimo caractere é um numero*/
    var ultimoCaractere = /\d$/. test(resultadp)

    try {
        if (resultado) {
            var resultadoCalculado = eval(resultado);
            if (isNaN(resultadoCalculado) || !isFinite(resultadoCalculado)) {
                throw new Error("Impossível Calcular");
            } else {
                resultadoElemento.innerHTML = resultadoCalculado;
            }
        } else {
            throw new Error("Nenhuma expressão para calcular");
        }
    } catch (error) {
        resultadoElemento.innerHTML = "Impossível Calcular";
    }
}

