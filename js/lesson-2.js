//! Завдання 1:
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// ? Рішення:
// let styles = ["jazz", "blues"];
// styles.push("rock-n-roll");

// styles[1] = "classic";

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }

// console.log(logItems(styles));

//! Завдання 2:
// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// ? Рішення:
// function checkLogin(array) {
//   let username = prompt("Введіть логін");

//   for (let nameUs of array) {
//     if (username === nameUs) {
//       return alert(`Welcome, ${username}!`);
//     }
//   }
//   return alert("User not found");
// }

// console.log(checkLogin(["Peter", "John", "Igor", "Sasha"]));

// ! Завдання 3:
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// ? Рішення:
// function calculateAverage() {
//   let totalSum = 0;
//   let count = 0;

//   for (let arg of arguments) {
//     if (typeof arg === "number" && !Number.isNaN(arg)) {
//       totalSum += arg;
//       count++;
//     }
//   }

//   let averageSum = totalSum / count;

//   return count === 0 ? 0 : averageSum;
// }
// console.log(calculateAverage(64, 78, 24, true, "hi", 33, 67));

// ! Завдання 4:
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// ? Рішення:
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function element(arr) {
//   let totalSum = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let sum = arr[i] + arr[i + 1];
//     totalSum.push(sum);
//   }
//   return totalSum;
// }

// console.log(element(someArr));

//! Завдання 5:
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

// ? Рішення:
// function findSmallestNumber(numbers) {
//   let small = numbers[0];

//   if (Array.isArray(numbers)) {
//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] < small) {
//         small = numbers[i];
//       }
//     }
//     return small;
//   } else {
//     return `Sory, it is not an array!`;
//   }
// }

// console.log(findSmallestNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]));
