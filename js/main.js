
const inputNumber1 = document.querySelector('#number1');
const inputNumber2 = document.querySelector('#number2');
const result = document.querySelector('#result-box');


const btnPlus = document.getElementById("btn-plus");
btnPlus.addEventListener('click', handleBtnPlusClick);

const btnTimes = document.getElementById("btn-times");
btnTimes.addEventListener('click', handleBtnTimesClick);

const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener('click', handleBtnClearClick);

function handleBtnPlusClick(event){

    event.preventDefault();
   
    handleInputError();
    
    const plus = Number(inputNumber1.value) + Number(inputNumber2.value);

    if(inputNumber1.value == " " || inputNumber2.value == " "){
        result.innerHTML = 0;
    } else{
        result.innerHTML = plus;
    }

    const resultPlus = result.innerHTML;

    if(isNaN(resultPlus)){
        result.innerHTML = 0;
    }
}

function handleBtnTimesClick(event){
    event.preventDefault();

    handleInputError();
    
    const time = Number(inputNumber1.value) * Number(inputNumber2.value);

    if(inputNumber1.value == ' ' || inputNumber2.value == ' '){
        result.innerHTML = 0;
    } else{
        result.innerHTML = time;
    }
    const resultTime = result.innerHTML;

    if(isNaN(resultTime)){
        result.innerHTML = 0;
    }
}

function handleBtnClearClick(event){
    inputNumber1.value = ' ';
    inputNumber2.value = ' ';
    inputNumber1.classList.remove('input-error');
    inputNumber2.classList.remove('input-error');
    result.innerHTML = 0;
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function handleInputError(){
    
    if(isNumber(inputNumber1.value)){
        inputNumber1.classList.remove('input-error');
    } else{
        inputNumber1.classList.add("input-error");
    }

    if(isNumber(inputNumber2.value)){
        inputNumber2.classList.remove('input-error');
    } else{
        inputNumber2.classList.add("input-error");
    }
}
