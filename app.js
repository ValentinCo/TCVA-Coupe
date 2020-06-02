$("#buttonForm").click(function() {
	
	var input1 = $("#input1").val();
	var input2 = $("#input2").val();
	var operateur = $("#selectOperation").val();
	var manoeuvre = $("#manoeuvre").val();
	var moteur = $("#motorisation").val();
	var capot;
	var result;
	var To;
	var Pu

	//246
if (operateur === "246") {
	result = sub(input1, 110);
	To = sub(input1, 75);
	Pu = sub(input1, 125)
	console.log(To);
	//cassis Gauche Moteur
}else if (operateur === "cassis" && manoeuvre === "gauche" && moteur === "moteur") {
	result = sub(input1, 95);
	capot = sub(input1, 97);
	To = sub(input1, 155);
	Pu = sub(input1, 110)
//cassis Gauche  Treuil
} else if (operateur === "cassis" && manoeuvre === "gauche" && moteur ==="treuil"){
	result = sub(input1, 95);
	capot = sub(input1, 97);
	To = sub(input1, 155);
	Pu = sub(input1, 110)
	//cassis droite treuil
} else if (operateur === "cassis" && manoeuvre === "droite" && moteur ==="treuil"){
	result = sub(input1, 95);
	capot = sub(input1, 97);
	To = sub(input1, 155);
	Pu = sub(input1, 110)
	//cassis droite moteur
} else if (operateur === "cassis" && manoeuvre === "droite" && moteur ==="moteur"){
	result = sub(input1, 130);
	capot = sub(input1, 97);
	To = sub(input1, 155);
	Pu = sub(input1, 110)
}

$( "#result" ).text(result);
$( "#To" ).text(To);
$( "#Pu" ).text(Pu);
$( "#capot").text(capot);
});

function add (a, b) {
	return parseInt(a) + parseInt(b);
}

function multi (a, b) {
	return parseInt(a) * parseInt(b);
}

function divide (a, b) {
	return parseInt(a) / parseInt(b);
}

function sub (a, b) {
	return parseInt(a) - parseInt(b);
}