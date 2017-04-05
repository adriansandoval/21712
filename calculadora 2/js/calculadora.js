//variables globales
var expresion = "";

function borrar(){
	operador = "";
	document.calculadora.pantalla.value = "0";
	expresion = "";
}

function igual(){
	expresion += document.calculadora.pantalla.value;
	document.calculadora.pantalla.value = eval(expresion);
	expresion = "";
}

function operadores(op){
	expresion += document.calculadora.pantalla.value + op;
	document.calculadora.pantalla.value = "0";
}

function numeros(num){
	var valorInicial = document.calculadora.pantalla.value;
	
	if(valorInicial == "0")
		document.calculadora.pantalla.value = "";

	document.calculadora.pantalla.value += num;

}