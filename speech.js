var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voiceURI = 'native';
msg.volume = 1;
msg.rate = 1;
msg.pitch = 2;
msg.lang = 'es-ES';

var voz = -1;

function setVoice() {
  voz += 1;
  if(voz < voices.length) {
    msg.voice = voices[voz];
    console.log(voz + '.- ' + voices[voz].name);
    msg.text = 'Así habla la voz número ' + voz + ' en este navegador.';
    msg.onend = function(event) {
      setVoice();
    };
    speechSynthesis.speak(msg);
  }
}

setVoice();