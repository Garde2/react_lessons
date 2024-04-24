import "./App.css";

function App(props) {
  const userName = "Garde";
  return (
    <header
      className={`App-header ${props.showRed ? "header-red" : "header-blue"} `}
      style={{ top: props.topPosition || "10px" }}
    >
      <div className="App">
        <h1>Hi, {userName}</h1>
        <Article number="1" name="Info" />
        <Article number="2" name="Blog" />
      </div>
    </header>
  );
}

function Article({ name, number }) {
  let themeSiteWhite = false;
  return (
    <div>
      <h2 style={{ color: themeSiteWhite ? "green" : "red" }}>
        Статья про {name} номер {number}
      </h2>
      <a
        style={{ color: themeSiteWhite ? "red" : "yellow" }}
        href="http://localhost:3000/"
      >
        Читать статью
      </a>
    </div>
  );
}

// function NewComp() {
//   return <div>Туц Еуче</div>;
// }

// function Heading() {
//   return (
//     <div>
//       <h2>Новый текст в заголовке</h2>;<p>Новый текст</p>
//       <a href="#"> Читать далее...</a>
//     </div>
//   );
// }
// const myName = "Alexandria";

// ReactDOM.render(
//   <React.StrictMode>
//     <App name={myName} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// function App2(props) {
//   return (
//     <div className="App">
//       <h1>Hi, {props.name}</h1>
//       <Heading />
//       <Heading />
//       <NewComp />
//     </div>
//   );
// }

export default App;