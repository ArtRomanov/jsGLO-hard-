'use strict';
//Переменная lang может принимать 2 значения: 'ru' 'en'.
//Написать условия при котором в зависимости от значения lang будут выводится дни недели
//на русском или английском языке. Решите задачу

//через if
let lang = 'ru';
if (lang==='ru'){
    console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']);
} else if(lang==='eng'){
    console.log(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']);
}

//через switch-case
switch(lang){
    case 'ru':
        console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']); 
    break;
    case 'eng':
        console.log(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']);
    break;
}

//через многомерный массив без ифов и switch
let arr =
 [ ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
 ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']];

let result=lang==='ru' ? arr[0]:arr[1];
console.log(result);

//У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль
//“директор”, если значение “Максим” то вывести в консоль “преподаватель”,
//с любым другим значением вывести в консоль “студент”
//	Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
let namePerson='Илья';
let resultName;
 resultName=namePerson==='Артём' ? 'директор':
            namePerson==='Максим' ? 'преподаватель':
            'студент';
console.log(resultName);