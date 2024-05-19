import "./App.css";
import React from "react";

//import DivWithChild from "./DivWithChild";

//конролируем рендер дочернего из родительского
// const Image = ({ render }) => {
//   return <div>{render("imageWrapper")}</div>;
// };

// const BorderComp = ({ children }) => {
//   return (
//     <div style={{ border: "2px solid #000", padding: "16px" }}>{children}</div>
//   );
// };

// const Card = ({ title, children }) => {
//   return (
//     <div style={{ border: "2px solid #000", padding: "16px" }}>
//       {" "}
//       <h2>{title}</h2>
//       {children}
//     </div>
//   );
// };

//30:20 React-router-dom

// const MouseTracker = ({ render }) => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const handleMouseMove = (event) => {
//     setPosition({
//       x: event.clientX,
//       y: event.clientY,
//     });
//   };
//   return <div onMouseMove={handleMouseMove}>{render({ position })}</div>;
// };

// const MouseInfo = ({ x, y }) => {
//   return (
//     <div>
//       <h2>Курсор мыши</h2>
//       <p>
//         X: {x}, Y: {y}
//       </p>
//     </div>
//   );
// };

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ArticleList from "./components/ArticleList";
// import ArticleDetail from "./components/ArticleDetail";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

// const articles = [
//   { id: 1, title: "Article 1", content: "Article 1 Content" },
//   { id: 2, title: "Article 2", content: "Article 2 Content" },
//   { id: 3, title: "Article 3", content: "Article 3 Content" },
//   { id: 4, title: "Article 4", content: "Article 4 Content" },
//   { id: 5, title: "Article 5", content: "Article 5 Content" },
// ];

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Product 1 Content",
    price: "100 руб.",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product 2 Content",
    price: "200 руб.",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Product 3 Content",
    price: "300 руб.",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Product 4 Content",
    price: "400 руб.",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Product 5 Content",
    price: "500 руб.",
  },
  {
    id: 6,
    name: "Product 6",
    description: "Product 6 Content",
    price: "600 руб.",
  },
  {
    id: 7,
    name: "Product 7",
    description: "Product 7 Content",
    price: "700 руб.",
  },
  {
    id: 8,
    name: "Product 8",
    description: "Product 8 Content",
    price: "800 руб.",
  },
  {
    id: 9,
    name: "Product 9",
    description: "Product 9 Content",
    price: "900 руб.",
  },
];

const App = () => (
  <Router>
    <div>
      <h2> Магаз и статьи</h2>
      <Routes>
        {/* 
        <Route path="/" element={<ArticleList articles={articles} />} />
        <Route
          path="/articles/:id"
          element={<ArticleDetail articles={articles} />}
        /> */}
        <Route
          path="/page/:pageNumber"
          element={<ProductList products={products} />}
        />
        <Route
          path="/product/:productId"
          element={<ProductDetail products={products} />}
        />
        <Route path="/" element={<ProductList products={products} />} />
      </Routes>
    </div>
  </Router>
);

//function App() {
//const [imageSrc, setImageSrc] = useState("someImgSrc");
// return (
// <Image
//   render={(className) => (
//     <div className={className}>
//       <img src={imageSrc} />
//     </div>
//   )}
// />
// <div className="App">
//   {console.log(
//     <DivWithChild>
//       <p>New text</p>
//       <div>New elem div</div>
//     </DivWithChild>
//   )}
// </div>
// <div>
//   <h2>Пример чилдрен2</h2>
//   <BorderComp>
//     <p>Внутри рамки</p>
//     <button>Внутри рамки</button>
//   </BorderComp>
//   <p>Этот вне</p>
// </div>

// <div>
//   <h1>Render props</h1>
//   <MouseTracker render={({ x, y }) => <MouseInfo x={x} y={y} />} />
// </div>
// )
//}

export default App;
