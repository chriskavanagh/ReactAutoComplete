import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const names = [
    "windows",
    "win10",
    "winxp",
    "win7",
    "linux",
    "linux-mint",
    "apple"
  ];

  // func to parse names
  function autoComplete(event) {
    const { value } = event.target;
    setInputValue(value);
    let options = [];
    names.forEach((name) => {
      if (name.startsWith(value)) {
        options.push(name);
        setList(options);
      }
      if (value === "") {
        setList([]);
      }
    });
  }

  function clickMe(val) {
    setInputValue(val);
    // clear list off screen
    setList([]);
  }

  return (
    <div className="App">
      <h1>Auto Complete Input</h1>
      <input onChange={autoComplete} value={inputValue} />
      <section style={sectionStyle}>
        <ul style={ulStyle}>
          {list.map((l, i) => (
            <li style={liStyle} onClick={() => clickMe(l)} key={i}>
              {l}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const sectionStyle = {
  //width: "180px",
  height: "10rem",
  textAlign: "center"
};

const ulStyle = {
  textAlign: "center"
};

const liStyle = {
  textAlign: "center",
  cursor: "pointer",
  listStyle: "none"
};
