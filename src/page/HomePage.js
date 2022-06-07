import {React,  useEffect, useState } from "react";
import HumTemp from "../component/HumTemp";
import Control from "../component/Control";
import { Row, Col, Space, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

import {
  ref,
  onValue,
} from 'firebase/database';
import { ChartRealtime } from "../component/Chart";


export const HomePage = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    autoRangeSelect: null,
    control: null,
    sensor: null,
  });
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    onValue(ref(db, "/luanvan"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setData({
          autoRangeSelect: data.AutoRangeSelect,
          control: data.Control,
          sensor: data.Sensor,
        });
        setIsRendered(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = () => {
    navigate("/");
  }

  if (!isRendered) return null;

  return (
    <div style={{ backgroundColor: "#f3f4f6", width: "100vw", padding: "10px 10px"}}>
      <Button type="primary" onClick={handleClick} shape="circle" icon={<LogoutOutlined />} style={{display:"block"}} />
      <h1 style={{ fontSize: "50px" }}>SMART FARM</h1>
      <div
        style={{

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row>
          <Col span={18}>
            <ChartRealtime sensor={data.sensor} />
          </Col>

          <Col span={6}>
            <HumTemp autoRangeSelect={data.autoRangeSelect}></HumTemp>
            <Control
              control={data.control}
              db={db}
              sensor={data.sensor}
            ></Control>
          </Col>
        </Row>
      </div>
    </div>
  );
};
