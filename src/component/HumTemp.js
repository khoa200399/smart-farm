import React from "react";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

import { Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export default function HumTemp(props) {
  const [form] = Form.useForm();
  const {autoRangeSelect}=props
  
  const onUpdate = (values: any) => {
    const data = getDatabase();
    set(ref(data, "/luanvan/AutoRangeSelect"), {
      MaxHum: Number(values.maxHum),
      MaxTemp: Number(values.maxTemp),
      MinHum: Number(values.minHum),
      MinTemp: Number(values.minTemp),
    });
  };

  return (
    <div style={{border:"1px solid #e5e7eb",borderRadius:"8px",padding:"1rem 1rem",background:"white"}}>
      <h1>Auto Range</h1>

      <Form
        form={form}
        layout="vertical"
        style={{
          padding: "1rem 2rem"
        }}
        initialValues={{
          maxHum: autoRangeSelect?.MaxHum || 0,
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
}