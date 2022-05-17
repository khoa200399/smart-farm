import React from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

export default function Signup() {

  const onFinish = (values) => {
    let user = '';
    let errorMessage = '';
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then((userCredential) => {
        user = userCredential.user.email;
        console.log(user);
        alert("Login Success");
      })
      .catch((error) => {
        // const errorCode = error.code;
        errorMessage = error.message;
        console.log(errorMessage);
      });
    };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        padding: "10rem",
      }}
    >
      <Card title={<h1>Log In</h1>} style={{ width: "500px" }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 10,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"            
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 5,
              span: 15,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 5,
              span: 15,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
