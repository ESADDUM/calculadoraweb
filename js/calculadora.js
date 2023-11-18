function insert (num) { /* função chamada pelo "onclick" onde será inserido o valor que está dentro das aspas simples (html)*/
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

/*function calcular(){
	var resultado = document.getElementById('resultado').innerHTML;
	if (!isNaN(eval(resultado)) && isFinite(eval(resultado))) {
        document.getElementById('resultado').innerHTML = eval(resultado).toFixed(2);
    } else {
        alert("Impossível Calcular");
        limpar(); // Chama a função limpar
    }
}
		/*document.getElementById('resultado').innerHTML	= "Impossível calcular"
		throw new Error("Impossível Calcular");*/

function calcular() {
    var resultadoElement = document.getElementById('resultado');
    var resultado = resultadoElement.innerHTML.trim();
    
    /* verifica se o ultimo caractere é um numero*/
    var ultimoCaractereNumerico = /\d$/. test(resultado);
    /*essa é uma expressão nativa do javascript: onde /\d/ é uma classe de caracteres que corresponde a qualquer dígito decimal (0-9) e $: Isso representa o final de uma string.*/ 
    
    if (ultimoCaractereNumerico) {
        resultadoElement.innerHTML = eval(resultado).toFixed(2); /* eval faz o calculo na forma de uma expressão Ex: 1455+5-10 o resultado sera = 1450 tofixed(2) trava em 2 casas decimais*/
    } else {
        alert("Mensagem de erro: Impossível Calcular"); /* a função alert chama uma pop up com a mensagem de erro*/
        limpar(); /* Chama a função limpar*/
    }
}


/* CODIGO ENVIADO PELO EDUARDO (CHAT GPT)
	if (resultado) {
            var resultadoCalculado = eval(resultado);
            if (isNaN(resultadoCalculado) || !isFinite(resultadoCalculado)) {
                throw new Error("Impossível Calcular");
            } else {
                resultadoElemento.innerHTML = resultadoCalculado;
            }
        } else {
            throw new
			
	*/

