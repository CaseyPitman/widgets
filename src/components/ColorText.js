import React from "react";

const ColorText = ({selected}) => {
   const colorStyle = {
      color: selected.value
   }


  return <h1 style = {colorStyle}>{selected.label}</h1>;
};

export default ColorText;
