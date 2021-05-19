import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
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
        label="Please select a Color"
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      ></Dropdown>
      {/* <div>
        <span style={{ color: `${selected.value}` }}>
          The text is {selected.value}
        </span>
      </div> */}
      <Translate />
    </div>
  );
};
export default App;
