const payment =  document.getElementById('payment');
const interest = document.getElementById('interest');
const term = document.getElementById('term');
const time = document.getElementById('time');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// time
let tim;
term.addEventListener('change', () => {
  if(time.value === 'years')
    tim = term.value * 12;

  else if(time.value === 'months')
    tim = term.value;
})

let compoundFrequency = 1;

time.addEventListener('click', () => {
  if(time.value === 'years')
    tim = term.value * 12;

  else if(time.value === 'months')
    tim = term.value;
})

btn.addEventListener('click', function() {
  result.textContent = `Loan You Can Afford: $ ${computeAffordableLoan().toFixed(2)}`;
})


function computeAffordableLoan() {
  let monthlyInterest = (interest.value / (100 * 12));
  return (payment.value / monthlyInterest) * (1 - (1 / Math.pow(1 + monthlyInterest, tim)));
}