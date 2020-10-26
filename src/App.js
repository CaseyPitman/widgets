import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from './components/Translate'

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework.",
  },
  {
    title: "Will I like React?",
    content: "Absolutely. It makes UI coding so much more fun.",
  },
  {
    title: "Who's the man?",
    content: "You the man!",
  },
];

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Green",
    value: "green",
  },
];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}

      {/* <Search /> */}
{/* 
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null} 

     */}
     <Translate/>

    </div>
  );
};
export default App;
