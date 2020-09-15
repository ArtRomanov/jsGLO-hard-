'use strict';
const usdToRub = document.getElementById('usdToRubBlock'),
    rubToUsd=document.getElementById('rubToUsdBlock'),
    usdToRubButton=document.getElementById('usdToRubButton'),
    rubToUsdButton=document.getElementById('rubToUsdButton'),
    usdToRubInput = document.getElementById('usdToRubInput'),
    rubToUsdInput=document.getElementById('rubToUsdInput'),
    rubToUsdOutput=document.getElementById('rubToUsdOutput'),
    usdToRubOutput=document.getElementById('usdToRubOutput'),
    usdToRubButtonReset=document.getElementById('usdToRubButtonReset'),
    rubToUsdButtonReset=document.getElementById('rubToUsdButtonReset');

    usdToRubButton.addEventListener('click',(e)=>{
        e.preventDefault();

        fetch('https://api.exchangeratesapi.io/latest?base=USD',{
            mode:'cors'
        })
        .then((response)=>{
            if(response.status !==200){
                throw new Error ('you have new error, mate');
            }
            return (response.json());
        })
        .then((response)=>{
            usdToRubOutput.value = usdToRubInput.value*response.rates['RUB'];
        })
        .catch((error)=>console.error(error));

    });
    rubToUsdButton.addEventListener('click',(e)=>{
        e.preventDefault();
        
        fetch('https://api.exchangeratesapi.io/latest?base=RUB',{
            mode:'cors'
        })
        .then((response)=>{
            if(response.status !==200){
                throw new Error ('you have new error, mate');
            }
            return (response.json());
        })
        .then((response)=>{
            rubToUsdOutput.value = response.rates['USD']*rubToUsdInput.value;
        })
        .catch((error)=>console.error(error));
    });
    usdToRubButtonReset.addEventListener('click',(e)=>{
        e.preventDefault();
        usdToRubInput.value='';
        usdToRubOutput.value='';
    });
    rubToUsdButtonReset.addEventListener('click',(e)=>{
        e.preventDefault();
        rubToUsdInput.value='';
        rubToUsdOutput.value='';
    });