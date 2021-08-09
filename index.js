// Лічильник лайків
let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  heart.classList.toggle('added');
};

// Додавання коментарів
let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);
  // Обнуляємо лічильник символів
  charCounter.textContent = 0;
};

// Обмеження на кількість символів у коментарях
commentField.oninput = function () {
  charCounter.textContent = commentField.value.length;

  if (commentField.value.length > 142) {
    commentForm.classList.add('warning');
    submitButton.disabled = true;
  } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
  }
};
////////////////////////////////////////////////////////////////////////////////////


/*
1. Каждая задача в списке — это элемент li. При отправке формы (переменная form) новая задача добавляется в конец списка (переменная list).
2. Текст задачи берётся из поля ввода (переменная input).
3. Если у переключателя приоритета (переменная priority) есть класс is-important, то новой задаче также добавляется класс is-important.
4. Бонус: после того, как задача добавится в список, поле ввода можно очистить. Но можно не очищать. Подходят оба варианта.
*/
let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  
  let newTask = document.createElement('li');
  newTask.textContent = input.value;
  list.append(newTask);
  
  if (priority.classList.contains('is-important')) {
    newTask.classList.add('is-important')
  };
  
  form.value = '';
  
};
////////////////////////////////////////////////////////////////////////////////////


// Добавлення елемента прокрутки на сторінці із поверенням на задану точку і зникненняям після цього елемента прокрутки
let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown'); }
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};

//Додавання класу кожному елементу із колекції
let articles = document.querySelectorAll('.news-block');
for (let article of articles) {
  article.classList.add('highlight')
}

//Фільтрація елементів на сайті 
let articles = document.querySelectorAll('.news-block');
let filter = document.querySelector('.filter');
// 1. Знаходимо кожен елемент із колекції за допомогою  'for...of'
// 2. Добавляємо фільтру оброблювач подій 'onchange'
// 3. За допомогою умовноої конструкції 'if...else' задаємо сценарії відображення. 'filter.value = !all' відповідає за відображення всіх категорій
filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('hidden');
    } else {
      article.classList.remove('hidden');
    }
  }
};

/*
1. У всех радиокнопок есть класс review.
2. Чтобы отслеживать переключение радиокнопок, нужно добавить обработчик событий onchange каждой радиокнопке.
3. У каждой радиокнопки есть атрибут data-evaluation. Если отзыв хороший, значение этого атрибута – 'good', а если плохой - 'bad'.
4. Кнопка отправки имеет класс submit-button. Если пользователь выбрал плохой отзыв, кнопку нужно заблокировать, а если хороший — разблокировать.
5. Чтобы показать сигнал об ошибке, элементу с классом error нужно добавить класс shown. Сигнал нужно показывать, если пользователь выбрал плохой отзыв. Если выбран хороший отзыв, сигнал об ошибке нужно спрятать.
*/
let radios = document.querySelectorAll('.review');
let btn = document.querySelector('.submit-button');
let error = document.querySelector('.error');

for (let radio of radios) {
    radio.onchange = function () {
  if (radio.dataset.evaluation === "bad") {
   btn.disabled = true; 
   error.classList.add('shown');
   } else {
    btn.disabled = false; 
   error.classList.remove('shown');
     }
   }
}
////////////////////////////////////////////////////////////////////////////////////


// Зміна кольору тексту на сторінці
let longread = document.querySelector('.longread'); // клас article, який охоплює весь текст, що піддається зміні
let colorSetting = document.querySelector('.color-setting'); // знаходимо випадаючий список
let backgroundSetting = document.querySelector('.background-setting'); // клас select, в який вставлені  всі  значення доступних фонових кольорів 

colorSetting.onchange = function () {
  longread.style.color = colorSetting.value
  } // добавляємо списку оброблювач подій 'onchange' і міняємона вибраний користувачем колір за допомогою 'value'

// 
let sizeSetting = document.querySelector('.size-setting'); // клас input, де вказані type="range" min="8" max="48" step="1" value="14", значення розміру за замовчуванням так кроки зміни 
let pixels = document.querySelector('.pixels'); // клас output, в якому вказаний розмір тексту за замовчуванням

sizeSetting.oninput = function () {
  pixels.textContent = sizeSetting.value; // Знаходимо поле і елемент для виведення значення. Додаємо полю обробник подій(таким  чиномвиводимо цифри зміни значення)
  longread.style.fontSize = sizeSetting.value + 'px'; // Схожим чиином змінюємо розмір тексту повзунком
  }; 

  backgroundSetting.onchange = function () {
    longread.style.backgroundColor = backgroundSetting.value}; // змінюємо фон із випадаючого списку


// Показуємо/ховаємо введений пароль. Замальовуємо полосу введення пароля у визначений колір
let password = document.querySelector('.password'); // знаходимо inpute type="password"
let showPassword = document.querySelector('.show-password'); // знаходимо input type="checkbox"
let securityBar = document.querySelector('.security-bar'); // знаходимо полосу, яка буде відображати кількість введених символів пароля

showPassword.onchange = function () { 
if (showPassword.checked) {
    password.type = 'text'; // дозволяє показувати пароль
    } else {
      password.type = 'password'; // стандартне значення для паролів. його повертаємо, коли сценарій false
    }
}; // спочатку чексбоксу задаємо змінювач подій у середині якого прописуємо сценарій

password.oninput = function () {
  let passLength = password.value.length; // у перемінну закладаємо значення кількості введених символів
  securityBar.style.width = passLength * 10 + '%'; // отримуємо ширину полоски
  if (passLength <= 5) {
    securityBar.style.backgroundColor = 'red';
  } else if (passLength > 5 && passLength < 10) {
    securityBar.style.backgroundColor = 'gold';
  } else {
    securityBar.style.backgroundColor = 'green';
    } // умовна конструкція, у якій прописані сценарії покраски полоски у певний колірм
};


/*
1. Все «пиксели» имеют класс pixel.
2. Выпадающий список с цветами имеет класс chosen-color.
3. «Ластик» — это чекбокс с классом eraser.
4. Когда на «пиксель» кликают, у него должен измениться цвет фона.
5. Если в момент клика ластик выключен, фон нажатого «пикселя» должен стать того цвета, который выбран в списке.
6. Если в момент клика ластик включён, фон нажатого «пикселя» должен стать белым — 'white'.
*/

let pixels = document.querySelectorAll('.pixel');
let chosenColor = document.querySelector('.chosen-color');
let eraser = document.querySelector('.eraser');

for (let pixel of pixels) {
  pixel.onclick = function () {
    if (!eraser.checked) {
    pixel.style.backgroundColor = chosenColor.value
    } else {
         pixel.style.backgroundColor = 'white'}
  }
}


/* Потрібно вдосконалити програму «Скільки гуляти?». Вхідні дані ті ж:

- рекомендований час прогулянки в змінної optimalTime;
- час, протягом якого Кекс гуляв, в змінної walkTime.
Але логіку потрібно змінити. Програма повинна показувати, скільки хвилин ще залишилося гуляти. Якщо прогулянка рівна або більша рекомендованому часу, то програма повинна показувати нуль.

Алгоритм рішення:
- заводимо нову змінну для зберігання часу, яке ще потрібно гуляти;
- перевіряємо, що час прогулянки більше або дорівнює рекомендованому часу;
- якщо так, то записуємо в нову змінну нуль;
- якщо немає, то віднімаємо з рекомендованого часу час прогулянки, а результат зберігаємо в нову змінну;
- виводимо красиве інформативне повідомлення.
*/
let optimalTime = 80;
let walkTime = 30;
let timeLeft;

if (walkTime >= optimalTime) {
  timeLeft = 0;
  console.log('Прогулянка закінчена');
} else {
  timeLeft = optimalTime - walkTime;
}
console.log('Гуляти ще потрібно ' +  timeLeft + ' хвилин.');


/* Нам потрібно об'єднати дві окремих перевірки в одну загальну. Проект можна почати, якщо:

- розробників досить
- і вони володіють технологіями
- і немає розробників у відпустці
- і немає розробників на лікарняному.
Реалізувати в коді цю логіку досить легко, адже заперечення можна комбінувати з іншими логічними операторами
*/
let enoughDevelopers = true;
let techAvailable = true;
let onVacation = false;
let onSickLeave = false;
// Для комбінування у даному випадку використовуємо !, так як  він  поверне нам всі умови переміннихяк  true. При зміні самої перемінної  із відпустками чи лікарняними на true  програма не виконається. Такі умови можна комбінувати
if (enoughDevelopers && techAvailable && !onVacation && !onSickLeave) {
  console.log('Проект можно выполнить');
} else {
 console.log('Проект нельзя выполнить'); 
}
////////////////////////////////////////////////////////////////////////////////////
/* Програма: «Час прогулянки»
Технічне завдання
Тривалість прогулянки залежить від декількох умов.

Якщо йде дощ, гуляти я не ходжу. У цьому випадку тривалість прогулянки дорівнює 0. А ось якщо дощу немає, все залежить від температури на вулиці:
По-перше, якщо температура від 10 ° C (включно) до 15 ° C (не включаючи це значення), я гуляю 30 хвилин.
По-друге, якщо температура від 15 ° C (включно) до 25 ° C (не включаючи значення), я гуляю 40 хвилин.
По-третє, при температурі від 25 ° C (включно) до 35 ° C (включно), я гуляю 20 хвилин.
В інших випадках я нікуди не виходжу: або дуже холодно, або дуже жарко.

Результат програми - час прогулянки. Його необхідно записати в змінну minutes.
*/
let temperature = 20;
let isRaining = true;
let minutes = 0;

if (isRaining) {
  minutes;
  console.log('Падає дощ');
  } else if ( temperature >= 10 && temperature < 15) {
  minutes = 30;   
  console.log('Я гуляю ' + minutes +  ' хвилин');
  } else if ( temperature >= 15 && temperature < 25) {
  minutes = 40;
  console.log('Я гуляю ' + minutes +  ' хвилин');
  } else if ( temperature >= 25 && temperature <= 35) {
  minutes = 20;
  console.log('Я гуляю ' + minutes +  ' хвилин');
  } else {
    minutes;
    console.log('Я  залишаюсь вдома');
  }
////////////////////////////////////////////////////////////////////////////////////

// Потрібно напечатати певну кількість сторінок. Робимо це за допомогою циклу for
let totalPages = 5;

for (let page = 1; page <= totalPages; page = page + 1) { // цикл починаємо не з 0, а з 1(перша сторінка) і закінчуємо <=, так як вказана остання сторінка теж має печататись
  // тіло циклу. тут викликатиметься функція, яка печататиме;
}

// друк за допомогою циклу у зворотньому порядку
let totalPages = 5;
// тут нам потрібно вказати, що початкова сторінка початку друку рівна загальній кількості сторінок (page=totalPages), цикл повинен виконуватись поки змінна більше 0 і після кожної ітерації зменшуватись на 1
for (let page = totalPages; page > 0; page = page--) {
  // тіло циклу. тут викликатиметься функція, яка печататиме;
}
////////////////////////////////////////////////////////////////////////////////////

// Режими друку/копіювання сторінок
let mode = 'alternate'; // Режим работы драйвера печати
let pageNumber = 5; // Номер копируемой страницы
let copyCount = 7; // Количество копий
let totalPages = 6; // Всего страниц в документе
let startPage = 2; // Стартовая страница

if (mode === 'pageCopy') {
  for (let copies = 1; copies <= copyCount; copies++) {
    keks.print(pageNumber);
  }
} //  Копіювання

if (mode === 'document') {
  for (let page = 1; page <= totalPages; page++) {
    keks.print(page);
  }
} // Друк  звичайни

if (mode === 'reverse') {
  for (let reversePage = totalPages; reversePage >= 1; reversePage--) {
    keks.print(reversePage);
  }
} //  Реверсний друк

if (mode === 'alternate') {
  for (let alternatePage = startPage; alternatePage <= totalPages; alternatePage += 2) {
    keks.print(alternatePage);
  }
} // Друк парних/непарних стоорінок (залежить від значення в перемінній startPage)

////////////////////////////////////////////////////////////////////////////////////
/*
Накопичення в циклі 
Якщо на кожній ітерації нам потрібно отримувати нове, збільшене, число, треба завести перед циклом ще одну змінну, яка і буде зберігати суму.
Тепер на кожній ітерації ми додаємо 2 до змінної sum, накопичуючи її значення. Перемінна sum оголошена зовні циклу (а не всередині тіла циклу, що важливо), тому її значення не скидається при попаданні в тіло циклу, а збільшується на 2.

Така операція називається накопиченням значення в циклі.
*/
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += 2;
  console.log(sum);
}

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log('i: ' + i);
  console.log('sum: ' + sum);
  }
  ////////////////////////////////////////////////////////////////////////////////////

  // Перевірка у циклах
  /* Можна писати цикли всередині умов, але можна і навпаки. Якщо додати умову всередину циклу, то воно буде перевірятися на кожній ітерації.

  Наприклад, можна перевіряти значення лічильника, і якщо воно більше двох, додавати до суми 3, а не 2.
  */
 let sum = 0;

for (let i = 1; i <= 5; i++) {
  if (i > 2) {
    sum += 3;
  } else {
    sum += 2;
  }
  console.log(sum);
}

// Пошук парного числа
/* Перевірки в циклах дуже зручні. Вони дозволяють робити перевірки на кожній ітерації циклу.
Наприклад, можемо перевірити парне чи непанрне число i. І якщо число парне, будемо додавати до суми 2, а якщо число непарне, будемо додавати 1.
Як перевірити, що число парне? Тут може допомогти оператор %. Він називається залишок від ділення і, як зрозуміло з назви, повертає залишок від ділення.
Як це допоможе у визначенні парного або непарного числа? Парне число ділиться на 2 без залишку. Тому, якщо розподіл i% 2 повертає 0 - число парне, інакше число непарне.
Напишемо перевірку з використанням% в нашому циклі.
*/
let sum = 0;

for (let i = 1; i <= 10; i++) {
  console.log('i: ' + i);
 if ( i % 2  === 0) {
  sum += 2;
  console.log('чётное число');
 } else {
   sum += 1;
   console.log('нечётное число');  
   }
  console.log('sum: ' + sum);
}

/*
Повернемося до принтера. Ми написали програму, яка вміє друкувати сторінки, але випустили з уваги одну деталь - на друк кожної сторінки витрачається фарба. У нашому принтері на одну сторінку «йде» 70 мг порошку з фарбою. Добре б стежити за витратою тонера і знати, скільки витрачається на друк одного документа.
Для вирішення цього завдання будемо використовувати накопичення значень в циклі. Заведемо зовнішню змінну, куди будемо додавати 70 мг (витрата на одну сторінку) при друку кожної сторінки документа. Але спочатку цю змінну потрібно назвати.
Порахуємо витрати тонера на друк всіх сторінок. Вважати будемо в режимі друку звичайного документа.
*/
let totalPages = 6; // Загалом сторінок у документі
let consumptionTotal = 0; // Загальні витрати на всі сторінки
let consumptionPerPage = 70; // Витрати на одну сторінку

for (let page = 1; page <= totalPages; page++) {
  keks.print(page);
  consumptionTotal += consumptionPerPage;
  console.log(consumptionTotal)
}

/*
Економічний друк
Нашим принтером часто користуються студенти, а для студентів дуже важлива економія. Економія на всьому. Наші аналітики з'ясували, що викладачі зазвичай читають не більше перших трьох сторінок усіх звітів, курсовиків та інших студентських документів. З цього таємного знання народилася ідея режиму друку для студентів: перші три сторінки друкуємо як зазвичай, а на що залишилися економимо тонер в усі тяжкі (тобто використовуємо в ДВА рази менше тонера)!
Тепер нам потрібно не просто збільшувати значення consumptionTotal при кожній ітерації на 70, але і перевіряти в якому режимі друку ми знаходимося (економічному або звичайному) і яку за рахунком сторінку документа друкуємо. Тут стануть в нагоді умови.
Використовуємо умова в циклі, щоб перевірити режим друку. Якщо режим економічний, будемо відловлювати сторінки з номером більше 3 і друкувати їх з меншою витратою фарби. Половину витрат будемо записувати як consumptionPerPage * 0.5.
*/

let totalPages = 6; // Загалом сторінок у документі
let consumptionTotal = 0; // Загальні витрати на всі сторінки
let consumptionPerPage = 70; // Витрати на одну сторінку
let economyMode = false; // Економ режим

for (let page = 1; page <= totalPages; page++) {
  keks.print(page);

  if (economyMode === true && page > 3) {
    consumptionTotal += consumptionPerPage * 0.5;
    } // умова виглядає наступним чином. Якщо включений екрном режим і сторінка друку більше третьої, то збільшуємо загальні витрати на одну сторінку на суму витрат на одну сторінку, яке ділимо на 2 (0.5)

  consumptionTotal += consumptionPerPage;
  console.log(consumptionTotal);
}
/*
Виходить, якщо включений економічний режим і номер сторінки більше трьох, ми витрачаємо половину фарби від звичайного режиму на одну сторінку. А потім, неважливо, спрацює умова чи ні, ми обов'язково збільшуємо витрати ще 
*/
let totalPages = 6; // Всего страниц в документе

let consumptionTotal = 0; // Общий расход тонера
let consumptionPerPage = 70; // Расход краски на одну страницу
let economyMode = true;

for (let page = 1; page <= totalPages; page++) {
  keks.print(page);

  if (economyMode && page > 3) {
    consumptionTotal += consumptionPerPage * 0.5;
  } else { // Щоб уникнути додавання декількох умов, додамо гілку else до умови і перенесемо туди рядок consumptionTotal + = consumptionPerPage;. 
    consumptionTotal += consumptionPerPage;
}

/* Програма для підрахунку кількості випитого протеїну. Технічне завдання.
Програма повинна рахувати скільки протеїну я повинен випити за весь тренувальний період.
У парні дні я п'ю 200 грам. У непарні 100 грам.
Кількість днів зберігається в змінної days, кількість протеїну для прийому в парний день - у змінній evenDayAmount, протеїн в непарний день - у змінній oddDayAmount, а результат необхідно записати в змінну total, яка вже задана.
*/
let days = 9; // Днів у періоді
let evenDayAmount = 200; // Кількість протеїну у парні дні
let oddDayAmount = 100; // Кількість протеїну у непарні дні
let total = 0; // Загальна кількість протеїну


for (let day = 1; day <= days; day++) {
  if (day % 2 === 0) {
    total += evenDayAmount;
    console.log("Сьогодні п`єш 200 протеїну");
} else {
  total += oddDayAmount;
  console.log("Сьогодні п`єш 100 протеїну");
  }
}
 ////////////////////////////////////////////////////////////////////////////////////

 