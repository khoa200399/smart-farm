import React from "react";
import {
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { Card, Space, Switch } from 'antd';
import { Form } from 'antd';
export default function Control(props) {
  const { control,sensor, db } = props

  const handleChange = (e, key) => {
    const value = e

    switch (key) {
      case "Curtain":
        return set(ref(db, "/luanvan/Control/Curtain"), value ? 1 : 0);
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

  console.log(sensor,"--sensor")

  return (
    <>
      <h1>Control</h1>

      <Form layout="vertical" style={{ display: "flex" }}>
        <Space size={32}>
          <Form.Item label="Curtain">
            <Switch checked={control.Curtain === 1 ? true : false} onChange={(e) => handleChange(e, "Curtain")} />
          </Form.Item>
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

      <div style={{display:"flex"}}>
        <Space size={24}>
        <Card bordered style={{ width: 80, height: 80, borderRadius: "8px",backgroundColor:sensor.CurtainDetect===1? "#22c55e":"#e5e7eb" }}>
          <span style={{ fontSize: 24,color:sensor.DoorDetect===1? "white":"black" }}>
            <i class="fa fa-box"></i>
          </span>
        </Card>

        <Card bordered style={{ width: 80, height: 80, borderRadius: "8px",backgroundColor:sensor.DoorDetect===1? "#22c55e":"#e5e7eb" }}>
          <span style={{ fontSize: 24,color:sensor.DoorDetect===1? "white":"black" }}>
            <i className="fas fa-door-open"></i>
          </span>
        </Card>
        </Space>
      </div>
    </>
  )
}
