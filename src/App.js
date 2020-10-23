import React from "react";
import Accordion from "./components/Accordion";

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

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
export default App;
