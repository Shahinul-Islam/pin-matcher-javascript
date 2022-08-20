//generate random numbers
function generatePin(){
    return (Math.floor(1000+Math.random()*9000))+'';
}
generatePin();

const generateField = document.getElementById('generate-input-field')

document.querySelector('.generate-btn').addEventListener('click', function(){
    const generatedPin = generatePin()
    
    generateField.value=generatedPin
})

//working on calculator
const calculatorInput = document.getElementById('cal-input-field');
let pinNumbers = [];
let myPin='';

document.querySelector('.calc-body').addEventListener('click', function(e){
    const number = (e.target.innerText)
    if(isNaN(number)){
        if(number==='<'){
            const returnedArray = pinNumbers.pop();
            const finalPin = pinNumbers.join('')
            calculatorInput.value=finalPin;
        }
        else{
            pinNumbers = []
            calculatorInput.value='';
        }
    }
    else {
        pinNumbers.push(number)
        const finalPin = pinNumbers.join('')
        calculatorInput.value=finalPin;
    }
    
})

//check matching or not

document.querySelector('.submit-btn').addEventListener("click", function(){
    if(calculatorInput.value === generateField.value){
    document.getElementById('right-pin-notify').style.display='block'
    document.getElementById('wrong-pin-notify').style.display='none'
}
else{
    document.getElementById('right-pin-notify').style.display='none'
    document.getElementById('wrong-pin-notify').style.display='block'
}
})