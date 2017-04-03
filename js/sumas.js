function texto(){
	alert(document.getElementById("texto1").value)
}

function suma(a,b){
	return a + b;
}

var suma2 = function(a,b){ 
	return a + b
}

function suma3(){
	var x = document.getElementById("numero1").value
	var y = document.getElementById("numero2").value
	alert(parseInt(x) + parseInt(y))
}