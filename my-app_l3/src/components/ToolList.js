import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import ListItem from "@mui/joy/ListItem";
import IconButton from "@mui/joy/IconButton";
import DeleteIcon from "@mui/icons-joy/Delete";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (tasks.length < 100) {
      setTasks([...tasks, tasks.length + 1]);
    } else {
      alert("Максимальное количество задач достигнуто!");
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Список задач</h1>
      <Input
        label="Введите новую задачу"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button onClick={handleAddTask}>Добавить задачу</Button>
      <ul>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <span>{task}</span>
            <IconButton color="danger" onClick={() => handleDeleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </ul>
      <Button onClick={() => alert(tasks.join("\n"))}>
        Посмотреть все задачи
      </Button>
    </div>
  );
};

export default TodoList;

// Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.
