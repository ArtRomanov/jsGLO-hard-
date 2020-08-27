'use strict';

let start = document.getElementById('start');

let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];

let box = document.querySelector('#deposit-check');


let additionalIncomeItemnput = document.querySelectorAll('.additional_income-item');


let rightSide = document.querySelector('.result');
let budgetMonthValue = rightSide.querySelector('.budget_month-value');
let budgetDayValue = rightSide.querySelector('.budget_day-value');
let expensesMonthValue = rightSide.querySelector('.expenses_month-value');
let additionaIncomeValue = rightSide.querySelector('.additional_income-value');
let additionalExpensesValue = rightSide.querySelector('.additional_expenses-value');
let incomePeriodValue = rightSide.querySelector('.income_period-value');
let targetMonthValue = rightSide.querySelector('.target_month-value');


let leftSide = document.querySelector('.data');
let salaryAmount = leftSide.querySelector('.salary-amount');
let incomeTitle = leftSide.querySelector('.income-items .income-title');
let addIncome1 = leftSide.querySelectorAll('.additional_income .additional_income-item')[0];
let addIncome2 = leftSide.querySelectorAll('.additional_income .additional_income-item')[1];
let expensesTitle = leftSide.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let depositCheckbox = leftSide.querySelector('#deposit-check');
let depositAmount = leftSide.querySelector('.deposit-amount');
let depositPercent = leftSide.querySelector('.deposit-percent');
let targetAmount = leftSide.querySelector('.target-amount');
let periodSelect = leftSide.querySelector('.period-select');
let additionalExpensesItem = leftSide.querySelector('.additional_expenses-item');
let incomeItems = document.querySelectorAll('.income-items');
let cashExpenses = document.querySelectorAll('.expenses-amount').value;


const isNumber = function(event){
    event.target.value = event.target.value.replace(/\D/g, '');
};
const textChecking = function (event) {
	event.target.value = event.target.value.replace(/[^а-яА-Я ,]/g, '');
};
start.disabled=true;

let appData ={
    income: {},
    incomeMonth:0,
    expenses: {},
    addExpenses: [],
    addIncome:[],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    budget:0,
    budgetDay:0,
    budgetMonth:0,
    expensesMonth:0,
    start: function(){

        appData.budget=+salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        
        appData.getAddExpenes();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
        salaryAmount.value='';
        start.disabled=true;
    },
    showResult:function(){
        budgetMonthValue.value=appData.budgetMonth;
        budgetDayValue.value=appData.budgetDay;
        expensesMonthValue.value=appData.expensesMonth;
        additionalExpensesValue.value=appData.addExpenses.join(', ');
        additionaIncomeValue.value=appData.addIncome.join(', ');
        targetMonthValue.value=appData.getTargetMonth();
        incomePeriodValue.value=appData.calcSavedMoney();
        periodSelect.addEventListener('input',appData.showResult); 
        
        
        
    },

    // Реализовать так, чтобы инпуты добавлялись пустые без value при добавлении новых полей в обязательных 
    // расходах (addExpensesBlock) и дополнительных доходах (addIncomeBlock)
    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        cloneExpensesItem.querySelector('.expenses-title').value='';
        cloneExpensesItem.querySelector('.expenses-amount').value='';
        expensesPlus.before(cloneExpensesItem);
        expensesItems = document.querySelectorAll('.expenses-items');
    
         if(expensesItems.length === 3){
             expensesPlus.style.display='none';
         }
    },
    addIncomeBlock:function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        cloneIncomeItem.querySelector('.income-title').value='';
        cloneIncomeItem.querySelector('.income-amount').value='';
        incomePlus.before(cloneIncomeItem);
        incomeItems = document.querySelectorAll('.income-items');

        if(incomeItems.length === 3){
            incomePlus.style.display='none';
        }
    },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses!==''&&cashExpenses!==''){
                appData.expenses[itemExpenses]=cashExpenses;
            }       
           
        });
    },
    getIncome:function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome!==''&&cashIncome!==''){
                appData.income[itemIncome]=cashIncome;
            }
        });
    },
    getAddExpenes: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item!==''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItemnput.forEach(function(item){
            let itemValue=item.value.trim();
            if(itemValue!==''){
                appData.addIncome.push(itemValue);
            }
        });
    },
    getInfoDeposit: function(){
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if(appData.deposit){
            do{
                appData.percentDeposit=prompt('Какой годовой процент?',10);
            }while(!isNumber( appData.percentDeposit));

            do{
                appData.moneyDeposit=prompt('Какая сумма заложена?',10000);
            }while(!isNumber( appData.moneyDeposit));
            }
    },
    getExpensesMonth: function(){
        
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
    },
    getIncomeMonth: function(){
        
        for (let key in appData.income){
            appData.incomeMonth += +appData.income[key];
        }
 },
    getBudget: function(){
        appData.budgetMonth=appData.budget + appData.incomeMonth -appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth/30);
    },
    getTargetMonth: function(){
        return Math.ceil(targetAmount.value/appData.budgetMonth);
    },
    getStatusIncome: function(){
        if (appData.budgetDay>=1200){
            return('У вас высокий уровень дохода');
        } else if (appData.budgetDay>=600){
            return('У вас средний уровень дохода');
        } else if(appData.budgetDay<600 && appData.budgetDay>0){
            return('К сожалению у вас уровень дохода ниже среднего');
        } else if(appData.budgetDay<=0){
            return('Что то пошло не так');
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth*periodSelect.value;
    },
    range: function(){
        let periodAmount = document.querySelector('.period-amount');
        periodAmount.textContent= periodSelect.value;
    },
    disabledButton: function(){
        if (salaryAmount.value.trim()!==''){
            start.disabled=false;
        }else{
            start.disabled=true;
        }
    },

    //Поля с placeholder="Наименование" разрешить ввод только русских букв пробелов и знаков препинания

    //Поля с placeholder="Сумма" разрешить ввод только цифр
    validation: function () {
		let sumPlaceholder = document.querySelectorAll('[placeholder="Сумма"]'),
			textPlaceholder = document.querySelectorAll('[placeholder="Наименование"]'),
			namePlaceholder = document.querySelectorAll('[placeholder="название"]');

		sumPlaceholder.forEach((item) => {
			item.addEventListener('input', isNumber);
		});
		textPlaceholder.forEach((item) => {
			item.addEventListener('input', textChecking);
		});
		namePlaceholder.forEach((item) => {
			item.addEventListener('input', textChecking);
		});

	}
   
};
appData.validation();

start.addEventListener('click',appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click',appData.addIncomeBlock); 
periodSelect.addEventListener('input',appData.range); 
salaryAmount.addEventListener('input',appData.disabledButton);
incomeTitle.addEventListener('input',appData.getIncome);