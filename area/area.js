const base = document.querySelector('#base');
const height = document.querySelector('#height');

const calculateBtn = document.querySelector('#calculateBtn');
const resultDiv = document.querySelector('.result');

function message(msg){
    resultDiv.innerText = msg;
}

function calculateArea(){
    baseValue = parseFloat(base.value);
    heightValue = parseFloat(height.value);
    if(baseValue > 0 && heightValue > 0){
        const area = ((baseValue*heightValue)/2).toFixed(2);
        message(`The area of triangle is ${area}.`);
    }
    else{
        message(`Invalid input.`);
    }
}
calculateBtn.addEventListener('click',calculateArea);