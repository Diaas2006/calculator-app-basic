// Display //
const displayHistory = document.querySelector('.display__history')
const display = document.querySelector('.display__main')

// Limpa o display ( zera ele ) //
function clearDisplay(){
    if(display.textContent.length !== 0){
        display.dataset.value = '0'
        display.innerHTML = ''
    }
}

// Inverte o sinal //
function invertSignal(){
    if(display.textContent.indexOf(/[+-]/) && display.textContent !== ''){
        display.textContent = display.textContent*-1
        actionResult.textContent = display.textContent
    }
}

// Executa os cálculos //
const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (а,b) => а / 100 * b
};

function calculate(){
    const newDisplay = display.textContent.split('')
    let result;

    for(let i = 0; i < newDisplay.length; i++){
        if(newDisplay[i] === ".") continue
        if(newDisplay[i].match(/[+-/x%]/)){
            const values = newDisplay.join('').split(newDisplay[i])
            result = operators[newDisplay[i]](Number(values[0]), Number(values[1]))
        }
    }

    displayHistory.textContent = display.textContent
    display.textContent = result
    actionResult.textContent = result
}

// Adiciona números ao display //
const numerals = document.querySelectorAll('.numbers')

numerals.forEach(elements =>{
    elements.addEventListener('click', (values)=>{
        const numbersConvert = Number(values.target.innerText)
        display.textContent += numbersConvert
    })
})

// Adiciona os operadores matemáticos //
const operatorsDisplay = document.querySelectorAll(".operators")

operatorsDisplay.forEach((elements) =>{
    elements.addEventListener('click', (operators)=>{
        const newOperators = operators.target.innerText
        const displaySlice = display.textContent.slice(-1)

        if(newOperators.includes(displaySlice)) return
        if((displaySlice !== newOperators) && !(displaySlice.match(/[0-9]/))){
            display.textContent = display.textContent.replace(displaySlice, newOperators)
            return
        }
        display.textContent += newOperators
    })
})

// Adiciona um ponto ao display //
const dot = document.querySelector('.dot')

dot.addEventListener('click', (dotValue)=>{
    const newDot = dotValue.target.innerText
    if(display.textContent.includes('.'))return
    display.textContent += newDot 
})

// Reutiliza o resultado do cálculo anterior //
const actionResult = document.querySelector('.action__result')

actionResult.addEventListener('click', ()=>{
    if(actionResult.textContent === "")return
    display.textContent += actionResult.textContent
})

// Limpa o display ( apaga cada caractere ) //
const buttonClear = document.querySelector('.action__clear-display')

buttonClear.addEventListener('click', ()=>{
    display.textContent = display.textContent.substring(0, display.textContent.length -1)
})

/*
            Mostra o histórico de cálculos //
            
            actionHistory.addEventListener('click', ()=>{
                actionHistory.classList.toggle('button__activated')
                
                if(calculatorNumerals.display === 'none'){
                    calculatorNumerals.display = ''
                    }
    else{
        calculatorNumerals.display = 'none'
    }
})
*/