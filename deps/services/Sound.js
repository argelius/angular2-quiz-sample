/*
 * Simple service to play sounds.
 */

export class Sound {
  constructor() {
  }

  play(fn) {
    var audio = new Audio(fn);
    audio.volume = 0.1;
    audio.play();
  }
}
