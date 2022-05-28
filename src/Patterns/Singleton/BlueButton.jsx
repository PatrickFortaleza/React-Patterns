import React from "react";
import singletonCounter from "./counter";

export default function redButton() {
  return (
    <button
      onClick={() => {
        singletonCounter.decrement();
        console.log(singletonCounter.getCount());
      }}
    >
      -
    </button>
  );
}
