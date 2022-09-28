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
  Card,
  PageHeader,
  DatePicker,
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
import DashboardTimeline from "./DashboardTimeline";
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
            { label: "Dashboard", key: "dashboard", icon: <DesktopOutlined /> },
            {
              label: "Transactions",
              key: "transactions",
              icon: <FileOutlined />,
            },
            { label: "Products", key: "products", icon: <PieChartOutlined /> },
            { label: "Customers", key: "customers", icon: <UserOutlined /> },
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
            <Col lg={6} sm={12} push={17}>
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
          <Row>
            <Col lg={18} sm={24}>
              <DashboardContent />
            </Col>
            <Col lg={6} sm={24}>
              <Card title="LATEST ACTIVITY">
                <DashboardTimeline />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
