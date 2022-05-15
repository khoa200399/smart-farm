import React, { useState } from "react";
import { db, auth } from "../firebase";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

export default function HumTemp() {
  const [maxhum, setMaxHum] = useState("");
  const [maxtemp, setMaxTemp] = useState("");
  const [minhum, setMinHum] = useState("");
  const [mintemp, setMinTemp] = useState("");

  const handleOnChangeMxH = (e) => {
    setMaxHum(e.target.value);
  };

  const handleOnChangeMiH = (e) => {
    setMinHum(e.target.value);
  };

  const handleOnChangeMxT = (e) => {
    setMaxTemp(e.target.value);
  };

  const handleOnChangeMiT = (e) => {
    setMinTemp(e.target.value);
  };

  const writeHum = () => {
    const data = getDatabase();
    set(ref(data, "/luanvan/AutoRangeSelect"), {
      MaxHum: Number(maxhum),
      MaxTemp: Number(maxtemp),
      MinHum: Number(minhum),
      MinTemp: Number(mintemp),
    });
  };

  return (
    <div className="HumTemp">
      <label htmlFor="maxHum">Max Humidity: </label>
      <input
        id="maxHum"
        type="text"
        onChange={handleOnChangeMxH}
        value = {maxhum}
      ></input>{" "}
      <br />
      <label htmlFor="minHum">Min Humidity: </label>
      <input
        id="minHum"
        type="text"
        onChange={handleOnChangeMiH}
        value={minhum}
      ></input>{" "}
      <br />
      <label htmlFor="maxTemp">Max Tempurater: </label>
      <input
        id="maxTemp"
        type="text"
        onChange={handleOnChangeMxT}
        value={maxtemp}
      ></input>{" "}
      <br />
      <label htmlFor="minTemp">Min Tempurater: </label>
      <input
        id="minTemp"
        type="text"
        onChange={handleOnChangeMiT}
        value={mintemp}
      ></input>{" "}
      <br />
      <button onClick={writeHum}>Set</button>
    </div>
  );
}
