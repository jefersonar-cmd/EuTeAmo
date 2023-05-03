const msgIn = document.getElementById('mensagem')
const msgFi = document.getElementById('msgFi')
const img = document.getElementById('imgs')
var audio = document.getElementById("myAudio");

function iniMsg(contador){
  msgIn.innerHTML = "Eu Te Amo Muito Nath S2</br>Você é a melhor coisa que me aconteceu!";
  img.src = "images/" + contador +".jpeg"
  msgIn.classList.add('show');
  img.classList.add('show');
  msgFi.classList.remove('show');
}

function fiMsg(contador){
  msgIn.innerHTML = "Eu Te Amo Muito Nath S2</br>Você é a melhor coisa que me aconteceu!";
  img.src = "images/" + contador +".jpeg"
  msgFi.innerHTML = "Você é uma mulher Incrível!<br/>Minha Incrível Mulher, Princesa, Rainha e Meu Tudo!"
  msgIn.classList.add('show');
  img.classList.add('show');
  msgFi.classList.add('show');
}

function startInterval() {
  //audio.play();
  let contador = 0;
  let intervalo = setInterval(function() {
    if (contador < 5) {
      //console.log(contador)
      contador++;
      if (contador >= 5) {
        fiMsg(contador - 1)
        setTimeout(function() {
          img.classList.remove('show');
          msgFi.classList.remove('show');
        }, 10000);
        clearInterval(intervalo);
        setTimeout(function() {
          startInterval();
          console.log("Intervalo reiniciado.");
        }, 15000);
      } else {
        iniMsg(contador - 1)
        setTimeout(function() {
          img.classList.remove('show');
        }, 2500);
      }
    } else {
      contador = 0
    }
  }, 5000);
  return intervalo;
}

// Inicia o intervalo
let intervalo = startInterval();

// Obtém o elemento de áudio e define o volume para 50%
audio.volume = 0.1;

document.addEventListener('load', function(){
  audio.play();
})

// Repete a música quando terminar
audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
