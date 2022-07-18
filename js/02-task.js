22.06
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

27.06
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



//Task6
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників та повертає ім'я самого
// продуктивного (який виконав найбільше завдань). Співробітники і кількість виконаних завдань містяться як властивості
// об'єкта у форматі "ім'я": "кількість задач".
// console.log(findBestEmployee({ann: 29, david: 35, helen: 1, lorence: 99,})); // lorence
// console.log(findBestEmployee({poly: 12, mango: 17, ajax: 4,})); // mango
// console.log(findBestEmployee({ lux: 147, david: 21, kiwi: 19, chelsy: 38, })); // lux


// function findBestEmployee(employees) {
//   const values = Object.keys(employees);
//   let name = values[0];
//   let tasks = employees[values[0]];
//   for (let i = 1; i < values.length; i += 1) {
//     if (tasks < employees[values[i]]) {
//       tasks = employees[values[i]];
//       name = values[i];
//     }
//   }
//   return `${name}: ${tasks}`;
// }

//Task7

// Маємо масив користувачів
// 1) Написати функцію getEmailsByGender(users, gender), яка отримуватиме масив користувачів та стать, і повертатиме масив
// імейлів усіх користувачів даної статі.
// 2) Написати функцію addNewUser(users, newUser), яка отримуватиме масив користувачів та об'єкт з новим користувачем.
// Функція повинна додати об'єкт у масив та повернути новий масив. Але якщо користувач з даним імейлом вже існує,
// додаватися не повинно. В такому випадку можна вивести в консоль повідомлення:
// `User with email "${email}" already exists` і повернути масив без змін.
// 3) Написати функцію deleteUser(users, userEmail), яка отримуватиме масив користувачів та email користувача, якого
// потрібно видалити. Функція повинна виконати видалення та повернути новий масив. Але якщо користувача з даним імейлом не
//  існує, потрібно вивести в консоль повідомлення:  `There is no user with email "${email}"` і повернути масив без змін.
// 4) Написати функцію editUser(users, userEmail, newName), яка отримуватиме масив користувачів, email користувача, ім'я
// якого потрібно змінити та нове ім'я. Функція повинна змінити та повернути новий масив. Але якщо користувача з даним
// імейлом не існує, потрібно вивести в консоль повідомлення: `There is no user with email "${email}"` і повернути масив
// без змін.

// const users = [
//     {
//         first_name: 'Peterus',
//         last_name: 'Verlander',
//         email: 'pverlander0@bloomberg.com',
//         gender: 'male',
//     },
//     {
//         first_name: 'Charis',
//         last_name: 'Tennant',
//         email: 'ctennant1@t-online.de',
//         gender: 'female',
//     },
//     {
//         first_name: 'Hortense',
//         last_name: 'Lammerding',
//         email: 'hlammerding2@blog.com',
//         gender: 'female',
//     },
//     {
//         first_name: 'Anatollo',
//         last_name: 'Ricards',
//         email: 'aricards3@washington.edu',
//         gender: 'male',
//     },
// ];

// 1)
//  const femaleEmails = getEmailsByGender(users, 'female');
//  console.log(femaleEmails); // ['ctennant1@t-online.de', 'hlammerding2@blog.com']
// 2)
//  const newUser = {
//    first_name: 'Oralie',
//    last_name: 'Langshaw',
//    email: 'olangshaw4@google.pl',
//    gender: 'female',
//  };
//  const updatedUsers = addNewUser(users, newUser);
//  console.log(updatedUsers); // 5 users

// // //
//  const newUser2 = {
//    first_name: 'Oralie',
//    last_name: 'Langshaw',
//    email: 'ctennant1@t-online.de',
//    gender: 'female',
//  };
//  const updatedUsers2 = addNewUser(users, newUser2);
//  console.log(updatedUsers2); // User with email "ctennant1@t-online.de" already exists

// 3)
// const updatedUsers = deleteUser(users, 'pverlander0@bloomberg.com');
// console.log(updatedUsers); // 3 users

// const updatedUsers2 = deleteUser(users, 'pverlander0@bloomberg.com');
// console.log(updatedUsers2); // There is no user with email "pverlander0@bloomberg.com"

// 4)
// const updatedUsers = editUser(users, 'aricards3@washington.edu', 'Anatoliy')
// console.log(updatedUsers); // last user has name Anatoliy

// const updatedUsers2 = editUser(users, 'fakeEmail', 'Marlene')
// console.log(updatedUsers2); // There is no user with email "fakeEmail"

// const newArray = [...users];
//   const neededUserIndex = newArray.findIndex((el) => {
//     return el.email === userEmail;
//   });
//   if (neededUserIndex === -1) {
//     return newArray;
//   }
//   newArray[neededUserIndex] = {
//     ...newArray[neededUserIndex],
//     first_name: newName,
//   };
//   return newArray;

30.06
 // task
// Напишіть функцію leaveUnique(arr), яка повертає масив, що містить лише унікальні елементи arr (Вирішити через reduce)
// const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];


// task
// Даний масив із числами. Отримайте суму квадратів його елементів, але тільки тих квадратів, які перевищують 40.
// let arr = [5, 6, 7, 8, 9];

//task
// const inventors = [
//   {
//     name: 'Albert',
//     surname: 'Einstein',
//     born: 1879,
//     passed: 1955,
//   },
//   {
//     name: 'Isaac',
//     surname: 'Newton',
//     born: 1643,
//     passed: 1727,
//   },
//   {
//     name: 'Galileo',
//     surname: 'Galilei',
//     born: 1564,
//     passed: 1642,
//   },
//   {
//     name: 'Marie',
//     surname: 'Curie',
//     born: 1867,
//     passed: 1934,
//   },
//   {
//     name: 'Johannes',
//     surname: 'Kepler',
//     born: 1571,
//     passed: 1630,
//   },
//   {
//     name: 'Nicolaus',
//     surname: 'Copernicus',
//     born: 1473,
//     passed: 1543,
//   },
//   {
//     name: 'Max',
//     surname: 'Planck',
//     born: 1858,
//     passed: 1947,
//   },
//   {
//     name: 'Katherine',
//     surname: 'Blodgett',
//     born: 1898,
//     passed: 1979,
//   },
//   {
//     name: 'Ada',
//     surname: 'Lovelace',
//     born: 1815,
//     passed: 1852,
//   },
//   {
//     name: 'Sarah E.',
//     surname: 'Goode',
//     born: 1855,
//     passed: 1905,
//   },
//   {
//     name: 'Lise',
//     surname: 'Meitner',
//     born: 1878,
//     passed: 1968,
//   },
//   {
//     name: 'Hanna',
//     surname: 'Hammarström',
//     born: 1829,
//     passed: 1909,
//   },
// ];

// Отримати відсортовані за алфавітом імена винахідників, які народилися 18-му столітті або раніше

0107
//task
// Користувач
// Напиши клас User для створення користувача з наступними властивостями:
// name - ім'я, рядок
// age - вік, число
// postsCount - кількість постів, число

// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який повертає рядок:
//     User ${ім'я} is ${вік} years old and has ${у постів} posts.

// const mangoData = {
//   name: 'Mango',
//   age: 45,
//   postsCount: 20,
// };
// const mango = new User(mangoData);

// console.log(mango);
// console.log(mango.getInfo()); // User Mango is 45 years old and has 20 posts

//task
// Напиши клас Client, який створює об'єкт із властивостями login та email.
//    login повинен бути суспільною властивістю, а email приватним.
//    Доступ до email зроби через геттер та сетер.
//    Перед тим як змінити імейл, у сеттері потрібно викликати приватний метод, який валідуватиме імейл (наявність собачки та крапки).
//    Якщо імейл невалідний – нічого не робити і вивести в консоль 'Email is not valid!'

// const mango = new Client({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log('mango', mango);

0407
//task 
// const cars = [
//     {
//         make: "Honda",
//         model: "CR-V",
//         type: "suv",
//         amount: 14,
//         price: 24045,
//         onSale: true,
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         type: "sedan",
//         amount: 2,
//         price: 22455,
//         onSale: true,
//     },
//     {
//         make: "Mazda",
//         model: "Mazda 6",
//         type: "sedan",
//         amount: 8,
//         price: 24195,
//         onSale: false,
//     },
//     {
//         make: "Mazda",
//         model: "CX-9",
//         type: "suv",
//         amount: 7,
//         price: 31520,
//         onSale: true,
//     },
//     {
//         make: "Toyota",
//         model: "4Runner",
//         type: "suv",
//         amount: 19,
//         price: 34210,
//         onSale: false,
//     },
//     {
//         make: "Toyota",
//         model: "Sequoia",
//         type: "suv",
//         amount: 16,
//         price: 45560,
//         onSale: false,
//     },
//     {
//         make: "Toyota",
//         model: "Tacoma",
//         type: "truck",
//         amount: 4,
//         price: 24320,
//         onSale: true,
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         type: "truck",
//         amount: 11,
//         price: 27110,
//         onSale: true,
//     },
//     {
//         make: "Ford",
//         model: "Fusion",
//         type: "sedan",
//         amount: 13,
//         price: 22120,
//         onSale: true,
//     },
//     {
//         make: "Ford",
//         model: "Explorer",
//         type: "suv",
//         amount: 6,
//         price: 31660,
//         onSale: false,
//     },
// ];

// 1. Написати ф-ю, яка повертає масив автомобілів з описом певного виробника, та сортує результат в алфавітному
// порядку по назві моделі.
// console.log(getSortModel(cars, 'Ford'));

// 2. Написати ф-ю, яка повертає масив автомобілів у певній ціновій категорії
// console.log(filterByPrice(cars, 20000, 24000));

// 3. Написати ф-ю getCarsProducer(cars), яка повертає масив всіх виробників для представлених авто, відсортованих
// за алфавінтим порядком
// console.log(getCarsProducer(cars));

//answer
// 1.
// function getSortModel(cars, nameCar) {
//   const SortModel = cars
//     .filter(el => el.make === nameCar)
//     .sort((a, b) => a.model.localeCompare(b.model));
//   return SortModel;
// }
// 2.
// unction filterByPrice(cars, lowLevel, upLevel) {
//   const carsArray = cars.filter(el => el.price > lowLevel && el.price < upLevel);
//   return carsArray;
// }
// 3.
// function getCarsProducer(cars, lowLevel, upLevel) {
//   const CarsProducer = cars
//     .map(el => el.make)
//     .filter((el, ind, arr) => arr.indexOf(el) === ind)
//     .sort((a, b) => a.localeCompare(b));
//   return CarsProducer;
// }

//task
// const listNames = [
//     "Сапсай Иван",
//     "Буракшаева Юлия",
//     "Богословский Артем",
//     "Мельникова Ксения",
//     "Иванов Сергей",
//     "Фурсова Елизавета",
//     "Самбикина Юлия"
// ]

// const workPositions = [
//     {
//         id: 1,
//         department: "Отдел продаж",
//         position: "Торговый представитель",
//         salary: 10000
//     },
//     {
//         id: 2,
//         department: "Отдел аналитики",
//         position: "Аналитик систем",
//         salary: 50000
//     },
//     {
//         id: 3,
//         department: "Отдел рекламы",
//         position: "Маркетолог",
//         salary: 25000
//     },
//     {
//         id: 4,
//         department: "Отдел продаж",
//         position: "Супервайзер",
//         salary: 18000
//     },
//     {
//         id: 5,
//         department: "Отдел рекламы",
//         position: "Мерчендайзер",
//         salary: 10000
//     },
//     {
//         id: 6,
//         department: "Отдел логистики",
//         position: "Водитель-экспедитор",
//         salary: 15000
//     },
//     {
//         id: 7,
//         department: "Бухгалтерия",
//         position: "Главный бухгалтер",
//         salary: 20000
//     },
// ]

// 1. написать функцию, separateName(fullName), которая принимает строку "Фамилия Имя" и возвращает объект
// в котором имя и фамилия являются отдельными свойствами: {firstName: "Имя", lastName: "Фамилия"}

// 2. Написать функцию createEmployesList(employes), которая принимает список сотрудников "Фамилия Имя" и
// записывает их в массив объектов, который описывает каждого сотрудника, добавляя
// ему уникальный id типа (1, 2, 3, и т.д.)

// 3. Написать функцию getEmployeeData(id), которая по id выбирает сотрудника из масива сотрудников
// и возвращает объект с данными сотрудника дополнеными информацией о нем из соответствующего ему объекта
// с рабочим отделом, должностью и зарплатой на этой должности в масиве workPosition - типа:
// {
//   id: 1,
//   firstName: "Иван",
//   lastName: "Сапсай",
//   department: "Отдел продаж",
//   position: "Торговый представитель",
//   salary: 10000
// }

//answer
// В першому завданні функція є “допоміжною” (для наступних задач) приймає строку, тобто елемент вихідного масиву. Повинна повернути об‘єкт з двома полями firstName та lastName. Використовуємо диструктуризацію масивів.
// console.log(separateName(listNames[0])); // {firstName: 'Иван', lastName: 'Сапсай'}


// Olha
//   14 д. назад
// 1.
// const separateName = fullName => {
//   const [lastName, firstName] = fullName.split(' ');
//   return { firstName, lastName };
// };
// console.log(separateName(listNames[1]));
// 2.
// function createEmployesList(employes) {
//   const employeeList = employes.map((el, ind) => ({ id: ind + 1, ...separateName(el) }));
//   return employeeList;
// }
// console.log(createEmployesList(listNames));
