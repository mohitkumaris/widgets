import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

/**
 * For Accordion
 */
const items = [
  {
    title: "What is React ?",
    content: "React is Javascript Framework",
  },
  {
    title: "What is Angular ?",
    content: "Angular is Javascript framework",
  },
  {
    title: "What is Vue js ?",
    content: "The Progressive JavaScript Framework. ",
  },
];
/**
 * For Dropdown
 */
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
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Please select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
