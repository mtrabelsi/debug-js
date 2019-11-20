const getNumber1 = () => {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}


function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  const number1 = getNumber1();
  const number2 = getNumber2();
  const sum = number2 + number1;
  label.textContent = number1 + ' + ' + number2 + ' = ' + sum;
}

const inputs = document.querySelectorAll('input');
const label = document.querySelector('p');
const button = document.querySelector('button');
button.addEventListener('click', onClick);
