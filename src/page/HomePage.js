import React, { useEffect, useState } from "react"
import HumTemp from "../component/HumTemp";
import Control from "../component/Control";
import { Row, Col, Space } from 'antd';
import { db } from "../firebase"

import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { ChartRealtime } from "../component/Chart";

export const HomePage = () => {
  const [data, setData] = useState({
    autoRangeSelect: null,
    control: null,
    sensor: null
  })
  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    onValue(ref(db, "/luanvan"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setData({
          autoRangeSelect: data.AutoRangeSelect,
          control: data.Control,
          sensor: data.Sensor
        })
        setIsRendered(true)
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (!isRendered) return null

  return (
    <div style={{ backgroundColor: "#f3f4f6", width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Row>
        <Col span={18}>
          <ChartRealtime sensor={data.sensor} />
        </Col>

        <Col span={6}>
          <HumTemp autoRangeSelect={data.autoRangeSelect}></HumTemp>
          <Control control={data.control} db={db} sensor={data.sensor}></Control>
        </Col>

      </Row>

    </div>
  )
}