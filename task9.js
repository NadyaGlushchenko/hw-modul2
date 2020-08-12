function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  let loginLength = login.length;
  return loginLength >= 4 && loginLength <= 16;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  if (!isLoginValid(login)) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return "Ошибка! Логин должен быть размером от 4 до 16 символов";
  } else if (!isLoginUnique(allLogins, login)) {
    console.log("Такой логин уже используется!");
    return "Такой логин уже используется!";
  } else {
    allLogins.push(login);
    console.log("Логин успешно добавлен!");
    return "Логин успешно добавлен!";
  }
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
