const side1 = document.querySelector('#side1');
const side2 = document.querySelector('#side2');

const resultDiv = document.querySelector('.result');
const calculateBtn = document.querySelector('#calculateBtn');

const getSquaresSum = (a,b) =>{
    const sum = a*a + b*b ;
    return sum;
}

const message = msg =>{
    resultDiv.innerText = msg;
}

const calculateHypotenuse = () => {
    side1Value = parseFloat(side1.value);
    side2Value = parseFloat(side2.value);
    if(side1Value >0 && side2Value > 0){
        const hypotenuse = (Math.sqrt(getSquaresSum(side1Value,side2Value))).toFixed(2);
        message(`The length of hypotenuse is ${hypotenuse}.`);
    }
    else{
        message(`Invalid input!⚠️`);
    }
}
calculateBtn.addEventListener('click',calculateHypotenuse);
