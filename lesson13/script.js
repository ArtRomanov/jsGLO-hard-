'use strict';
const btn = document.getElementById('colorBtn'),
    headerColor = document.getElementById('colorHeader'),
    colorDiv = document.getElementById('colorDiv');

 colorDiv.style.cssText='width: 100%; height: 100%; text-align:center;';
 headerColor.style.color='white';

btn.addEventListener('click',()=>{
    getRandomColor();
});

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return setColor(color);
}

const setColor = (color)=>{
    headerColor.textContent=color;
    document.body.style.backgroundColor = color;
    btn.style.cssText=`color: ${color};
    background: white; 
    padding: .7em 1.5em;`;
};
getRandomColor();