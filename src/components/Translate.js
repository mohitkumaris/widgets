import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

//const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const options = [
  {
    label: "Africans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            type="text"
            className="ui input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        label="Please select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3>Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};
export default Translate;
