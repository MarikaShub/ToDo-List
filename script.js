// Находим элементы
const input = document.querySelector(".input");
const addButton = document.querySelector(".add");
const listItems = document.querySelector(".list-items");
//Добавляем обработчик событий на кнопку "Добавить"
addButton.addEventListener("click", function () {
  //создаем элемент списка
  const listItem = document.createElement("li");
  //присваиваем значение из поля ввода
  listItem.textContent = input.value;
  //воздаем кнопку "Удалить" для элемента списка
  const deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'Удалить'
/*deleteButton.setAttribute('id', 'button')*/ 
  //возможность удалить элемент списка по клику на кнопку
  deleteButton.onclick = () => {
    listItems.removeChild(listItem)
  }
  //добавляем элемент списка и кнопку в список
  listItems.append(listItem);
  listItem.append(deleteButton)
  input.value = "";
});
//Добавляем обработчик чтобы отметить задачу, как выполненную

listItems.addEventListener('click', function(evt) {
    if (evt.target.tagName === 'LI') {
      // Код, который будет выполнен при клике на элемент <li>
      evt.target.classList.toggle('completed'); // переключение класса

    }
  });
