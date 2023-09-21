import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyHome from "./components/MyHome";
import ArticleRead from "./components/Reading";
import MyTopBar from "./components/MyTopBat";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyTopBar />
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/article/:id" element={<ArticleRead />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
