import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Show from "./components/Visible";
import Timerref from "./components/Timerref";
// import MessageList from "./components/MessageList";
import VisMessages from "./components/VisMessage";
import TextInput from "./components/TextInput";
import ToDoList from "./components/ToDoList";
import ToDoListFromTeacher from "./components/ToDoListFromTeacher";
import CommentsList from "./components/ListAndDelete";

function App() {
  const userName = "Garde";
  return (
    <div>
      <h2>Hi, {userName}</h2>
      <p> дз - удаляем комменты</p>
      <CommentsList />
      <p>семинар</p>
      <ToDoListFromTeacher />
      <p>семинар+</p>
      <ToDoList />
      <p>семинар2 вводим текст - видим его ниже</p>
      <TextInput />
      <Timer />
      {/* <MessageList /> */}
      <Timerref />
      <Counter />
      <Show data="А время нынче: " />
      <Show data="Красота! Так мы выяснили, что не надо смешивать на промежуточных этапах=)" />
      <VisMessages />
    </div>
  );
}

export default App;
