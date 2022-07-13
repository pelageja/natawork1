// Написати ф-ю countVowels, яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з
// голосними в англ алфавіті
// countVowels('the quick brown fox') // 5

// const letters = 'aeiouAEIOU';
// let result = 0;

// function coountVowelsstring(string) {
//     let array = string.split('');
//     for (let i = 0; i < array.length; i += 1){
//         if (letters.includes(array[i])) {
//             result += 1;
//         }
//     }
//      return result;
// }

// console.log(countVowels('the quick brown fox'))// 5
 
//Task2

// Напишіть функцію logItems(array), яка отримує масив та використовує цикл for, який для кожного масиву виводитиме
// у консоль повідомлення у форматі [номер елемента] - [значення елемента].
// Нумерація починається з 1. Наприклад, для першого масиву елементів
// ['Mango', 'Poly', 'Ajax'] з індексом 0 виведе '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
 
// let array = ['Mango', 'Poly', 'Ajax'];
// function logItems(array) {
//     for (let i = 0; i < array.length; i += 1) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }
// console.log(logItems(array))

//Task3
// Написати ф-ю capitalize, яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися
// з великої літери.
// capitalize('the quick brown fox') // 'The Quick Brown Fox'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt


// function capitalize(string) {
//     let  newArray = string.split(" ");

//   let secondArray = [];
//   for (let i = 0; i < newArray.length; i += 1) {
//     let newElement = newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1);
//     secondArray.push(newElement);
//   }
//   return secondArray.join(" ");
// }
// console.log(capitalize("the quick brown fox"));

//Task4
// Написати ф-ю ObjectEmpty, яка перевіряє об'єкт порожній чи ні. Якщо об'єкт порожній, повернути true, інакше false
// isObjectEmpty({}) // true
// console.log(isObjectEmpty({ name: 'user', age: 21 })); // false


// function isObjectEmpty(object) {
//    const keys = Object.keys(object);
//   return !(keys.length > 0);
// }
// console.log(isObjectEmpty({}));
// console.log(isObjectEmpty({name: 'user', age: 21}));



//Task5
// Написати ф-ю, яка приймає 2 параметри (об'єкт замовлення та об'єкт з цінами товару)
// Ця ф-я повинна повернути ціну замовлення
//const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 }
// const orderA = { apple: 5, cheese: 1, bread: 3 }
// const orderB = { orange: 10, pork: 2, bread: 1 }

// function orderPrise(productPrice, order) {
//   let total = 0;
//   for (const item in order) {
//     if (productPrice.hasOwnProperty(item)) {
//       total += order[item] * productPrice[item];
//     }
//   }
//   return total;
// }

