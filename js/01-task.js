21.06
// Запитати в користувача його ім'я, прізвище та вік за допомогою prompt
// Записати всі відповіді на змінні і вивести в консоль:
// User's full name is [name] [lastName]. He is [age] years old.



// let name = prompt('Введите свое имя');
// let lastName = prompt('Фамилия');
// let age = prompt('Возраст');
// console.log(`User's full name is ${[name]} ${[lastName]}. He is ${[age]} years old`)

// NUMBER 2

// Написати програму, яка переведе введену оцінку студента у болонський формат
// 89 – 100 це A,  75 – 88 це В, 60 – 74 це С, 45 – 59 це D,  20 – 44 це Е, до 20 це F

// const userResult = Number(prompt('Введіть оцінку'));

// if (89 <=  userResult <= 100) {
//     console.log('A')
// }
// else if (userResult >= 75 && userResult <= 88) {
//     console.log('B')
// }
// else if (userResult >= 60 && userResult <= 74) {
//     console.log('C')
// }
// else if (userResult >= 45 && userResult <= 59) {
//     console.log('D')
// }
// else if (userResult >= 20 && userResult <= 44) {
//     console.log('E')
// }
// else if (userResult <= 20) {
//     console.log('F')
// }


// TASK Number 3

// Використовуючи конструкцію if..else, напишіть код, який перевіряє, чи вистачає користувачу грошей на таксі :)
// Якщо так, показати 'Let`s go!', якщо ні 'Not enough'.
// // const taxiPrice = 100;

// const taxiPrice = 100;
// const cash = Number(prompt("Enter your cash"));
// if (cash >= taxiPrice) {
//  console.log("Let`s go!");
// } else {
//  console.log("Not enough");
// }
// const message = cash >= taxiPrice ? "Let`s go!" : "Not enough";
// console.log(message);



// TASK Number 4
// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: 'What is your budget for the trip?'.
// Якщо більше або дорівнює 20000, показати: 'Welcome to Turkey',
// якщо більше або 15000, то показати: 'Welcome to Egypt',
// якщо більше або 10000, то показати: 'Welcome to Bulgaria',
// якщо більше або дорівнює 5000, то показати: 'Welcome to Truskavets',
//     інакше – відобразити: 'Go to work'




// const budgetUser = Number(prompt('What is your budget for the trip?'));
// if (budgetUser >= 20000) {
//     console.log('Welcome to Turkey')
// } else if (budgetUser >= 15000) {
//     console.log('Welcome to Egypt')
// } else if (budgetUser >= 10000) {
//     console.log('Welcome to Bulgaria')
// } else if (budgetUser >= 5000) {
//     console.log('Welcome to Truskavets')
// }else{console.log('Go to work')}
  


// TASK Number 5
// Напишіть програму, яка буде находити сумму, різницю, множення, частку двох чисел.
// Користувач вводить 2 числа, потім вводить знак операції і отримує результат у форматі
// "Сумма чисел a i b дорівнює result"(шаблон для кожного відповіді)



// const firstNumber = Number(prompt('Введите первое число'));
// const secondNumber = Number(prompt('Ииедите второе число'));
// const operation = prompt("Enter your operation");
// let result;

// switch (operation) {
//   case "+":
//     result = `Сумма чисел ${firstNumber} i ${secondNumber} дорівнює ${firstNumber + secondNumber}`;
//     console.log(result);
//     break;
//   case "-":
//     result = `Різниця чисел ${firstNumber} i ${secondNumber} дорівнює ${firstNumber - secondNumber}`;
//     alert(result);
//     break;
//   case "*":
//     result = `Добуток чисел ${firstNumber} i ${secondNumber} дорівнює ${firstNumber * secondNumber}`;
//     alert(result);
//     break;
//   case "/":
//     result = `Частка чисел ${firstNumber} i ${secondNumber} дорівнює ${firstNumber / secondNumber}`;
//     alert(result);
//     break;
//   default:
//     alert("Ми не можемо зробити цю операцію");
// }

// TASK Number 6

// Використовуючи prompt задайте питання, на яке можна відповісти "так" чи "ні"
// Випадкове число для відповіді генерується функцією Math.floor(Math.random() * 5)
// Використовуйте switch для створення випадкових відповідей, де:
// 0 - 'Все будет ОК'
// 1 - 'Може так, а може ні'
// 2 - 'Певно, ні'
// 3 - 'Дуже ймовірно'
// def - 'Я нічого про це не знаю'
// Вивести відповідь із запитанням ("Поставлене запитання - question.
//  Шар думає, що - answer")



// const userQuestion = prompt('Хочешь научиться верстать?');
// const number = Math.floor(Math.random() * 5);
// let message;


// switch (number) {
//     case 0:
//        message = 'Все будет ОК';
//         break;
//      case 1:
//        message = 'Може так, а може ні';
//         break;
//      case 2:
//        message = 'Певно, ні';
//         break;
//      case 3:
//        message = 'Дуже ймовірно';
//         break;
//      default:
//      message ='Я нічого про це не знаю';
// }
// console.log(`Поставлене запитання - ${userQuestion}. Шар думає, що - ${message}`)



// TASK Number 7
// Напишіть код, який запитуватиме логін за допомогою prompt і логуватиме результат у консоль браузера.
// Якщо відвідувач вводить Admin, то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc – вивести рядок "Cancelled"
// Інакше вивести рядок "I don't know you"
// Пароль перевіряти так:
// Якщо введено пароль "I am the boss", вивести рядок "Hello!"
// Інакше виводити рядок "Wrong password"

// const userLog = prompt('Your login').toLowerCase();;
// console.log(userLog)

// const adminLog = 'Admin';


// if (userLog !== adminLog) {
//     console.log('I don`t know you')
// } else if (!userLog) {
//     console.log('Cancelled');
// } else {
//     const userPass = prompt('Your password');
//     if (userPass === 'I am the boss') {
//         console.log('Hello!');
//     }else {
//         console.log('Wrong password');
    
//     }
// }





// TASK Number 8
// Написати програму, яка отримає від користувача число (кількість хвилин) і виведе на екран рядок у форматі годин
// та хвилин.

// const userNumber = Number.parseInt(prompt('Введите число'));
// const restMinutes = userNumber % 60;
// const hours = Number.parseInt(userNumber / 60);
// if (restMinutes === 0) {
//   console.log(`Зараз рівно ${hours} години`);
// } else {
//   console.log(`Зараз ${hours} години, ${restMinutes} хвилин(а).`);
// }
0707
//task


// Інпут (input, focus, blur)

// Зробіть так, щоб
//  - при фокусі на інпут його кордон ставав жовтим (клас .active)
//  - при введенні в інпут введений текст потрапляв до абзацу під інпутом
//  - при втраті фокусу перевіряємо текст в інпуті, і якщо він порожній, фарбуємо кордон у червоний колір (клас .error),
//  а якщо ні - просто забираємо жовту рамку.
{/* <input
  placeholder="Enter something"
  name="message"
  type="text"
  autocomplete="off"
/>
      <p>Your message: "<b class="text"></b>"</p>

      input:not([type='checkbox']) {
    border-radius: 5px;
    width: 200px;
    height: 30px;
    font-size: 18px;
    padding: 8px;
    outline: none;
}

input::placeholder {
    font-size: 16px;
}

.active {
    border: 2px solid rgb(192, 192, 0);
}

.error {
    border: 2px solid red;
} */}
//answer
// const input = document.querySelector("input");
// const outputText = document.querySelector("b");
// input.addEventListener("focus", changeColor);
// input.addEventListener("keydown", addText);
// input.addEventListener("blur", examinationFn);
// function changeColor() {
//   input.classList.add("active");
// }
// function addText() {
//   outputText.textContent = input.value;
// }
// function examinationFn() {
//   if (input.value === "") {
//     input.classList.remove("active");
//     input.classList.add("error");
//   } else if (input.value !== "") {
//     input.classList.remove("error");
//     input.classList.add("active");
//   }
// }


//task
// Popup

// Даний простий прихований popup з класом popup.
// При натисканні на кнопку показати popup (клас popup_open).
// При натисканні ESC приховати.
// Слухач ESC не повинен постійно висіти на window, а кнопка та слухач кліка повинні не діяти при відкритій модалці.
// Перевірити це в тілі функції-обробника.


{/* <div class="popup">
  <h3>Hello from popup! ❤</h3>
</div>
<button class="open-popup-btn">Open</button> */}
// button {
//     margin: 0 14px;
//     padding: 7px 10px;
//     border-radius: 5px;
//     background-color: #008cba;
//     border: none;
//     color: white;
//     cursor: pointer;
//     box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
//     inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
//     inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12),
//     0 2px 12px 0 rgba(0, 0, 0, 0.24), 0 8px 25px 0 rgba(0, 0, 0, 0.19);
//     transition: all 0.15s ease-in-out;
// }

// button:disabled {
//     opacity: 0.6;
//     cursor: not-allowed;
//     box-shadow: none;
// }

// button:hover:not(:disabled) {
//     background-color: #007caa;
//     box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
//     inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
//     inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12),
//     0 1px 6px 0 rgba(0, 0, 0, 0.24), 0 4px 12px 0 rgba(0, 0, 0, 0.19);
// }

// button:active:not(:disabled) {
//     box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
//     inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
//     inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
// }


// .popup {
//     padding: 2px;
//     margin-bottom: 40px;
//     border-radius: 5px;
//     background-color: blanchedalmond;
//     text-align: center;
//     box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
//     inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
//     inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12),
//     0 20px 36px 0 rgba(0, 0, 0, 0.24), 0 20px 36px 0 rgba(0, 0, 0, 0.19);
//     transition: all 0.1s 0.1s cubic-bezier(0.5, 0, 0.5, 1);
//     opacity: 0;
//     z-index: 1;
//     transform: scale(0.8);
// }

// .popup_open {
//     opacity: 1;
//     transform: scale(1);
// }

// .open-popup-btn {
//     padding: 12px 24px;
//     font-size: 1em;
// }

//answer
// const popup = document.querySelector(".popup");
// const btnPopup = document.querySelector(".open-popup-btn");
// btnPopup.addEventListener("click", showMassege);
// function showMassege() {
//   popup.classList.add("popup_open");
//   btnPopup.setAttribute("disabled", "disabled");
//   window.addEventListener("keydown", onEscPressKey);
// }
// function onEscPressKey(event) {
//   if (event.code === "Escape") {
//     popup.classList.remove("popup_open");
//     window.removeEventListener("keydown", onEscPressKey);
//     btnPopup.removeAttribute("disabled");
//   }
// }


0807

//task

// Є сині прямокутники.
// 1) При натисканні на прямокутник він повинен змінювати колір з синього на жовтий, з жовтого на синій (клас block_active).
// 2) При натисканні на прямокутник, він стає жовтим.
//    При цьому якщо є вже жовтий квадрат, то він стає синім.
//    Так можна кликати на будь-який квадрат, він стає жовтим, а старий жовтий квадрат назад синім і тд.
// 3) Внизу таблиці є кнопка "змінити кольори".
//    При її натисканні всі кольори клітин змінюються на протилежні.
{/* <nav class="container">
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
    <div class="shadow js-block"></div>
</nav>
  <button class="reverse">Change colors</button> */}

//   .container {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
// }

// .container div {
//     width: 40px;
//     height: 40px;
//     background-color: #06c;
//     margin: 6px 0;
//     flex-basis: 23%;
//     border-radius: 5px;
//     transition: transform 0.2s;
// }

// .container div:hover {
//     transform: scale(1.04);
// }

// .container.block_active,
// .container div.block_active,
// .container .reverse.block_active {
//     background-color: #fc0;
// }

// button.reverse {
//     display: block;
//     width: 100%;
//     background-color: rgb(210, 210, 210);
//     border: 1px solid #ccc;
//     color: #000;
//     margin-top: 20px;
// }

// button.reverse:hover {
//     background-color: rgb(200, 200, 200);
// }

//answer

// const btnEl = document.querySelector('.reverse');
// const containerEl = document.querySelector('nav');
// const blockEl = document.querySelectorAll('.js-block');
// containerEl.addEventListener('click', onBlockClick);
// containerEl.addEventListener('click', onBlockChange);
// btnEl.addEventListener('click', onBtnClick);
// 1)
// function onBlockClick(event) {
//   if (event.target.tagName !== 'DIV') {
//     return;
//   }
//   event.target.classList.toggle('block_active');
// }
// 2)
// function onBlockChange(event) {
//   if (event.target.tagName !== 'DIV') {
//         return;
//       }
//       console.log('~', event.target);
//       console.log('-', event.currentTarget);
//       const target = event.target;
//       const container = event.currentTarget;
//       const activeBlock = container.querySelector('.block_active');
//       if (activeBlock) {
//         activeBlock.classList.remove('block_active');
//       }
//       target.classList.add('block_active');
// }
// 3)
// function onBtnClick(event) {
//   const active = [...blockEl].filter(el => el.classList.contains('block_active'));
//   console.log(active);
//   const unActive = [...blockEl].filter(el => !el.classList.contains('block_active'));
//   console.log(unActive);
//   active.forEach(el => el.classList.remove('block_active'));
//   unActive.forEach(el => el.classList.add('block_active'));
// }

//task

// TODO list 

// Існує форма з одним інпутом, куди вводиться текст. І є чекбокс.
//    Поки чекбокс не натиснутий, кнопка на формі неактивна.
//    Натисканням Enter в інпуті або натисканням на кнопку Add, в список нижче, додається todo-нотатка.
//    Очистити інпут
//    Прибрати перезавантаження, звертатися через форму (elements) та ім'я інпуту
//    При натисканні на todo-замітку у списку, вона стає виконаною, тобто. текст закреслюється (клас complete)
//    Чекбокс при додаванні нотатки знову має стати не вибраним, а кнопка знову недоступною
//    Додати кнопку Видалити на кожну нотатку (+функціонал видалення)
//    <form>
//     <input name="myTodo" type="text" autocomplete="off" />
//     <button disabled type="submit">Add</button>
//     <label>Confirm <input type="checkbox" name="confirm" /></label>
// </form>

// <h4>TO-DO list:</h4>
// <ol class="todo-list"></ol>

// form {
//     display: flex;
// }

// input[type='checkbox'] {
//     margin: 0 10px;
// }

// .todo-list li {
//     margin: 10px;
//     font-size: 20px;
//     cursor: pointer;
// }

// .complete {
//     text-decoration: line-through;
// }





















