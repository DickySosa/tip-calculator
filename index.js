const bill = document.querySelector('#bill-amount');
const tip = document.querySelector('#tip-percentage');
const result = document.querySelector('.result');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    let billAmount = bill.value
    let tipPercentage = tip.value/100
    let tipAmount = billAmount * tipPercentage

    result.innerHTML = `The amount of the tip is: ${tipAmount}`

console.log('Bill amount: ' + billAmount)
console.log('tip %: ' + tipPercentage)
console.log('tip: ' + tip.value)
console.log('tip amount: ' + tipAmount)
})