import { Col, Row, Button, Checkbox, Form, Input, Card } from "antd";
import { useState } from "react";
// import './Login.css';

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Col span={24}>
      <Row>
        <Col span={10}></Col>
        <Col span={5} style={{ marginTop: "35vh" }}>
          <Card style={{ boxShadow: "  0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
            <span style={{ marginLeft: "13vh", fontSize: "30px" }}>LOGIN</span>

            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <span style={{ fontSize: "20px" }}>Username</span>
              <Form.Item
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
              <span style={{ fontSize: "20px" }}>Password</span>
              <Form.Item
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

              <Form.Item>
                <Button
                  onClick={() => (window.location.href = "/homePage")}
                  style={{
                    width: "100%",
                    backgroundColor: "#0958d9",
                    color: "#fff",
                  }}
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default Login;
