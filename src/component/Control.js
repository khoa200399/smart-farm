import React, { useState } from "react";
import { db, auth } from "../firebase";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

export default function Control() {
  // const [airdoor, setAirdoor] = useState('0')
  // const [fanback, setFanback] = useState('0')
  // const [fantop, setFantop] = useState('0')
  // const [motorup, setMotorup] = useState('0')
  // const [motordown, setMotordown] = useState('0')

  const handleOnChangeAirDoor = (e) => {
    const data = getDatabase();
    var val = e.target.checked;
    //Set value
    set(ref(data, "/luanvan/Control/AirDoor"), val ? 1 : 0);
  };

  const handleOnChangeFanBack = (e) => {
    const data = getDatabase();
    var val = e.target.checked;
    //Set value
    set(ref(data, "/luanvan/Control/FanBack"), val ? 1 : 0);
  };

  const handleOnChangeFanTop = (e) => {
    const data = getDatabase();
    var val = e.target.checked;
    //Set value
    set(ref(data, "/luanvan/Control/FanTop"), val ? 1 : 0);
  };

  const handleOnChangeMotorUp = (e) => {
    const data = getDatabase();
    var val = e.target.checked;
    //Set value
    set(ref(data, "/luanvan/Control/MotorUp"), val ? 1 : 0);
  };

  const handleOnChangeMotorDown = (e) => {
    const data = getDatabase();
    var val = e.target.checked;
    //Set value
    set(ref(data, "/luanvan/Control/MotorDown"), val ? 1 : 0);
  };

  return (
    <div className="Control">
      <h1>Control device</h1>
      <div className="control">
        <label htmlFor="airdoor">Air Door</label>
        <input
          id="#airdoor"
          type="checkbox"
          onChange={handleOnChangeAirDoor}
        />{" "}
        <br />
        <label htmlFor="fanback">Fan Back</label>
        <input
          id="#fanback"
          type="checkbox"
          onChange={handleOnChangeFanBack}
        />{" "}
        <br />
        <label htmlFor="fantop">Fan Top</label>
        <input
          id="#fantop"
          type="checkbox"
          onChange={handleOnChangeFanTop}
        />{" "}
        <br />
        <label htmlFor="motorup">Motor Up</label>
        <input
          id="#motorup"
          type="checkbox"
          onChange={handleOnChangeMotorUp}
        />{" "}
        <br />
        <label htmlFor="motordown">Motor Down</label>
        <input
          id="#motordown"
          type="checkbox"
          onChange={handleOnChangeMotorDown}
        />{" "}
        <br />
      </div>
    </div>
  );
}
