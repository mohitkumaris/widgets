import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
//import Accordion from "./components/Accordion";
// import Search from "./components/Search";

// const items = [
//   {
//     title: "What is React ?",
//     content: "React is Javascript Framework",
//   },
//   {
//     title: "What is Angular ?",
//     content: "Angular is Javascript framework",
//   },
//   {
//     title: "What is Vue js ?",
//     content: "The Progressive JavaScript Framework. ",
//   },
// ];
const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color yellow",
    value: "yellow",
  },
  {
    label: "The shade of Blue",
    value: "blue",
  },
];
const App = () => {
  /*  const [term, setTerm] = useState("");
  const onFormSubmit = (searchTerm) => {
    setTerm(searchTerm); 
  };*/
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      ></Dropdown>
    </div>
  );
};
export default App;
