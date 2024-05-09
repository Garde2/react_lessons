import React, { useState } from "react";

const ToDoListFromTeacher = () => {
  const [todos, setTodos] = useState([]); //cписок дел
  const [currentTodo, setCurrentTodo] = useState(""); //текущее состояние, что вводим в текст поле, оно сохраняется тут

  //запускается когда вводим чето в текст поле
  const addTodo = (event) => {
    event.preventDefault(); //предотвращаем перезагрузку страницы
    if (!currentTodo.trim()) return; //игнор пустых строк, то есть вышли отсюда если ничего не ввели
    setTodos([...todos, currentTodo]); //добавили текущее дело в список - распаковываем массив внутри массива spread, чтоб остались текущие элементы, а последним элем - то что ввели. распаковка оператор spread
    setCurrentTodo(""); //очистили текстовое поле
  };
  //обработчик изменений текстового поля
  const handleInputChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        {/* по клику на кнопку срабатывает событие onSubmit, вызывается функция addTodo. а посколько нужно, чтоб при этом уже что-то было введено, мы вешаем onchange, чтоб прик аждом изменении текст поля запускалась функция handleInputChange, которая обновляет начальное состояние тем значением, что получаем из текст поля (и если пустое, то выходим из)*/}
        <input type="text" value={currentTodo} onChange={handleInputChange} />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {/* map применяет к эжлем массива какое-то действие (todo - каждое дело) и получает новых массив - мы упаковали в верстку с li, в которой указали уникальный ключ - индекс и название задачи */}
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> //используем индекс как ключ
        ))}
      </ul>
    </div>
  );
};
export default ToDoListFromTeacher;
