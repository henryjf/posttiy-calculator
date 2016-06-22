
//assigning variables to querySelector to post to the page.

let num1 = document.querySelector ('#value-one');
let num2 = document.querySelector ('#value-two');
let btn = document.querySelector ('#calculate-button');
let sum = document.querySelector ('#answer');

btn.addEventListener('click', function(event){

  event.preventDefault();
  let value1 = Number(num1.value);
  let value2 = Number(num2.value);
  let value = value1 + value2;

  answer.textContent = value;
})
