"use strict";
const registrarionBtn = document.querySelector(".registrationBtn"),
        autorisationBtn = document.querySelector(".autorisationBtn"),
        results = document.querySelector(".results"),
        hello = document.getElementById('hello');
let time = new Date();
let userLoginArr = [];
let fullName, firstName, lastName, login, password, autorisationLogin, autorisationPassword;

const optionsMonth = {
  month: "long",
};

const timeCorrection = (time) => {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
};

const monthCorrection = (value) => {
  if (value === "август" || value === "март") {
    return value + "а";
  } else {
    return value.slice(0, -1) + "я";
  }
};

if (localStorage.getItem("userLogin")) {
  userLoginArr = JSON.parse(localStorage.getItem("userLogin"));
  render();
}

function render() {
  results.textContent = "";
  userLoginArr.forEach((item, i) => {

    const li = document.createElement("li");

    li.classList.add("userLogin");

    li.innerHTML = `<div<span class="text-todo"> Имя: ${item.firstName}, Фамилия: ${item.lastName},
        Дата регистрации: ${item.regDate} </span> <button class='removeLogin fa fa-trash'></button></div>`;

    results.append(li);

    const removeBtn = li.querySelector(".removeLogin");

        removeBtn.addEventListener("click", () => {
          userLoginArr.splice(i, 1);
          localStorage.removeItem("userLogin");
          render();
        });
        localStorage.setItem('userLogin', JSON.stringify(userLoginArr));
  });
}

registrarionBtn.addEventListener("click", () => {
  let arr=[];
  do{
    fullName = prompt("Введите имя пользователя с пробелом");
    arr = fullName.split(" ");
    console.log(arr);
  }while( fullName===null || arr.length>2 || arr.length<2);
  do{
    login = prompt("Введите логин").split(' ').join('');
  }while( login.trim()==='');
  do{
    password = prompt("Введите пароль").split(' ').join('');
  }while(password === null || password.trim()==='');
  

  

      const newLog = {
        firstName: arr[0],
        lastName: arr[1],
        login: login,
        password: password,
        regDate: time.getDate() +
        " " +
        monthCorrection(time.toLocaleString("ru", optionsMonth)) +
        " " +
        time.getFullYear() +
        " г. " +
        timeCorrection(time.getHours()) +
        ":" +
        timeCorrection(time.getMinutes()) +
        ":" +
        timeCorrection(time.getSeconds()),
      };

  userLoginArr.push(newLog);

  render();
});

autorisationBtn.addEventListener("click", () => {

    autorisationLogin = prompt("Введите логин");
    autorisationPassword = prompt("Введите пароль");

    
    let check = userLoginArr.find((item) => 
    item.login === autorisationLogin && item.password === autorisationPassword
    );
    if(check){
      alert('Авторизация успешна!');
      hello.textContent=`Привет, ${check.firstName}`;
    }else{
      alert('Пользователь не найден');
      hello.textContent=`Привет, незнакомец`;
    }
    
});

render();
