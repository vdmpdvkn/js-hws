// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

let userInput = prompt("Num:");

while (userInput < 100) {
  if (userInput === null) {
    console.log("Отмена");
    break;
  }
  userInput = prompt("Try again");
}