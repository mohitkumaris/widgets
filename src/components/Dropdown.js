import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    // to cleanup when dropdown is not shown on screen.
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
  const dropDownItems = options.map((option) => {
    if (option.value === selected.value) {
      return null; // Dont show anything
    }
    return (
      <div
        onClick={() => onSelectedChange(option)}
        className="item"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">Please select a color</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""} `}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu  ${open ? "visible transition" : ""}`}>
              {dropDownItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
