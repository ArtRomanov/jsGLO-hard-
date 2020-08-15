'use strict';
let weeks = ['пн','вт','ср','чт','пт','сб','вс'];

//выставим элементы на страницу
//зададим функцию по созданию строк из элементов массива и добавлением их в список
function show (week) {
    //вычисляем текущий день недели
    let now = new Date().getDay()-1;

    //находим место для вставки новых строк
    let daysBlock = document.getElementById('daysOfWeek');
    document.getElementById('daysOfWeek').style.listStyleType = 'none';

    //Достаём элементы массива и передаём их в функцию
    for (let i=0;i<week.length;i++){

        //создаём строки
        let days = document.createElement('li');
        
        //запишем в них значение дня недели
        days.innerText=week[i];

        //пишем условия: для выходных дней курсив, для текущего дня жирный шрифт
        if(i===now){
            if(i===5 || i===6){
                days.innerHTML=week[i].italics().bold(); 
            } else {
                days.innerHTML=week[i].bold();
                }
        } else if(i===5 || i===6){
            days.innerHTML=week[i].italics();
        }

        //вставляем их в список
        daysBlock.appendChild(days);
    }
    
}
show(weeks);

