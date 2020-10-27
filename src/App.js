import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

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

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      
      <Route path='/list'>
        <Search />
      </Route>

      <Route path='/dropdown'>
        <Dropdown 
          label = 'Select a color'
          options = {options}
          selected = {selected}
          onSelectedChange = {setSelected}
        
        />
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
export default App;
