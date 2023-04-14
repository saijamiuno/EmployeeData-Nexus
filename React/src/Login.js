import React, { useState, useEffect } from "react";
import { Col, Row, Button, Checkbox, Form, Input, Card } from "antd";
import WebFont from "webfontloader";
import "./App.css";
import login from "./Images/login.jpg";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(${login})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Col span={24}>
        <Row>
          <Col span={10}></Col>
          <Col span={5}>
            <Card
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 8, 0.2)",
                backgroundColor: "#bfbfbf",
                border: "transparent",
              }}
            >
              <span
                style={{
                  marginLeft: "13vh",
                  fontSize: "30px",
                  fontWeight: "800",
                  fontFamily: "unset",
                }}
              >
                LOGIN
              </span>

              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <span style={{ fontSize: "18px" }}>Username</span>
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
                <span style={{ fontSize: "18px" }}>Password</span>
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
                      border: "transparent",
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
    </div>
  );
}

export default Login;
