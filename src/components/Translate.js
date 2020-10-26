import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "Dutch", value: "nl" },
  { label: "English", value: "en" },
  { label: "Finnish", value: "fi" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Greek", value: "el" },
  { label: "Icelandic", value: "is" },
  { label: "Irish", value: "ga" },
  { label: "Italian", value: "it" },
  { label: "Latin", value: "la" },
  { label: "Norwegian", value: "no" },
  { label: "Russian", value: "ru" },
  { label: "Spanish", value: "es" },
  { label: "Swedish", value: "sv" },
  { label: "Welsh", value: "cy" },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        label='Select a Language'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;

