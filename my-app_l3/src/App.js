import "./App.css";
import InputForm from "./components/Form";
import ParrentCounter from "./components/Parrent";
import Nav from "./components/Menu";
import HoverRating from "./components/Rating";
import List from "./components/List";
import Student from "./components/PropType";
// import Counter from "./components/Counter";
// import Show from "./components/Visible";
// import Timerref from "./components/Timerref";
// import VisMessages from "./components/VisMessage";
// import MessageList from "./components/MessageList";
// import Timer from "./components/Timer";
// import TextInput from "./components/TextInput";
// import ToDoList from "./components/ToDoList";
// import ToDoListFromTeacher from "./components/ToDoListFromTeacher";
// import CommentsList from "./components/ListAndDelete";

function App() {
  // const userName = "Garde";
  return (
    <div>
      <HoverRating />
      <Nav />
      <ParrentCounter />
      <InputForm />
      <List />
      <Student name="Anna" age="41" isStudent="f" />
      <Student name="Olga" age={27} isStudent="" />
      <Student name="Dima" age={62} isStudent={true} />
      <Student name="Pasha" age={19} isStudent={false} />
    </div>

    //<div>
    //   <h2>Hi, {userName}</h2>
    //   {/* {/* <p> дз - удаляем комменты</p> */}
    //   <CommentsList />
    //   <p>семинар</p>
    //   <ToDoListFromTeacher />
    //   <p>семинар+</p>
    //   <ToDoList />
    //   <p>семинар2 вводим текст - видим его ниже</p>
    //   <TextInput />
    //   <Timer /> */}
    //   <MessageList />
    //   <Timerref />
    //   <Counter />
    //   <Show data="А время нынче: " />
    //   <Show data="Красота! Так мы выяснили, что не надо смешивать на промежуточных этапах=)" />
    //   <VisMessages />
    // </div>
  );
}

export default App;
