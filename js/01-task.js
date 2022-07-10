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
