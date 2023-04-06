import React from "react";
import { Layout, Input, Menu, Row, Col, Button, Table } from "antd";
import axios from "axios";

export default function UserDetails(props) {
  const { Header, Footer, Sider, Content } = Layout;

  const getUserDetails = async () => {
    let _id = props?.params?.id;
    console.log(_id,"idsss");
    const { data } = await axios.get("/getUserDetails/" + `${_id}`).then(response => (console.log(response,"respo")));
    
  };

  return <><Table/></>;
}
