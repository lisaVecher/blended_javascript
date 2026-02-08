// !Завдання 1
// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

// ? Рішення
// const body = document.querySelector("body");
// console.log(body);

// const title = document.querySelector("#title");
// console.log(title);

// const list = document.querySelector(".list");
// console.log(list);

// const topics = document.querySelectorAll("[data-topic]");
// console.log(topics);

// const firstEl = topics[0];
// console.log(firstEl);

// const lastEl = topics[topics.length - 1];
// console.log(lastEl);

// const nextAfterTitle = title.nextElementSibling;
// console.log(nextAfterTitle);

// const allHeadings = document.querySelectorAll("h3");
// console.log(allHeadings);

// allHeadings.forEach((h3) => {
//   h3.classList.add("active");
// });

// const navigationItem = document.querySelector('li[data-topic="navigation"]');
// console.log(navigationItem);

// navigationItem.style.backgroundColor = "yellow";

// const pNavigation = navigationItem.querySelector("p");
// pNavigation.textContent = "Я змінила тут текст!";

// const currentTopic = "manipulation";

// const findEl = document.querySelector(`li[data-topic="${currentTopic}"]`);

// console.log(findEl);

// findEl.style.backgroundColor = "blue";

// const headingCompleted = document.querySelector("h3.completed");
// console.log(headingCompleted);

// const removeLi = headingCompleted.closest("li");
// removeLi.remove();

// const pAfterH1 = document.createElement("p");
// pAfterH1.textContent = "Об'єктна модель документа (Document Object Model)";

// title.after(pAfterH1);

// const elementLi = document.createElement("li");
// const liH3 = document.createElement("h3");
// liH3.textContent = "Властивість innerHTML";

// const liParag = document.createElement("p");
// liParag.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// elementLi.append(liH3, liParag);
// list.append(elementLi);

// list.insertAdjacentHTML(
//   "beforeend",
//   `
//   <li>
//     <h3>Властивість innerHTML</h3>
//     <p>
//       Ще один спосіб створити DOM-елементи і помістити їх в дерево -
//       це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
//     </p>
//   </li>
//   `,
// );

// list.innerHTML = "";
// // ?

// !Завдання 2
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// ?Рішення
// const numberContainer = document.querySelector(".number-container");

// console.log("numberContainer:", numberContainer);

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const fragment = document.createDocumentFragment();

// for (let i = 0; i < 100; i += 1) {
//   const number = randomNumber();

//   const div = document.createElement("div");
//   div.classList.add("number");
//   div.textContent = number;

//   if (number % 2 === 0) {
//     div.classList.add("even");
//   } else {
//     div.classList.add("odd");
//   }

//   fragment.append(div);
// }

// numberContainer.append(fragment);

// ! Завдання 3
// ? Рішення
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

const form = document.querySelector(".js-contact-form");
const input = document.querySelector(".js-username-input");
const checkbox = document.querySelector(".js-policy-checkbox");
const nameOutput = document.querySelector(".js-username-output");

input.addEventListener("input", () => {
  const value = input.value.trim();

  input.classList.remove("success", "error");
  if (value.length > 6) {
    input.classList.add("success");
  } else {
    input.classList.add("error");
  }

  nameOutput.textContent = value === "" ? "Anonymous" : value;
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

input.addEventListener("focus", (event) => {
  if (input.value.trim() === "") {
    event.target.style.outline = "3px solid red";
  } else {
    event.target.style.outline = "3px solid green";
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

input.addEventListener("blur", (event) => {
  if (input.value.trim() === "") {
    event.target.style.outline = "3px solid red";
  } else {
    event.target.style.outline = "3px solid lime";
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputInfo = input.value.trim();
  const checkInfo = checkbox.checked;

  input.value = "";
  checkbox.value = false;

  if (inputInfo.trim() !== "" && checkInfo) {
    const obj = {
      input: inputInfo,
      checkbox: checkInfo,
    };
    console.log(obj);

    input.value = "";
    checkbox.checked = false;
    nameOutput.textContent = "Anonymous";
    input.classList.remove("success", "error");
    input.style.outline = "";
  } else {
    alert("Введіть ім'я і поставте галочку");
  }
});

// ! Завдання 4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const decrease = document.querySelector(".js-decrease");
const increase = document.querySelector(".js-increase");
const box = document.querySelector(".box");

decrease.addEventListener("click", () => {
  const height = box.offsetHeight;

  if (height <= 20) return;

  box.style.height = `${height - 20}px`;
});

increase.addEventListener("click", (event) => {
  const moreBoxHeight = box.offsetHeight;
  const moreHeight = moreBoxHeight + 20;

  box.style.height = `${moreHeight}px`;
});
