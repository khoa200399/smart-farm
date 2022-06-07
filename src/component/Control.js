import React from "react";
import {
  ref,
  set
} from 'firebase/database';
import { Card, Space, Switch,Row } from 'antd';
import { Form } from 'antd';
import CurtainIcon from "../icons/blinds.png"
import WindowIcon from "../icons/window.png"
import RainIcon from "../icons/raining.png"

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
      case "AutoManual":
        return set(ref(db, "/luanvan/Control/AutoManual"), value ? 1 : 0);
      default:
        return null
    }
  }

  console.log(sensor,"--sensor")

  return (
    <div style={{border:"1px solid #e5e7eb",borderRadius:"8px",padding:"1rem 1rem",background:"white",margin:"0.5rem 0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1>Control</h1>
      <div>
        <Form.Item label="Auto/Manual">
          <Switch checked={control.AutoManual === 1 ? true : false} onChange={(e) => handleChange(e, "AutoManual")} />
        </Form.Item>
      </div>
      
      <Form layout="horizental">
        <Space size={16}>
          <Row>
          <Form.Item label="Curtain">
            <Switch checked={control.Curtain === 1 ? true : false} onChange={(e) => handleChange(e, "Curtain")} />
          </Form.Item>
          <Form.Item label="Air Door">
            <Switch checked={control.AirDoor === 1 ? true : false} onChange={(e) => handleChange(e, "AirDoor")} />
          </Form.Item>
          <Form.Item label="Fan Back">
            <Switch checked={control.FanBack === 1 ? true : false} onChange={(e) => handleChange(e, "FanBack")} />
          </Form.Item>
          </Row>
         <Row>
         <Form.Item label="Fan Top">
            <Switch checked={control.FanTop === 1 ? true : false} onChange={(e) => handleChange(e, "FanTop")} />
          </Form.Item>
          <Form.Item label="Motor Up">
            <Switch checked={control.MotorUp === 1 ? true : false} onChange={(e) => handleChange(e, "MotorUp")} />
          </Form.Item>
          <Form.Item label="Motor Down">
            <Switch checked={control.MotorDown === 1 ? true : false} onChange={(e) => handleChange(e, "MotorDown")} />
          </Form.Item>
          </Row> 
        </Space>
      </Form>

      <div style={{display:"flex",justifyContent:"center"}}>
        <Space size={24}>
        <div
        style={{
          border: "1px solid #f3f4f6",
          display: "flex",justifyContent:"center",alignItems:"center",
          width: 80, height: 80, borderRadius: "8px",backgroundColor:sensor.CurtainDetect===1? "#4ade80":"#e5e7eb",boxShadow:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
        }}
        >
         <span style={{ fontSize: 24,color:sensor.CurtainDetect===1? "white":"black" }}>
           <img src={CurtainIcon} alt="" width={32} />
          </span>
        </div>

        <div
        style={{
          border: "1px solid #f3f4f6",
          display: "flex",justifyContent:"center",alignItems:"center",
          width: 80, height: 80, borderRadius: "8px",backgroundColor:control.DoorDetect===1? "#4ade80":"#e5e7eb",boxShadow:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
        }}
        >
        <span style={{ fontSize: 24,color:control.DoorDetect===1? "white":"black" }}>
          <img src={WindowIcon} alt="" width={32} />
          </span>
        </div>

        <div
        style={{
          border: "1px solid #f3f4f6",
          display: "flex",justifyContent:"center",alignItems:"center",
          width: 80, height: 80, borderRadius: "8px",backgroundColor:sensor.Rain===1? "#4ade80":"#e5e7eb",boxShadow:"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
        }}
        >
        <span style={{ fontSize: 24,color:sensor.Rain===1? "white":"black" }}>
          <img src={RainIcon} alt="" width={32} />
          </span>
        </div>
        </Space>
      </div>
    </div>
  )
}
