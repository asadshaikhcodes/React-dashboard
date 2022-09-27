import React, { useState } from "react";
import { Layout, Menu, Row, Col } from "antd";
import DashboardContent from "./DashboardContent";

const { Header, Sider, Content } = Layout;
function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        className="header"
        style={{
          padding: 0,
        }}
      >
        <Layout>
          <Sider>
            <div className="logo">
              <h3>Logo</h3>
            </div>
          </Sider>
        </Layout>
      </Header>
      <Layout className="site-layout">
        {/* <Row> */}
        {/* <Col span={6}> */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            items={[
              { label: "Dashboard", key: "dashboard" },
              { label: "Transactions", key: "transactions" },
              { label: "Products", key: "products" },
              { label: "Customers", key: "customers" },
            ]}
          />
        </Sider>
        {/* </Col> */}
        {/* <Col span={10}> */}
        <Content>
          <Row>
            <Col span={24}>
              <Layout>
                <Header className="header-secondary">
                  <h2>DASHBOARD REPORTS AND STATISTICS</h2>
                </Header>
              </Layout>
            </Col>
          </Row>
          <Row style={{ marginLeft: "0px", marginRight: "0x" }}>
            <Col span={18}>
              <Layout>
                <Content>
                  <DashboardContent />
                </Content>
              </Layout>
            </Col>
            <Col span={6}>Secondary Sider Content</Col>
          </Row>
        </Content>
        {/* </Col> */}
        {/* </Row> */}
      </Layout>
    </Layout>
  );
}

export default Dashboard;
