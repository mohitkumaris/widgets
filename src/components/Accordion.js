import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null); // Array de-structuring of useState Hook
  // 1st argument is the state value that we need to keep track of
  // 2nd argument is method that updates the state value.
  const onTitleClicked = (index) => {
    setActiveIndex(index);
  };
  const accordianItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{accordianItems}</div>;
};

export default Accordion;
