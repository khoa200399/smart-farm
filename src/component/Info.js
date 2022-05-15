import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { getByDisplayValue } from "@testing-library/react";

export default function Sensor() {
  // const [curtain, setCurtain] = useState(0);
  // const [door, setDoor] = useState(0);
  // const [dum, setHum] = useState(0);
  // const [dight, setLight] = useState(0);
  // const [rain, setRain] = useState(0);
  const [dataFB, setDataFB] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((item) => {
          setDataFB([item]);
        });
        //console.log(data);
      }
    });
  });

  // function readBD(dir,item) {
  //   const itemRead = ref(db, '/luanvan/' + dir + '/' + item);
  //   onValue(itemRead, (snapshot) => {
  //     const data = snapshot.val();
  //     // console.log(data)
  //   }
  //   )
  // }

  return (
    <div className="Info">
      <div className="container">
        <div className="item">
          {dataFB.map((item) => (
            <div>
              <h1>Auto Range</h1>
              <p>Max Humidity: {item.AutoRangeSelect.MaxHum}</p>
              <p>Min Humidity: {item.AutoRangeSelect.MinHum}</p>
              <p>Max Tempurater: {item.AutoRangeSelect.MaxTemp}</p>
              <p>Min Tempurater: {item.AutoRangeSelect.MinTemp}</p>
            </div>
          ))}
        </div>
        <div className="item">
          {dataFB.map((item) => (
            <div>
              <h1>Control</h1>
              <p>Air Door: {item.Control.AirDoor}</p>
              <p>Fan Back: {item.Control.FanBack}</p>
              <p>Fan Top: {item.Control.FanTop}</p>
              <p>Motor Down: {item.Control.MotorDown}</p>
              <p>Motor Up: {item.Control.MotorUp}</p>
            </div>
          ))}
        </div>

        <div className="item">
          {dataFB.map((item) => (
            <div>
              <h1>Sensor</h1>
              <p>Curtain: {item.Sensor.CurtainDetect}</p>
              <p>Door: {item.Sensor.DoorDetect}</p>
              <p>Humidity: {item.Sensor.Hum}</p>
              <p>Light: {item.Sensor.Light}</p>
              <p>Rain: {item.Sensor.Rain}</p>
              <p>Temp: {item.Sensor.Temp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
