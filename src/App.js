import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import ColorText from "./components/ColorText";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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
    label: "Orange",
    value: "orange",
  },
  {
    label: "Yellow",
    value: "yellow",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
  {
    label: "Indigo",
    value: "indigo",
  },
  {
    label: "Violet",
    value: "violet",
  },

];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>

      <Route path='/list'>
        <Search />
      </Route>

      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <ColorText selected={selected} />
      </Route>

      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};
export default App;
