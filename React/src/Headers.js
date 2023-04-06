import React from "react";

import { Col, Row, Button } from "antd";
import { Link } from "react-router-dom";
export default function Headers(props) {
  
  return (
    <Col span={24}>
        <div style={{ backgroundColor: "#13c2c2",height:"60px"}}>
      <Row style={{ justifyContent: "right" }}>
       
        
      <Col span={2} id = 'nav-links-container'>
            
            <Button
              style={{
                backgroundColor: "#13c2c2",
                color: "#000",
                border: "0px",
                margin:"1rem"
              }}
              onClick={()=>window.location.href="/dashboard"}
            >
              Dashboard
            </Button>
          </Col>
            <Col span={2} id = 'nav-links-container'>
            
              <Button
                style={{
                  backgroundColor: "#13c2c2",
                  color: "#000",
                  border: "0px",
                  margin:"1rem"
                }}
                onClick={()=>window.location.href="/"}
              >
                HOME
              </Button>
            </Col>
            <Col span={2}>
              <Button
                style={{
                  backgroundColor: "#13c2c2",
                  color: "#000",
                  border: "0px",
                  margin:"1rem"
                }}
                onClick={()=>window.location.href="/usersTable"}
              >
                USERS
              </Button>
            </Col>
             
            
         
       
      </Row>
    </div>
    </Col>
  
  );
}
