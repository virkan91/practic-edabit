

// 1.  Создайте функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.

    // function addition(a, b) {
    // 	let sum = a + b;
    // 	return sum;
    // }
    // console.log (addition(3, 2));
    // console.log (addition(-3, -6));
    // console.log (addition(7, 3));



// 2. Напишите функцию, которая принимает целое число minutesи преобразует его в секунды.

    // function convert(minutes) {
    // 	return  minutes * 60;
    // }
    // console.log(convert(5));
    // console.log(convert(60));
    // console.log(convert(120));



// 3.  Создайте функцию, которая принимает число в качестве аргумента, увеличивает число на +1 и возвращает результат.

    // function addition(num) {
    // 	let cnt = num + 1;
    // 	return cnt;
    // }
    // console.log(addition(0));
    // console.log(addition(9));
    // console.log(addition(-3));



// 4. Напишите функцию, которая принимает основание и высоту треугольника, а также return его площадь.

    // function triArea(base, height) {
    // 	return (base * height) / 2;
        
    // }
    // console.log(triArea(3, 2 ));
    // console.log(triArea(7, 4 ));
    // console.log(triArea(10, 10 ));


// 5. Создайте функцию, которая принимает возраст в годах и возвращает возраст в днях.

    // function calcAge(age) {
    // 	let sum = age * 365;
    // 	return sum;
    // }


// 6. Создайте функцию, которая принимает массив, содержащий только числа, и возвращает первый элемент.

    // function getFirstValue(arr) {
    // 	return arr[0];
    // }
    // console.log(getFirstValue([1, 2, 3]));



// 7. Создайте функцию, которая принимает voltageи currentвозвращает вычисленную мощность

    // function circuitPower(voltage, current) {
    // 	let  sum = voltage * current;
    // 	return sum;
    // }
    // console.log(circuitPower(230 , 10));



// 8. Напишите функцию, которая преобразует hoursв секунды.

    // function howManySeconds(hours) {
    //     return hours * 3600;
    // }
    // console.log(howManySeconds(2));


// 9.Создайте функцию, которая находит максимальный диапазон третьего ребра треугольника, где все длины сторон являются целыми числами.

    // function nextEdge(num1, num2) {
    // 	let sum = (num1 + num2) - 1;
    // 	return sum;
    // }
    // console.log(nextEdge(8, 10));


// 10. В JavaScript есть единственный оператор, способный обеспечить оставшуюся часть операции деления. 
//В качестве параметров передаются два числа. Первый параметр, разделенный на второй параметр, 
//будет иметь остаток, возможно, ноль. Верните это значение.

    // function remainder(x, y) {
    // 	let sum = x % y;
    // 	return sum;
    // }
    // console.log(remainder(1, 3));


// 11. Создайте функцию, которая принимает lengthи widthнаходит периметр прямоугольника.

    // function findPerimeter(length, width) {
    // 	return (length + width) * 2;
    // }

    // console.log(findPerimeter(6, 7));


// 12.Создайте функцию, которая принимает число в качестве единственного аргумента 
//и возвращает значение, true если оно меньше или равно нулю, в противном случае возвращает значение false.

    // function lessThanOrEqualToZero(num){ 
    //     if (num <= 0){
    //     return  true;
    //     } 
    //     return false;
    // }
    // console.log(lessThanOrEqualToZero(0));


// 13. Учитывая n-сторонний правильный многоугольник n, вернуть общую сумму внутренних углов (в градусах).

    // function sumPolygon(n) {
    // 	let sum = (n - 2 ) * 180;
    // 	return sum;
    // }
    // console.log(sumPolygon(4));


// 14.Вы подсчитываете очки за баскетбольный матч, учитывая количество забитых 2-х и 3-х очков, 
//находите окончательные очки для команды и возвращаете это значение.

    // function points(twoPointers, threePointers) {
    // 	let sum = (twoPointers * 2) + (threePointers * 3);
    // 	return sum;
    // }

// 15.Даны два числа, возврат true, если сумма обоих чисел меньше 100. В противном случае возврат false.

    // function lessThan100(a, b) {
    // 	let sum = a + b;
    // 	if(sum < 100){
    // 		return true;
    // 	}
    // 	return false;
    // }

    // console.log(lessThan100(22, 15));


// 16.In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
//The farmer breeds three species:

    // function animals(chickens, cows, pigs) 
    //{
    // 	let cnt = (chickens * 2)+(cows * 4)+(pigs * 4);
    // 	return cnt;
    // }
    // console.log(animals(2 , 3 , 5 ));



// 17. Создайте функцию, которая возвращает значение, trueкогда num1равно num2; в противном случае возврат false.

    // function isSameNum(num1, num2) 
    // {
    // 	if(num1 === num2){
    // 	return true;
    // 	}
    // 	return false;
    // }

    // console.log(isSameNum(4, 8));
    // console.log(isSameNum(2, 2));
    // console.log(isSameNum(2, "2"));


// 18.Create a function that takes the number of wins, draws and losses and 
//calculates the number of points a football team has obtained so far.

// function footballPoints(wins, draws, losses) {
// return (wins * 3 ) + (draws * 1) + (losses * 0);

// }

// console.log(footballPoints(3, 4, 2));



// 19.Напишите функцию, которая принимает два целых числа ( hours, minutes), преобразует их в секунды и складывает.

    // function convert(hours, minutes) {
    // 	let h = hours * 3600;
    // 	let m = minutes * 60;
    // 	return h + m;
    // }


// 20.В этом задании вы должны проверить равенство двух разных значений с заданными параметрами aи b.

// function checkEquality(a, b)
//  {
//     return  a === b;
//   }


//__________________________________________________________________________________________________________________________________



// 12-05-23


// 1.Создайте функцию, которая принимает три аргумента prob, 
//и возвращает prizeзначение if ; в противном случае возврат .paytrueprob * prize > payfalse

    // function profitableGamble(prob, prize, pay) {
    //     if(prob * prize > pay){
    //         return true;
    //     }
    //     return false;
    // }
    // console.log(profitableGamble(0.2, 50, 9));




// 2.Создайте функцию, которая принимает два аргумента. 
//Оба аргумента являются целыми числами, aи b. Возврат true, если один из них 10или их сумма равна 10.

    // function makesTen(a, b) {
    // 	let sum = a + b;
    // 	return (a == 10 || b == 10 || sum == 10);
    // }
    // console.log(makesTen(9, 9));



// 3. Исправьте код на вкладке кода, чтобы пройти это испытание (только синтаксические ошибки). 
//Посмотрите на примеры ниже, чтобы получить представление о том, что должна делать функция.


    // function maxNum(n1,n2) {
    // 	if (n1 > n2) {
    // 	  return n1
    // 	}
    // 	return n2
    // }


// 4.Учитывая два аргумента, вернуть массив, содержащий эти два аргумента.

// function makePair(num1, num2) {
// 	let arr = [num1, num2];
// 	return arr;
// }
// console.log(makePair(512124, 215));


// 5. Создайте функцию, которая возвращает значение true, если целое число без остатка делится на 5 и falseв противном случае.

    // function divisibleByFive(n) {
    // 	if(n % 5 == 0){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(divisibleByFive(37));


// 6.Создайте функцию, которая возвращает значение true, если строка пуста и falseв противном случае.

    // function isEmpty(s) {
    // 	if(s === ""){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(isEmpty(""));
    // console.log(isEmpty(" "));
    // console.log(isEmpty("a"));


// 7.Создайте функцию, которая принимает целое число и возвращает значение, 
//trueесли оно делится на 100, в противном случае возвращает значение false.

    // function divisible(num) {
    // 	if(num % 100 == 0){
    // 		return true;
    // 	}
    // 	return false;
    // }
    // console.log(divisible(1000));



// 8. Учитывая два целых числа aи b, вернуть, trueесли aможно разделить на b. Вернуть falseв противном случае.

    // function dividesEvenly(a, b) {
    // 	if (Number.isInteger(a / b)) {
    //     return true;
    //   }
    //   return false;
    // }


// 9. Создайте функцию, которая принимает строку и возвращает ее как целое число.

    // function stringInt(str) {
    //     let str = "";
    //     let num = parseInt(str);
    //     return num;
    // }
    // console.log(stringInt(6));

// 10. Минимум I: если логическое значение, то логическое значение

    // function isEven(n) {
    // 	if (n % 2 === 0) {
    // 		return true;
    // 	}
    // 		return false;    
    // }

 
// 11. Перевернуть массив
// Напишите функцию для обращения массива.

    // function reverse(arr) {
    // 	let rev = arr.reverse();
    // 	return rev;
    // }
    // console.log(reverse([1, 2, 3, 4]));


// 12.  Использование стрелочных функций

    // let arrowFunc = x => x;


// 13.Вернуть строку как целое число

    // function stringInt(str) {
    // 	return parseInt(str);
    // }


// 14. Создайте функцию, которая вычисляет площадь прямоугольника. Если аргументы недействительны, ваша функция должна вернуть -1.

    // function area(h, w) {
    //     let rez = h * w 
    //    if(h > 0 && w > 0){
    //        return rez
    //    }else{
    //        return -1
    //    }
    // }
    // console.log(area(3, 4));

// 15 Объединить имя и фамилию в одну строку

    // function concatName(firstName, lastName) {
    // 	return `${lastName}, ${firstName}`;
    // }
    // console.log(concatName("First", "Last"));
    // console.log(concatName("Doe", "John"));