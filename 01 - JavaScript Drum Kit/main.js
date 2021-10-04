// function that plays audio and applies animation styling to the key that was pressed.
const playAudio = function(event) {
  // plays audio for each keypress
  const audio = document.querySelector(`audio[data-key=${event.code}]`);
  if (!audio) return; // exits function if key wasn't found.
  audio.currentTime = 0; // resets audio so user can repeatedly play each sound.
  audio.play();

  // adds style to each keypress
  const key = document.querySelector(`div[data-key=${event.code}]`);
  if (!key) return;
  key.classList.add('playing');
}

// function to remove class after the animation has ended.
const removeTransition = function(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// event listeners
const keys = document.querySelectorAll('div.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playAudio);