import React, { useState } from "react";

import {
  PlusOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  LinkedinOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Layout, Input, Menu } from "antd";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Form1 from "./Form1";
import Headers from "./Headers";
import Persons from "./Persons";
import Inc from "./Inc";
import InputButtons from "./InputButtons";
import ObjectsOfArray from "./ObjectsOfArray";
import InputToWishList from "./InputToWishList";
import WishListToCart from "./WishListToCart";
import SelectedColor from "./SelectedColor";
import NoData from "./NoData";
import UsersTable from "./UsersTable";
import UserDetails from "./routes/UserDetails";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Task 1", "sub1", <FormOutlined />, [
    getItem("Increment & Decrement", "g1"),
    getItem("Input Box", "g2"),
  ]),
  getItem("Task 2", "sub2", <FormOutlined />, [
    getItem(" Input Form & Buttons ", "7"),
  ]),
  getItem("Task 3", "sub4", <SettingOutlined />, [
    getItem("Users Table", "9"),
    getItem("Objects of Array", "10"),
    getItem("Input to WishList", "11"),
    getItem("WishList to Cart", "12"),
    getItem("Cart Alert", "13"),
    getItem("Selected Color", "14"),
    getItem("API Call", "15"),
  ]),
];

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;

const App = () => {
  const [active, setActive] = useState("9");

  const onClick = (e) => {
    console.log("click ", e);
  };
  const handleSubMenu = (e) => {
    setActive(e.key);
  };
  const addForm = () => {
    setActive("g2");
  };
  return (
    <>
      <Header>
          <Headers/>
        </Header>
        
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/addUser" element={<Form1 />} />
          <Route path="/usersTable" element={<UsersTable />} />
          <Route path="/getUserDetails/:id" element={<UserDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      <Layout>
      
      </Layout>
    </>
  );
};

export default App;
