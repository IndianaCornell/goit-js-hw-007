# Завдання 1

HTML містить список категорій `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```

З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

- Порахує й виведе в консоль кількість категорій в `ul#categories`, тобто елементів `li.item`.
- Для кожного елемента `li.item` у списку `ul#categories` знайде й виведе в консоль текст заголовка елемента (тегу `<h2>`) і кількість елементів у категорії (усіх `<li>`, вкладених у нього).



# Завдання 2

Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список `ul.gallery`.

```html
<ul class="gallery"></ul>
```

Використовуй масив об'єктів `images` для створення елементів `<img>`, вкладених в `<li>`.

Ти можеш створити й додати HTML-елементи, використовуючи `document.createElement()` і `elem.append()` або шаблонні рядки і `elem.insertAdjacentHTML()`.

- Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
- Додай мінімальне оформлення галереї флексбоксами через CSS класи.

```js
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```



# Завдання 3

Напиши скрипт, який під час набору тексту в інпуті `input#name-input` (подія `input`) підставляє його поточне значення в `span#name-output` як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів. Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок `"Anonymous"`.

```html
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
```

## На що буде звертати увагу ментор при перевірці:

- На елементі `input#name-input` прослуховується подія `input`
- Під час набору тексту в інпуті його поточне значення підставляється в `span#name-output` як ім’я для привітання
- Значення в інпуті очищене від пробілів по краях
- Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок `"Anonymous"`

---

# Завдання 4

Напиши скрипт управління формою логіна.

```html
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>
```

- Відправлення форми `form.login-form` повинна відбуватися за подією `submit`.
- Під час відправлення форми сторінка не повинна перезавантажуватися.
- Якщо при сабміті у формі є незаповнені поля, виводь `alert('All form fields must be filled in')`. Не додавай на інпути атрибут `required`, валідація має відбуватися саме через JS.
- Якщо користувач заповнив усі поля і відправив форму:
  - Збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях.
  - Для доступу до елементів форми використовуй властивість `elements`.
  - Виведи об'єкт із введеними даними в консоль.
  - Очисти значення полів форми методом `reset`.



# Завдання 5

Напиши скрипт, який змінює колір фону елемента `<body>` через інлайн-стиль по кліку на `button.change-color` і задає це значення кольору текстовим вмістом для `span.color`.

```html
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

### Для генерування випадкового кольору використовуй:

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```


---

# Завдання 6

Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

```html
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

### Функція для кольору:

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

### Функція `createBoxes(amount)`:

- Створює стільки `<div>` елементів, скільки вказано в параметрі `amount` і додає їх у DOM дочірніми елементами для `div#boxes`.
- Розміри першого `<div>` елемента мають бути `30px` на `30px`.
- Кожен наступний елемент повинен бути ширшим і вищим від попереднього на `10px`.
- Усі елементи повинні мати випадковий колір фону.

### Функція `destroyBoxes()`:

- Очищає вміст `div#boxes`, у такий спосіб видаляючи всі створені елементи.
