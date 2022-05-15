import React ,{useEffect, useState} from "react"
import HumTemp from "../component/HumTemp";
import Control from "../component/Control";
import { Row, Col } from 'antd';
import {db} from "../firebase"

import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { ChartRealtime } from "../component/Chart";

export const HomePage=()=>{
  const [data,setData]=useState({
    autoRangeSelect:null,
    control:null,
    sensor:null
  })
  const [isRendered,setIsRendered]=useState(false)

  useEffect(() => {
    onValue(ref(db,"/luanvan"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
       setData({
        autoRangeSelect:data.AutoRangeSelect,
        control:data.Control,
        sensor:data.Sensor
       })
       setIsRendered(true)
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


if(!isRendered) return null

  return(
    <>
    <Row>
    <Col span={12}>
    <HumTemp autoRangeSelect={data.autoRangeSelect}></HumTemp>
    </Col>

    <Col span={12}>
    <Control control={data.control} db={db} sensor={data.sensor}></Control>
    </Col>
    </Row>
      <hr />
      <ChartRealtime sensor={data.sensor}/>
    </>
  )
}