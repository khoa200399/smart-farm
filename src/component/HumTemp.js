import React, { useState,useEffect } from "react";
import {
  getDatabase,
  ref,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

import { Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export default function HumTemp() {
  const [form] = Form.useForm();
  const db = getDatabase();

  // const [maxhum, setMaxHum] = useState("");
  // const [maxtemp, setMaxTemp] = useState("");
  // const [minhum, setMinHum] = useState("");
  // const [mintemp, setMinTemp] = useState("");

  const [isRendered,setIsRendered]=useState(false)
  //
  const [autoRangeSelect, setAutoRangeSelect] = useState(null);

  useEffect(() => {
    handleReadDB()
  },[]);

  const handleReadDB=()=>{
    onValue(ref(db,"/luanvan/AutoRangeSelect"), (snapshot) => {
          const data = snapshot.val();
          if (data !== null) {
            setAutoRangeSelect(data)
            setIsRendered(true)
          }
        })
  }

  // const handleOnChangeMxH = (e) => {
  //   setMaxHum(e.target.value);
  // };

  // const handleOnChangeMiH = (e) => {
  //   setMinHum(e.target.value);
  // };

  // const handleOnChangeMxT = (e) => {
  //   setMaxTemp(e.target.value);
  // };

  // const handleOnChangeMiT = (e) => {
  //   setMinTemp(e.target.value);
  // };

  // const writeHum = () => {
  //   const data = getDatabase();
  //   set(ref(data, "/luanvan/AutoRangeSelect"), {
  //     MaxHum: Number(maxhum),
  //     MaxTemp: Number(maxtemp),
  //     MinHum: Number(minhum),
  //     MinTemp: Number(mintemp),
  //   });
  // };

  const onUpdate = (values: any) => {
    const data = getDatabase();
    set(ref(data, "/luanvan/AutoRangeSelect"), {
      MaxHum: Number(values.maxHum),
      MaxTemp: Number(values.maxTemp),
      MinHum: Number(values.minHum),
      MinTemp: Number(values.minTemp),
    });
  };

if(!isRendered){
  return <div>loading</div>
}

  return(
    <div>
    <h1>Auto Range</h1>

    <Form
      form={form}
      layout="vertical"
      style={{
        padding:"1rem 2rem"
      }}
      initialValues={{ maxHum: autoRangeSelect?.MaxHum || 0,
        minHum: autoRangeSelect?.MinHum || 0,
        maxTemp: autoRangeSelect?.MaxTemp || 0,
        minTemp: autoRangeSelect?.MinTemp || 0
      }}
      onFinish={onUpdate}
    >
      <Form.Item label="Max Humidity:" required name="maxHum">
        <Input placeholder="Max Humidity" />
      </Form.Item>
      <Form.Item
        label="Min Humidity:"
        required
        name="minHum"
        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
      >
        <Input placeholder="Min Humidity" />
      </Form.Item>
      <Form.Item
        label="Max Tempurater:"
        required
        name="maxTemp"
        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
      >
        <Input placeholder="Max Tempurater" />
      </Form.Item>
      <Form.Item
        label="Min Tempurater:"
        required
        name="minTemp"
        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
      >
        <Input placeholder="Min Tempurater" />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit">Update</Button>
      </Form.Item>
    </Form>
    </div>
  )

  // return (
  //   <div className="HumTemp">
  //     <label htmlFor="maxHum">Max Humidity: </label>
  //     <input
  //       id="maxHum"
  //       type="text"
  //       onChange={handleOnChangeMxH}
  //       value = {maxhum}
  //     ></input>{" "}
  //     <br />
  //     <label htmlFor="minHum">Min Humidity: </label>
  //     <input
  //       id="minHum"
  //       type="text"
  //       onChange={handleOnChangeMiH}
  //       value={minhum}
  //     ></input>{" "}
  //     <br />
  //     <label htmlFor="maxTemp">Max Tempurater: </label>
  //     <input
  //       id="maxTemp"
  //       type="text"
  //       onChange={handleOnChangeMxT}
  //       value={maxtemp}
  //     ></input>{" "}
  //     <br />
  //     <label htmlFor="minTemp">Min Tempurater: </label>
  //     <input
  //       id="minTemp"
  //       type="text"
  //       onChange={handleOnChangeMiT}
  //       value={mintemp}
  //     ></input>{" "}
  //     <br />
  //     <button onClick={writeHum}>Set</button>
  //   </div>
  // );
}
