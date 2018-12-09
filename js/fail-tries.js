// fail-tries.js

import AbstractView from './abstract-view';

class FailTriesView extends AbstractView {
  get template() {
    return `
    <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Какая жалость!</h2>
    <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
    </section>`;
  }

  bind() {
    const replayBtn = this._el.querySelector(`.result__replay`);

    replayBtn.addEventListener(`click`, () => this.onReplay());
  }

  onReplay() { }
}

export default FailTriesView;
