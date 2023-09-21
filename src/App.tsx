import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyHome from "./components/MyHome";
import ArticleRead from "./components/Reading";
import MyTopBar from "./components/MyTopBat";

function App() {
  return (
    <div
      style={{
        background: "linear-gradient(11deg, rgba(34,140,145,1) 27%, rgba(20,88,112,1) 65%, rgba(0,150,254,1) 98%)",
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <MyTopBar />
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/article/:id" element={<ArticleRead />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
