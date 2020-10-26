import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
    useEffect(() => {
      console.log("new language or text");
    }, [language, text]);

  return (
    <div>
      <h1>Convert</h1>
    </div>
  );
};

export default Convert;
