import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Popover, Row, Col, Button, Popconfirm } from "antd";
import {
  EllipsisOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";

export default function UsersTable(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    const { data } = await axios.get("/getUserDetails");
    setUsers(data);
    console.log(data, "data");
  };

  const deleteItem = async (id) => {
    await axios
      .delete(`/deleteUserDetails/${id}`)
      .then((response) => {
        alert("Delete successful");
        getUsersData();
      })
      .catch((error) => {
        alert("Something went Wrong");
        console.error("There was an error!", error);
      });
  };

  const colums = [
    {
      title: "First Name",
      dataIndex: "firstName",

      onCell: (record) => ({
        onClick: () =>
          (window.location.href = "/getUserDetails/" + `${record?._id}`),
      }),
      render: (firstName) => {
        return (
          <div style={{ textTransform: "capitalize", cursor: "pointer" }}>
            {firstName}
          </div>
        );
      },
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      render: (lastName) => {
        return <div style={{ textTransform: "capitalize" }}>{lastName}</div>;
      },
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Date Of Birth",
      dataIndex: "dob",
    },
    {
      title: "Designation",
      dataIndex: "designation",
    },
    {
      title: "Comments",
      dataIndex: "comments",
    },
    {
      width: "60px",
      dataIndex: "_id",
      key: "_id",
      render: (id) => {
        return (
          <Popover
            placement="left"
            trigger="hover"
            content={
              <Row className="popovergrid">
                {/* <Col span={24} style={{ width: "10px" }}>
                  <Button className="popoveroptions">
                    <span className="invoice-download">
                      <Link to={"/soDetails" + "/" + id}>
                        <ProfileOutlined className="mddelete" /> Details
                      </Link>
                    </span>
                  </Button>
                </Col> */}
                <Col span={24}>
                  <Button className="popoveroptions">
                    <Popconfirm
                      title="Are you sure？"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => deleteItem(id)}
                      showArrow={true}
                    >
                      <span>
                        <DeleteOutlined className="mddelete" /> Delete
                      </span>
                    </Popconfirm>
                  </Button>
                </Col>
              </Row>
            }
          >
            <EllipsisOutlined style={{ fontSize: "25px", cursor: "pointer" }} />
          </Popover>
        );
      },
    },
  ];

  return (
    <>
      <Col span={24} className="fireFox">
        <Row justify="space-between" gutter={[16, 16]}>
          <Col span={12}>
            <div>
              <>
                <h1
                  style={{
                    fontSize: "30px",
                    marginLeft: "10px",
                  }}
                >
                  Users{" "}
                  <span style={{ fontSize: "20px", color: "#fe6101" }}>
                    ({users.length})
                  </span>
                </h1>
              </>
            </div>
          </Col>

          <Col span={12}>
            <Row gutter={[16, 16]} justify="end">
              <Col>
                <Button
                  style={{
                    minWidth: "160px",
                    borderRadius: "6px",
                    float: "right",
                    height: "36px",
                    marginRight: "12px",
                    marginTop: "22px",
                    backgroundColor: "#fe6101",
                    color: "#000",
                    border: "#fe6101",
                  }}
                  onClick={()=>window.location.href="/addUser"}
                >
                  <PlusOutlined />
                  Add User
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Table dataSource={users} columns={colums} />
    </>
  );
}
