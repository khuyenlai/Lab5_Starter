// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img'); // only one main <img> tag
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  console.log({ hornSelect, hornImage, hornAudio, volumeSlider, volumeIcon, playButton });
  hornSelect.addEventListener('change', () => {
    const hornType = hornSelect.value;
    hornImage.src = `assets/images/${hornType}.svg`;
    hornAudio.src = `assets/audio/${hornType}.mp3`;
  });
  
  volumeSlider.addEventListener('input', () => {
    const volumeValue = volumeSlider.value;
    hornAudio.volume = volumeValue / 100;
  
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });
  
  playButton.addEventListener('click', () => {
    hornAudio.play();
  
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
  
}