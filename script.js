const msgIn = document.getElementById('mensagem')
const msgFi = document.getElementById('msgFi')
const img = document.getElementById('imgs')
const audio = document.getElementById("myAudio");
const playButton = document.getElementById('play');
const btn = document.getElementById('btn')

document.addEventListener('load', function() {
  audio.pause();
  msgFi.style.display = 'none';
  img.style.display = 'none';
  msgFi.style.display = 'none';
})

playButton.addEventListener('click', function () {
  playAudio();
  playButton.style.display = 'none';
  btn.style.display = 'none';
  startInterval();
});

function playAudio() {
  return new Promise((resolve, reject) => {
    audio.volume = 0.1;
    audio.play();
    audio.onended = resolve;
    audio.onerror = reject;
  });
}

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
  let contador = 0;
  let intervalo = setInterval(function() {
    if (contador < 5) {
      console.log(contador)
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


// Obtém o elemento de áudio e define o volume para 50%
audio.volume = 0.1;

// Repete a música quando terminar
audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);
