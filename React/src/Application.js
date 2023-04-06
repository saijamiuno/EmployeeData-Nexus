import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import AppRoutes from "../config/AppRoutes";
import SiderInventory from "../Common/SiderInventory";
// import HeaderInventory from "../Common/HeaderInventory";
// import HeaderWarehouse from "../Common/HeaderWarehouse";

const { Content, Header } = Layout;

const Application = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    getUserRole();
  }, [userRole]);

  const getUserRole = () => {
    let user = JSON.parse(localStorage.getItem("userDetails"));
    if (user?.userRole) {
      setUserRole(user.userRole);
    }
  };

  return (
    <Layout hasSider className="fullsitelayout">
      {userRole.toLowerCase() === "admin" && <SiderInventory />}
      <Layout className="sitecontentlayout">
        <Header className="app-hed">
          {/* {userRole.toLowerCase() === "admin" ? (
            <HeaderInventory />
          ) : (
            <HeaderWarehouse />
          )} */}
        </Header>
        <Content className="mainlayout">
          <div className="app-div">
            <Layout>
              <Switch>
                {AppRoutes.map((route) => (
                  <Route
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                    key={route.key}
                  />
                ))}
              </Switch>
            </Layout>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Application;
