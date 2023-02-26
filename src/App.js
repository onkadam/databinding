import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const enterText = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={value}
        onChange={enterText}
      ></input>
      <p>{value}</p>
    </>
  );
}
