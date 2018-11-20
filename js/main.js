'use strict';

// Основной контейнер приложения
const mainElement = document.querySelector(`section.main`);
const appContainer = document.querySelector(`.app`);

// Подключение кнопок для навигации слайдов
const arrowsContainer = document.createElement(`div`);
const arrowsWrap = `
  <div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn arrows__btn-prev"><-</button>
    <button class="arrows__btn arrows__btn-next">-></button>
  </div>`;

arrowsContainer.innerHTML = arrowsWrap;
appContainer.appendChild(arrowsContainer);


// Функция переключения слайдов
const selectSlide = (slide) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(slide.cloneNode(true));
};


// Массив всех слайдов
const screens = Array.from(document.querySelectorAll(`template`)).
map((it) => it.content);


// функция выбора следующего и предыдущего слайда
let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};


const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

document.addEventListener(`keydown`, (event) => {
  switch (event.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});


const arrows = document.querySelectorAll(`.arrows__btn`);

arrows.forEach((elem) => {
  elem.addEventListener(`click`, () => {
    if (elem.classList.contains(`arrows__btn-prev`)) {
      select(current - 1);
    } else {
      select(current + 1);
    }
  });
});

select(0);

