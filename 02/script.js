//  Создать переменную num со значением 266219 (тип данных число)
let num = 266219;
// Вывести в консоль произведение (умножение) цифр этого числа
let arr = num.toString().split('');
let prod = 1;
for (let i=0; i<arr.length;i++){
    prod*=parseInt(arr[i]);
}
console.log(prod);
// Полученный результат возвести в степень 3, используя только 1 оператор
let rise = prod ** 3;
//Вывести на экран первые 2 цифры полученного числа
let new1 = rise.toString().split('');
alert(new1[0]); 
alert(new1[1]);