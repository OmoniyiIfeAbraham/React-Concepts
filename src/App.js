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
import Search from "./components/Search";
import TableComponent from "./components/TableComponent";

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

  const Columns = [
    { Header: "Name", Key: "name" },
    { Header: "Age", Key: "age" },
    { Header: "Gender", Key: "gender" },
  ];

  const Data = [
    { name: "John", age: 25, gender: "male" },
    { name: "Mary", age: 18, gender: "female" },
    { name: "Doe", age: 21, gender: "male" },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/table"
          element={<TableComponent Columns={Columns} Data={Data} />}
        />
        <Route path="/search" element={<Search />} />
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
