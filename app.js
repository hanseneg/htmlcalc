const form1 = document.formAdd
form1.addEventListener("submit", function(e){
    e.preventDefault()
    const add1 = form1.add1.value
    const add2 = form1.add2.value
    form1.add1.value = ""
    form1.add2.value = ""
    addResult = Number(add1) + Number(add2)
    const addSolution = document.createElement('p')
    addSolution.textContent = addResult
    document.getElementsByTagName('div')[0].append(addSolution)
})

const form2 = document.formSubtract
form2.addEventListener("submit", function(e){
    e.preventDefault()
    const subtract1 = form2.subtract1.value
    const subtract2 = form2.subtract2.value
    form2.subtract1.value = ""
    form2.subtract2.value = ""
    subtractResult = Number(subtract1) - Number(subtract2)
    const subtractSolution = document.createElement('p')
    subtractSolution.textContent = subtractResult
    document.getElementsByTagName('div')[1].append(subtractSolution)
})

const form3 = document.formMultiply
form3.addEventListener("submit", function(e){
    e.preventDefault()
    const multiply1 = form3.multiply1.value
    const multiply2 = form3.multiply2.value
    form3.multiply1.value = ""
    form3.multiply2.value = ""
    multiplyResult = Number(multiply1) * Number(multiply2)
    const multiplySolution = document.createElement('p')
    multiplySolution.textContent = multiplyResult
    document.getElementsByTagName('div')[2].append(multiplySolution)
})