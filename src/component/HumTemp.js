import React from "react";
import { getDatabase, ref, set} from 'firebase/database';

import { Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export default function HumTemp(props) {
  const [form] = Form.useForm();
  const {autoRangeSelect}=props
  
  const onUpdate = (values) => {
    const data = getDatabase();
    set(ref(data, "/luanvan/AutoRangeSelect/MaxHum"), parseInt(values.maxHum));
    set(ref(data, "/luanvan/AutoRangeSelect/MinHum"), parseInt(values.minHum));
    set(ref(data, "/luanvan/AutoRangeSelect/MaxTemp"), parseInt(values.maxTemp));
    set(ref(data, "/luanvan/AutoRangeSelect/MinTemp"), parseInt(values.minTemp));
    // set(ref(data, "/luanvan/AutoRangeSelect/"), {
    //   MaxHum: parseInt(values.maxHum),
    //   MaxTemp: parseInt(values.maxTemp),
    //   MinHum: parseInt(values.minHum),
    //   MinTemp: parseInt(values.minTemp),
    // });
    alert("Update done!")
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
          label="Max Temperature:"
          required
          name="maxTemp"
          tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
        >
          <Input placeholder="Max Temperature" />
        </Form.Item>
        <Form.Item
          label="Min Temperature:"
          required
          name="minTemp"
          tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
        >
          <Input placeholder="Min Temperature" />
        </Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
    </div>
  )
}