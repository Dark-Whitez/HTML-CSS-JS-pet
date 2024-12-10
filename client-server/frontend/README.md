## Создание списка студентов

Функция createStudentList() инициализирует приложение, загружает список студентов и обрабатывает события для добавления и поиска студентов.

### Основные элементы

1. Кнопка добавления студента - позволяет открыть/закрыть форму для добавления студента.
2. Кнопка поиска студента - открывает/закрывает форму для поиска студентов.
3. Формы добавления и поиска - формы, где вы можете вводить данные о студентах.

### Основной функционал

#### Загружает список студентов
При загрузке страницы выполняется запрос к API и загружается список студентов:

&#13;&#10;const response = await fetch('http://localhost:3000/api/students');&#13;&#10;
const studentItemList = await response.json();&#13;&#10;

#### Добавление студента
Форма добавления студента отправляет данные на сервер и обновляет таблицу после успешного добавления:

&#13;&#10;const response = await fetch('http://localhost:3000/api/students', {&#13;&#10;  method: 'POST',&#13;&#10;  body: JSON.stringify({&#13;&#10;    name: studentAdd.inputName.value.trim(),&#13;&#10;    surname: studentAdd.inputMiddleName.value.trim(),&#13;&#10;    lastname: studentAdd.inputLastName.value.trim(),&#13;&#10;    birthday: new Date(studentAdd.inputDateBirth.value),&#13;&#10;    studyStart: new Date(studentAdd.inputYearStart.value),&#13;&#10;    faculty: studentAdd.inputFaculty.value.trim(),&#13;&#10;  }),&#13;&#10;  headers: { 'Content-Type': 'application/json', }&#13;&#10;});&#13;&#10;

#### Поиск студента
Форма поиска студентов фильтрует результаты на основании введенных данных:

&#13;&#10;let studentSearch = searchStudent(studentItemList);&#13;&#10;studentSearch.forEach(element => {&#13;&#10;  tbody.append(renderStudentsTable(element).tableRow);&#13;&#10;});&#13;&#10;

#### Сортировка студентов
Сортировка таблицы студентов осуществляется при клике на заголовки таблицы:

&#13;&#10;let table = document.getElementById('table');&#13;&#10;table.addEventListener('click', function (e) {&#13;&#10;  if (e.target.tagName != 'TH') { return; }&#13;&#10;  let th = e.target;&#13;&#10;  sortTableStudent(th.cellIndex, th.dataset.name);&#13;&#10;});&#13;&#10;

## Примечания по использованию
Также не забудьте запустить сервер, который находится по пути `./backend/index.js`, чтобы ваше приложение могло взаимодействовать с API и управлять данными студентов.
