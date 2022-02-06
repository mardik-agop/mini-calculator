let calculationArr = []

const calculationEl = $('#calculation')[0]
const resultEl = $('#result')[0]

const form = $('#form') 
const input = $('#form [name="input"]')

form.on('submit', formSubmit)

$('#form [name="plus"]').on('click', plus)
$('#form [name="minus"]').on('click', minus)

function formSubmit (e) {
  e.preventDefault() 

  if (input[0].value.length > 0) {
    calculationArr.push(Number(input[0].value))
    input[0].value = ''
  }

  if (calculationArr)

  simpleCalc(calculationArr)
  
  calculationArr = []
  resetElements([calculationEl])
}

function plus (_) {
  const val = input[0].value

  if(val){
    if (calculationArr.length === 0) calculationArr.push(Number(val))
    else calculationArr.push('+', Number(val))
    updateCalculationEl(calculationArr)
  
    input[0].value = ''
  }
}

function minus (_) {
  const val = input[0].value

  if(val){
    if (calculationArr.length === 0) calculationArr.push(Number(val))
    else calculationArr.push('-', Number(val))
    updateCalculationEl(calculationArr)
  
    input[0].value = ''
  }
}

function simpleCalc (arr) {
  let res = arr[0]

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    
    const nextElement = arr[index + 1]

    if (!nextElement) continue
    if (typeof element === 'number') continue

    switch (element) {
      case '+':
        res += nextElement
        break
      case '-':
        res -= nextElement
        break
    }
  }

  resultEl.innerText = res
}

function resetElements (arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]

    element.innerText = ''
  }
}

function updateCalculationEl (arr) {
  resultEl.innerText = ''
  calculationEl.innerText = arr.join(' ')
}