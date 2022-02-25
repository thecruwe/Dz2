// 1. Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

let array=[1,2,3,4,5,6,7,8,9,10,11];

console.log(array.filter(element => !(element % 2)).reduceRight((sum, element) => sum + Math.sqrt(element), 0));

// 2. Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
console.log(1.15+2.30);

// 3. Треугольник. Напишите цикл,  выводит такой треугольник:
// *
// **
// ***
// ****
// *****
// ******
let triangle = ''
for (let i=0; i < 6; i++) {
    triangle+='*';
    console.log(triangle);
}

// 4. Напишите программу, которая выводит через console.log все числа от 1 до 100,...
for (let i = 1; i <= 100; i ++) {
    if ((i % 3 == 0) && (i % 5 == 0))
        console.log('FizzBuzz');
    else
    if (i % 5 == 0)
        console.log('Buzz');
    else
    if ((i % 5 != 0) && (i % 3 == 0))
        console.log('Fizz');
    else
        console.log(i);
}

// 5. Напишите скрипт, который считает количество секунд в часе.
console.log(60*60)

// 6. Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

let username = prompt("Введите Ваше имя")
alert("Ваше имя " + username)

// 7. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
let str = 'abcde';
console.log(str[0] + str[2] + str[4]);

// 8. Создайте ассоциативный массив заработных плат заработных плат obj. Выведите на экран зарплату Пети и Коли.
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
console.log(obj['Петя'], obj['Коля']);

// 9. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
let arr = [2, 5, 3, 9];
let res = arr[0]*arr[1]+arr[2]*arr[3]
console.log(res);

// 10. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4из этого массива.
let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(array[1][0]);

// 11. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
var time = 10;
if (time >= 0 && time <= 14) {
	console.log('В первую четверть');
}
if (time >= 15 && time <= 30) {
	console.log('Во вторую четверть');
}
if (time >= 31 && time <= 45) {
	console.log('В третью четверть');
}
if (time >= 46 && time <= 59) {
	console.log('В четвертую четверть');
}

// 12. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  a, равном 1, 0, -3.
let a = 1
if (a < 0) {
    console.log("Неверно")
} else console.log("Верно")

let b = 0
if (b < 0) {
    console.log("Неверно")
} else console.log("Верно")

let c = -3
if (c < 0) {
    console.log("Неверно")
} else console.log("Верно")

// 13. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
let test1 = true
if (test1 == true) {
console.log('Верно');
} else {
console.log('Неверно');
};

let test2 = false;
test2 ? console.log('Верно') : console.log('Неверно');

// 14. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
let num = prompt('Введите число');
switch (num) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Весна');
        break;
    case 3:
        console.log('Лето');
        break;
    case 4:
        console.log('Осень');
        break;
    default:
        console.log('Введите другое число');
}

// 15. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла forвыведите все эти элементы на экран.
let arr2 = [1, 2, 3, 4, 5];
let i
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// 16. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
let a1 = 10;
let b1 = 3;
let result1 = a1 % b1;
console.log(result1);

// 17. Возведите 2 в 10 степень. Результат запишите в переменную st.
let a2 = 2;
let st = a2 ** 10;
console.log(st);

// 18. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let cifra = Math.sqrt(379)
console.log (Math.round(cifra))
console.log (Math.round(cifra * 10)/10)
console.log (Math.round(cifra * 100)/100)

// 19. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

// 20. Выведите на экран случайное целое число от 1 до 100.
console.log(Math.floor(Math.random() * 100))

// 21. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice)
let str4 = 'aaa bbb ccc';
console.log(str4.substr(4,3));
console.log(str4.substring(4,7));
console.log(str4.slice(4, 7));

// 22. Дана строка 'js'. Сделайте из нее строку 'JS'.
let str2 = 'js'
console.log(str2.toUpperCase())

// 23. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let str3 = 'я учу javascript!'
console.log(str3.length)

// 24. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
let str5 = 'я учу javascript!'
console.log(str4.indexOf('учу'))

// 25. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let str7 = 'Я-учу-javascript!';
while (str7.includes('-')) {
    str7 = str7.replace('-','!');
}
console.log(str7);

// 26. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let str8 = 'я учу javascript!';
console.log(str8.split(''))

// 27. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
let arr4 = ['я', 'учу', 'javascript','!'];
console.log(arr4.join('+'));

// 28. Преобразуйте первую букву строки в верхний регистр.
let str9 = 'я учу javascript !';
console.log((str9.charAt(0).toUpperCase()));
console.log((str9.charAt(0).toUpperCase()), str9.slice(2));