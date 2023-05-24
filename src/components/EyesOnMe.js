// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  function handleOnfocus() {
    console.log("Good!");
  }

  function handleOnblur() {
    console.log("Hey! Eyes on me!");
  }

  return (
    <>
      <button onBlur={handleOnblur} onFocus={handleOnfocus}>
        Eyes on me
      </button>
    </>
  );
}
export default EyesOnMe;
