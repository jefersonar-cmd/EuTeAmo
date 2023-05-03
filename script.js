const msgIn = document.getElementById('mensagem')
const msgFi = document.getElementById('msgFi')
const img = document.getElementById('imgs')

function iniMsg(){
  msgIn.innerHTML = "Eu Te Amo Muito Nath S2</br>Você é a melhor coisa que me aconteceu!";
  img.src = "images/" + contador +".jpeg"
  msgIn.style.opacity = 1;
  img.style.opacity = 1;
}

function fiMsg(){
  msgIn.innerHTML = "Eu Te Amo Muito Nath S2</br>Você é a melhor coisa que me aconteceu!";
  img.src = "images/" + contador +".jpeg"
  msgFi.innerHTML = "Você é uma mulher Incrível!"
  msgIn.style.opacity = 1;
  img.style.opacity = 1;
  msgFi.style.opacity = 1
}

let contador = 0;
    let intervalo = setInterval(function() {
    if (contador < 5) {
      console.log(contador)
      contador++;
        if(contador == 5){
            fiMsg()
            setTimeout(function() {
              msgIn.style.opacity = 0;
              img.style.opacity = 0;
              msgFi.style.opacity = 0
            }, 10000);
            contador = 0
        }else{
          iniMsg()
          setTimeout(function() {
            msgIn.style.opacity = 0;
            img.style.opacity = 0;
          }, 1500);
        }
    } else {
        //clearInterval(intervalo);
        contador = 0
    }
}, 3000);
// Obtém o elemento de áudio
var audio = document.getElementById("myAudio");
document.addEventListener("load", function() {
  audio.play();
});
audio.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);


