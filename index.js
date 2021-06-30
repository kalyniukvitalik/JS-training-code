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

