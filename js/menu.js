// contador definido
cont  = 0;

// variavel de selecao de um elemento dom
let x = document.querySelector("#fade");

// funcao do click
function toggle(){

	// contador sendo incrementado a cada click
	cont = cont + 1;

	// define o tempo do efeito toggle
	x.style.transition  = "1s";

	// verifica o click se é par ou impar
	if(cont % 2 == 0){

		// se for par ele se mantem aberto
		x.style.marginLeft = "0px";

	}else{

		// se for impar ele fecha
		x.style.marginLeft = "-200px";

	}
}
// fim do script