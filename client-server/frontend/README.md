## Создание списка студентов

Функция createStudentList() инициализирует приложение, загружает список студентов и обрабатывает события для добавления и поиска студентов.

### Основные элементы

1. Кнопка добавления студента - позволяет открыть/закрыть форму для добавления студента.
2. Кнопка поиска студента - открывает/закрывает форму для поиска студентов.
3. Формы добавления и поиска - формы, где вы можете вводить данные о студентах.

### Основной функционал

#### Загружает список студентов
При загрузке страницы выполняется запрос к API и загружается список студентов:

`const response = await fetch('http://localhost:3000/api/students');
const studentItemList = await response.json();`

#### Добавление студента
Форма добавления студента отправляет данные на сервер и обновляет таблицу после успешного добавления:

`const response = await fetch('http://localhost:3000/api/students', {method: 'POST',  
body: JSON.stringify({    
name: studentAdd.inputName.value.trim(),   
surname: studentAdd.inputMiddleName.value.trim(),   
lastname: studentAdd.inputLastName.value.trim(),    
birthday: new Date(studentAdd.inputDateBirth.value),   
studyStart: new Date(studentAdd.inputYearStart.value),
faculty: studentAdd.inputFaculty.value.trim(),}),
headers: { 'Content-Type': 'application/json', }});`

#### Поиск студента
Форма поиска студентов фильтрует результаты на основании введенных данных:

`let studentSearch = searchStudent(studentItemList);
studentSearch.forEach(element => {tbody.append(renderStudentsTable(element).tableRow);});`

#### Сортировка студентов
Сортировка таблицы студентов осуществляется при клике на заголовки таблицы:

`let table = document.getElementById('table');
table.addEventListener('click', function (e) {  
if (e.target.tagName != 'TH') { return; }
let th = e.target; 
sortTableStudent(th.cellIndex, th.dataset.name);});`

## Примечания по использованию
Также не забудьте запустить сервер, который находится по пути `./backend/index.js`, чтобы ваше приложение могло взаимодействовать с API и управлять данными студентов.
