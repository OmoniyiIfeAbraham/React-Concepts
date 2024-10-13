import logo from "./logo.svg";
import "./App.css";
import BulletList from "./components/BulletList";
import SubmitName from "./components/SubmitName";
import Counter from "./components/Counter";
import DataToTable from "./components/DataToTable";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination";

function App() {
  let data = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/about" element={<About />} />
        <Route path="/data-to-table" element={<DataToTable />} />
        <Route path="/bullet-list" element={<BulletList data={data} />} />
        <Route path="/submit-name" element={<SubmitName />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;
