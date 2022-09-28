import React, { useState } from "react";
import {
  Layout,
  Menu,
  Row,
  Col,
  Avatar,
  Space,
  Dropdown,
  Image,
  Divider,
} from "antd";
import {
  MailOutlined,
  CodeSandboxOutlined,
  DownOutlined,
} from "@ant-design/icons";
import DashboardContent from "./DashboardContent";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Transactions from "./Transactions";
import Products from "./Products";
import Customers from "./Customers";
const { Header, Sider, Content } = Layout;

const DropdownMenu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BrowserRouter>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo">
            <h3>Logo</h3>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            items={[
              {
                label: <Link to="/">Dashboard</Link>,
                key: "dashboard",
                icon: <DesktopOutlined />,
              },
              {
                label: <Link to="/transactions">Transactions</Link>,
                key: "transactions",
                icon: <FileOutlined />,
              },
              {
                label: <Link to="/products">Products</Link>,
                key: "products",
                icon: <PieChartOutlined />,
              },
              {
                label: <Link to="/customers">Customers</Link>,
                key: "customers",
                icon: <UserOutlined />,
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            <Row>
              <Col lg={{ span: 6, push: 18 }} sm={12}>
                <Row justify="center" align="middle">
                  <Col>
                    <MailOutlined />
                  </Col>
                  <Col>
                    <Divider type="vertical" />
                  </Col>
                  <Col>
                    <CodeSandboxOutlined />
                  </Col>
                  <Col>
                    <Divider type="vertical" />
                  </Col>
                  <Col>
                    <Dropdown overlay={DropdownMenu} trigger={["hover"]}>
                      <a
                        onClick={(e) => e.preventDefault()}
                        style={{ background: "transparent" }}
                      >
                        <Space>
                          User Name
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </Col>
                  <Col>
                    <Avatar
                      src={
                        <Image
                          src="https://joeschmoe.io/api/v1/random"
                          style={{
                            width: 40,
                          }}
                        />
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Header>
          <Content>
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default Dashboard;
