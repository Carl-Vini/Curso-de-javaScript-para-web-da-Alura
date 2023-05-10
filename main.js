

let pom = document.querySelector('#som_tecla_pom');
let teclaPom = document.querySelector('.tecla_pom');



const teclas = document.querySelectorAll('.tecla');
const sons = document.querySelectorAll('#tecla');




function somPow() {
    return document.querySelector('#som_tecla_pom').play();
}
	
function somTim() {
	document.querySelector('#som_tecla_clap').play();
}


function tocaSom(seletorAudio) {
	 
 const elemento = document.querySelector(seletorAudio);

 if (elemento === null) {
 	alert('Elemento não encontrado');
 	console.log('Elemento nao encontrado');
 }

 else if (elemento != null && elemento.localName === 'audio'){
 	elemento.play();
 	console.log(elemento.localName);
 }
 else{
 	console.log("Elemento não encontrado ou seletor invalido");
 }
}


function tocaTudo(x) {
	return sons[x].play();
}


let contador = 0;

/*
	while (contador < teclas.length) {
		const teclinha = teclas[contador];
		const instrumento = teclinha.classList[1];
		const idAudio = `#som_${instrumento}`;

		teclinha.onclick = function() {
			tocaSom(idAudio);
		}
		contador++;
		console.log(idAudio);
	}
*/		

for (var i = 0; i < teclas.length; i++) {
	
	const teclinha = teclas[i];
	const instrumento = teclinha.classList[1];
	const idAudio = `#som_${instrumento}`;

	teclinha.onclick = function() {
		tocaSom(idAudio);
}
	teclinha.onkeydown = function(evento){
		console.log(evento);
		if (evento.code === "Space" || evento.code === "Enter"){
			teclinha.classList.add('ativa');
		}
		
	}	

	teclinha.onkeyup = function(){
		teclinha.classList.remove('ativa');
	}
	console.log(i);	
	console.log(instrumento);
}