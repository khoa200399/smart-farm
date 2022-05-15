import React, { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { Space, Switch } from 'antd';
import { Form } from 'antd';

export default function Control() {
  const db = getDatabase();

  const [control, setControl] = useState(null);
  const [isRendered, setIsRendered] = useState(false);


  useEffect(() => {
    handleReadDB()
  }, []);

  const handleReadDB = () => {
    onValue(ref(db, "/luanvan/Control"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setControl(data)
        setIsRendered(true)
      }
    })
  }

  const handleChange = (e, key) => {
    const value = e

    switch (key) {
      case "AirDoor":
        return set(ref(db, "/luanvan/Control/AirDoor"), value ? 1 : 0);
      case "FanBack":
        return set(ref(db, "/luanvan/Control/FanBack"), value ? 1 : 0);
      case "FanTop":
        return set(ref(db, "/luanvan/Control/FanTop"), value ? 1 : 0);
      case "MotorDown":
        return set(ref(db, "/luanvan/Control/MotorDown"), value ? 1 : 0);
      case "MotorUp":
        return set(ref(db, "/luanvan/Control/MotorUp"), value ? 1 : 0);
      default:
        return null
    }
  }

  // const handleOnChangeAirDoor = (e) => {
  //   const data = getDatabase();
  //   var val = e.target.checked;
  //   //Set value
  //   set(ref(data, "/luanvan/Control/AirDoor"), val ? 1 : 0);
  // };

  // const handleOnChangeFanBack = (e) => {
  //   const data = getDatabase();
  //   var val = e.target.checked;
  //   //Set value
  //   set(ref(data, "/luanvan/Control/FanBack"), val ? 1 : 0);
  // };

  // const handleOnChangeFanTop = (e) => {
  //   const data = getDatabase();
  //   var val = e.target.checked;
  //   //Set value
  //   set(ref(data, "/luanvan/Control/FanTop"), val ? 1 : 0);
  // };

  // const handleOnChangeMotorUp = (e) => {
  //   const data = getDatabase();
  //   var val = e.target.checked;
  //   //Set value
  //   set(ref(data, "/luanvan/Control/MotorUp"), val ? 1 : 0);
  // };

  // const handleOnChangeMotorDown = (e) => {
  //   const data = getDatabase();
  //   var val = e.target.checked;
  //   //Set value
  //   set(ref(data, "/luanvan/Control/MotorDown"), val ? 1 : 0);
  // };

  if (!isRendered) return <div>loading</div>

  return (
    <>
      <h1>Control</h1>

      <Form layout="vertical" style={{ display: "flex" }}>
        <Space>
          <Form.Item label="Air Door">
            <Switch checked={control.AirDoor === 1 ? true : false} onChange={(e) => handleChange(e, "AirDoor")} />
          </Form.Item>
          <Form.Item label="Fan Back">
            <Switch checked={control.FanBack === 1 ? true : false} onChange={(e) => handleChange(e, "FanBack")} />
          </Form.Item>
          <Form.Item label="Fan Top">
            <Switch checked={control.FanTop === 1 ? true : false} onChange={(e) => handleChange(e, "FanTop")} />
          </Form.Item>
          <Form.Item label="Motor Up">
            <Switch checked={control.MotorUp === 1 ? true : false} onChange={(e) => handleChange(e, "MotorUp")} />
          </Form.Item>
          <Form.Item label="Motor Down">
            <Switch checked={control.MotorDown === 1 ? true : false} onChange={(e) => handleChange(e, "MotorDown")} />
          </Form.Item>
        </Space>
      </Form>
    </>
  )

  // return (
  //   <div className="Control">
  //     <h1>Control device</h1>
  //     <div className="control">
  //       <label htmlFor="airdoor">Air Door</label>
  //       <input
  //         id="#airdoor"
  //         type="checkbox"
  //         onChange={handleOnChangeAirDoor}
  //       />{" "}
  //       <br />
  //       <label htmlFor="fanback">Fan Back</label>
  //       <input
  //         id="#fanback"
  //         type="checkbox"
  //         onChange={handleOnChangeFanBack}
  //       />{" "}
  //       <br />
  //       <label htmlFor="fantop">Fan Top</label>
  //       <input
  //         id="#fantop"
  //         type="checkbox"
  //         onChange={handleOnChangeFanTop}
  //       />{" "}
  //       <br />
  //       <label htmlFor="motorup">Motor Up</label>
  //       <input
  //         id="#motorup"
  //         type="checkbox"
  //         onChange={handleOnChangeMotorUp}
  //       />{" "}
  //       <br />
  //       <label htmlFor="motordown">Motor Down</label>
  //       <input
  //         id="#motordown"
  //         type="checkbox"
  //         onChange={handleOnChangeMotorDown}
  //       />{" "}
  //       <br />
  //     </div>
  //   </div>
  // );
}
