import logo from "./logo.svg";
import "./App.css";
import BulletList from "./components/BulletList";
import SubmitName from "./components/SubmitName";
import Counter from "./components/Counter";
import DataToTable from "./components/DataToTable";

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
    <div>
      {/* <BulletList data={data} /> */}
      {/* <SubmitName /> */}
      {/* <Counter /> */}
      <DataToTable />
    </div>
  );
}

export default App;
