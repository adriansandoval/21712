//variables globales
var operador = "";

function borrar(){
	operador = "";
	document.calculadora.operando1.value = 0;
	document.calculadora.operando2.value = 0;
	document.calculadora.resultado.value = 0;
}

function igual(){
	var v1 = document.calculadora.operando1.value;
	var v2 = document.calculadora.operando2.value;
	document.calculadora.resultado.value = eval(v1 + operador + v2);
}

function operadores(op){
	operador = op;
}

function numeros(num){
	if(operador == ""){
		var valorInicial = document.calculadora.operando1.value;
		if(valorInicial == "0")
			document.calculadora.operando1.value = "";

		document.calculadora.operando1.value += num;
	}
	else{
		var valorInicial = document.calculadora.operando2.value;
		if(valorInicial == "0")
			document.calculadora.operando2.value = "";

		document.calculadora.operando2.value += num;
	}
}