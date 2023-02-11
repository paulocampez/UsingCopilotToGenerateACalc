var numeroA = 0;
var numeroB = 0;

function porcentagemAB() {
	document.getElementById("resultadoPorcentagemAB").value = (numeroB/numeroA)*100;
}

function porcentagemBA() {
	document.getElementById("resultadoPorcentagemBA").value = (numeroA/numeroB)*100;
}

function soma() {
	document.getElementById("resultadoSoma").value = parseInt(numeroA) + parseInt(numeroB);
}

function subtracaoAB() {
	document.getElementById("resultadoSubtracaoAB").value = parseInt(numeroA) - parseInt(numeroB);
}
function subtracaoBA() {
	document.getElementById("resultadoSubtracaoBA").value = parseInt(numeroB) - parseInt(numeroA);
}

function multiplicacao() {
	document.getElementById("resultadoMultiplicacao").value = parseInt(numeroA) * parseInt(numeroB);
}

function divisaoBA() {
	document.getElementById("resultadoDivisaoBA").value = parseInt(numeroB) / parseInt(numeroA);
}
function divisaoAB() {
	document.getElementById("resultadoDivisaoAB").value = parseInt(numeroA) / parseInt(numeroB);
}

function potenciaAB() {
	document.getElementById("resultadoPotenciaAB").value = Math.pow(numeroA, numeroB);
}
function potenciaBA() {
	document.getElementById("resultadoPotenciaBA").value = Math.pow(numeroB, numeroA);
}

function raizA() {
	document.getElementById("resultadoRaizA").value = Math.sqrt(numeroA);
}
function raizB() {
	document.getElementById("resultadoRaizB").value = Math.sqrt(numeroB);
}

function fatorialA() {
	document.getElementById("resultadoFatorialA").value = fatorial(numeroA);
}
function fatorialB() {
	document.getElementById("resultadoFatorialB").value = fatorial(numeroB);
}
function fatorial(n) {
	if (n == 0) {
		return 1;
	} else {
		return n * fatorial(n - 1);
	}
}

function media() {
	document.getElementById("resultadoMedia").value = (parseInt(numeroA) + parseInt(numeroB)) / 2;
}

function calcular(){
	numeroA = document.getElementById("numeroA").value;
	numeroB = document.getElementById("numeroB").value;
	soma();
	subtracaoAB();
	subtracaoBA();
	multiplicacao();
	divisaoBA();
	divisaoAB();
	potenciaBA();
	potenciaAB();
	raizA();
	raizB();
	fatorialA();
	fatorialB();
	porcentagemAB();
	porcentagemBA();
	media();
}
function limpar() {
	document.getElementById("numeroA").value = 0;
	document.getElementById("numeroB").value = 0;
}