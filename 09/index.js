'use strict';

function bigCorrection(){
let now = new Date();
let sentence='';
let daysOfWeek = now.getDay();
let currentHour = now.getHours();
let currentMinute = now.getMinutes();
let currentSeconds = now.getSeconds();
let currentMonth=now.getMonth();
let currentDate=now.getDate();

let weeks = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let months =['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
let hourRus =['час','часа','часов'];
let minRus=['минута','минуты','минут'];
let secRus=['секунда','секунды','секунд'];
let hoursCorrection=0;
let minutessCorrection=0;
let secondsCorrection=0;
let arr=[];

let dateBlock = document.getElementById('currentTime');
document.getElementById('currentTime').style.listStyleType = 'lower-alpha';
document.getElementById('currentTime').style.color = 'red';
document.getElementById('currentTime').style.fontWeight='bold';


        //Фиксим часы
        function correctionHours(){
            if((currentHour===1) || (currentHour>20 && currentHour%10===1)){
            return(currentHour+' '+hourRus[0]);
            }else if((currentHour>=2 && currentHour<=4)||(currentHour > 20 && currentHour % 10 >= 2 && 
                currentHour % 10 <= 4)){
                return(currentHour+' '+hourRus[1]);
            }else{
                return(currentHour+' '+hourRus[2]);
            }
        }
        hoursCorrection = correctionHours();

        //Фиксим минуты
        function correctionMinutes(){
        if((currentMinute===1) || (currentMinute>20 && currentMinute%10===1)){
            return(currentMinute+' '+minRus[0]);
            }else if((currentMinute>=2 && currentMinute<=4)||(currentMinute > 20 && currentMinute % 10 >= 2 && 
                currentMinute % 10 <= 4)){
                return(currentMinute+' '+minRus[1]);
            }else{
                return(currentMinute+' '+minRus[2]);
            }
        }
        minutessCorrection = correctionMinutes();

        //Фиксим секунды
        function correctionSeconds(){
            if((currentSeconds===1) || (currentSeconds>20 && currentSeconds%10===1)){
            return(currentSeconds+' '+secRus[0]);
            }else if((currentSeconds>=2 && currentSeconds<=4)||
            (currentSeconds > 20 && currentSeconds % 10 >= 2  && currentSeconds % 10 <= 4)){
                return(currentSeconds+' '+secRus[1]);
            }else{
                return(currentSeconds+' '+secRus[2]);
            }
        }
        secondsCorrection = correctionSeconds();


//проверочки на соответствие чисел пункта б)
currentHour = (currentHour < 10) ? '0' + currentHour : currentHour;
currentSeconds = (currentSeconds < 10) ? '0' + currentSeconds : currentSeconds;
currentMonth=(currentMonth < 10 ) ? '0' + currentMonth : currentMonth;
currentMinute=(currentMinute < 10) ? '0' + currentMinute : currentMinute;
currentDate=(currentDate < 10) ? '0' + currentDate : currentDate;


//строим шаблоны варианта а) и варианта б)
let one = '\’'+'Сегодня '+weeks[now.getDay()-1]+', '+now.getDate()+' '+months[now.getUTCMonth()]+ ' '+
now.getUTCFullYear()+' года'+', '+hoursCorrection+' '+minutessCorrection+' '+secondsCorrection+'\’';

let two = '\’'+currentDate+'.'+currentMonth+'.'+now.getFullYear()+'-'+currentHour+':'+currentMinute+
':'+currentSeconds+'\’';


//указываем место для выгрузки на страницу

let date1 = document.getElementById('first');
let date2 = document.getElementById('second');

//выгружаем
date1.textContent=one;
date2.textContent=two;
}

//как там в песне поётся: "замыкая круг, ты назад посмотришь вдруг..."
setInterval(function(){
    bigCorrection();
},1000);


