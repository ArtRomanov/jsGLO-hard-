 'use strict';

 document.addEventListener("DOMContentLoaded", () => {
 
function DomElement(selector,height,width,bg,fontSize,top,left){
    this.selector=selector;
    this.height=height;
    this.width=width;
    this.bg=bg; 
    this.fontSize=fontSize;
    this.top=Number(top);
    this.left=Number(left);
}
let doc = document.querySelector('body');
let elementParag = document.createElement('p');
let elementDiv = document.createElement('div');
const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};


DomElement.prototype.method=function(){
        if(this.selector.startsWith('.')){
            
            elementDiv.className=this.selector.substring(1);
            elementDiv.style.cssText=`position:absolute; top: ` + this.top + `px;left: ` + this.left +
             `px; height:`+ this.height +
             `px; width:`+ this.width+`px; background-color:`+ this.bg + `; font-size: `+this.fontSize+`px;`;
            elementDiv.textContent=this.selector.substring(1);
            doc.append(elementDiv);
            
        }else if(this.selector.startsWith('#')){
            elementParag.setAttribute('id',this.selector.substring(1));
            elementParag.style.cssText=` position:absolute; top: ` + this.top + `px; left: `+ this.left +
             `px;height:`+this.height + 
             `px; width:`+ this.width+`px; background-color:`+ this.bg + `; font-size: `+this.fontSize+`px;`;
            elementParag.textContent=this.selector.substring(1);
            doc.append(elementParag);
        }
    
};

let test = new DomElement('#','100','100','pink','15','50','20');
doc.addEventListener('keydown',(e)=>{
    test.bg=getRandomColor();
    if(e.key==='ArrowUp'){
       test.top-=10;
    } else if(e.key==='ArrowLeft'){
        test.left-=10;
    } else if(e.key==='ArrowRight'){
        test.left+=10;
    } else if(e.key==='ArrowDown'){
        test.top+=10;
    } 
    test.method();
    
});
test.bg=getRandomColor();
test.method();
});