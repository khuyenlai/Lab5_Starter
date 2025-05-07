// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();

    if (voices.length === 0) {
      setTimeout(populateVoices, 100);
      return;
    }

    voiceSelect.innerHTML = '';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  speechSynthesis.addEventListener('voiceschanged', populateVoices);

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoiceIndex = voiceSelect.value;

    if (voices[selectedVoiceIndex]) {
      utterance.voice = voices[selectedVoiceIndex];
    }

    // Change face when speaking
    utterance.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  });
}

