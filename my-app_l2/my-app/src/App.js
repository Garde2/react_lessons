import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Show from "./components/Visible";
import Timerref from "./components/Timerref";
import MessageList from "./components/MessageList";
import VisMessages from "./components/VisMessage";

function App() {
  const userName = "Garde";
  return (
    <div>
      <h2>Hi, {userName}</h2>
      <Timer />
      <MessageList />
      <Timerref />
      <Counter />
      <Show data="А время нынче: " />
      <Show data="Красота! Так мы выяснили, что не надо смешивать на промежуточных этапах=)" />
      <VisMessages />
    </div>
  );
}

export default App;
