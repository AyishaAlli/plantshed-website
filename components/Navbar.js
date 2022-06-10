import React from "react";
import { useState } from "react";

export default function Navbar() {
  const nav = ["HOME", "ABOUT", "SHOP", "FLOWERS", "COFFEE"];
  const [likes, setLikes] = useState(0);
  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <ul>
        {nav.map((nav) => (
          <li ><a href="#" key={nav}>{nav}</a></li>
        ))}
      </ul>
      <button onClick={handleClick}>Like({likes})</button>
    </>
  );
}
