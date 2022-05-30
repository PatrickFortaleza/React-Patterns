import React from "react";

export default function List() {
  return (
    <ul>
      {new Array(10).fill(0).map((x, i) => (
        <li key={i}>item</li>
      ))}
    </ul>
  );
}
