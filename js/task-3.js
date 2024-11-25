const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const trimmedValue = event.target.value.trim();

  output.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
