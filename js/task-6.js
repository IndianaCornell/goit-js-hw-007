function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function createBoxes(amount) {
  destroyBoxes();

  const boxElements = [];

  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxSize += 10;

    boxElements.push(box);
  }
  boxesContainer.append(...boxElements);
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);

  if (!amount || amount < 1 || amount > 100) {
    alert('Введіть значення від 1 до 100');
    return;
  }

  createBoxes(amount);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
