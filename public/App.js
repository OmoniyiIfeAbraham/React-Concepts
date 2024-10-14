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
import UserRegisteration from "./components/UserRegisteration";

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
<UserRegisteration />
  );
}

export default App;
