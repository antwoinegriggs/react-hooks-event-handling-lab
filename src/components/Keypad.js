// Code Keypad Component Here
import React, { useState } from "react";

function Keypad() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.value);
    console.log("Entering password...");
    console.log(value);
  }

  return (
    <>
      <input
        type="password"
        value={value}
        name="password"
        onChange={(e) => handleChange(e.target)}
      />
    </>
  );
}

export default Keypad;
