import {Component, Template, bootstrap, Foreach} from 'angular2/angular2';
import {Kanjis} from 'services/Kanjis';
import {Sound} from 'services/Sound';

@Component({
  selector: 'kanji-quiz',
  componentServices: [
    Kanjis,
    Sound
  ]
})

@Template({
  url: 'kanji-quiz.html',
  directives: [Foreach]
})

class KanjiQuiz {
  constructor(kanjis: Kanjis, sound: Sound) {
    this.kanjis = kanjis;
    this.sound = sound;
    this.soundEnabled = true;
    this.correct = 0;
    this.incorrect = 0;

    this.nextQuestion();
  }

  nextQuestion() {
    var prev = this.answer;

    do {
      this.options = this.kanjis.getRandomKanjis(4);
      this.answer = this.options[Math.floor(this.options.length * Math.random())];
    } while (this.answer === prev);
  }

  answerQuestion(kanji) {
    if (kanji === this.answer) {
      this.playSound('correct.wav');
      this.correct++;
    }
    else {
      this.playSound('incorrect.wav');
      this.incorrect++;
    }

    this.nextQuestion();
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
  }

  playSound(fn) {
    if (this.soundEnabled) {
      this.sound.play('/deps/audio/' + fn);
    }
  }

  percentage() {
    return (100 * this.correct / (this.correct + this.incorrect))
      .toString()
      .substr(0, 4);
  }
}

export function main() {
  bootstrap(KanjiQuiz);
}
