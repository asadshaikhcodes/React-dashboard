import React from "react";
import { Row, Col, Card, PageHeader, Divider, DatePicker, Layout } from "antd";
import Meta from "antd/lib/card/Meta";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import PolarChart from "./PolarChart";

function DashboardContent() {
  return (
    <>
      <Layout>
        <Layout.Header
          className="site-layout-background"
          style={{
            borderBottom: "1px solid #eee",
            borderTop: "1px solid #eee",
            padding: "0 16px",
            height: "59px",
          }}
        >
          <Row>
            <Col span={24}>
              <Row justify="space-between" align="middle">
                <Col sm={24} lg={12}>
                  <PageHeader
                    title="DASHBOARD"
                    subTitle="REPORTS AND STATISTICS "
                    style={{ padding: "0px" }}
                  />
                </Col>
                <Col lg={12} sm={24}>
                  <Row align="middle" justify="end">
                    <Col>Day</Col>
                    <Col>
                      <Divider type="vertical" />
                    </Col>
                    <Col>Week</Col>
                    <Col>
                      <Divider type="vertical" />
                    </Col>
                    <Col>Month</Col>
                    <Col>
                      <Divider type="vertical" />
                    </Col>
                    <Col>Year</Col>
                    <Col>
                      <Divider type="vertical" />
                    </Col>
                    <Col>
                      <DatePicker />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout.Header>
      </Layout>
      <div style={{ padding: "16px" }}>
        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24}>
            <Card className="boxBig" hoverable>
              <Meta title="REVENUE" description="$66121" />
              <BarChart />
            </Card>
          </Col>
          <Col lg={12} sm={24}>
            <Card className="boxBig" title="NUMBER OF SALES" hoverable>
              <AreaChart />
            </Card>
          </Col>
          <Col lg={8} sm={24}>
            <Card
              className="box"
              title="AVERAGE REVENUE PER CUSTOMER"
              hoverable
            >
              <AreaChart />
            </Card>
          </Col>
          <Col lg={8} sm={24}>
            <Card className="box" title="AVERAGE REVENUE PER PRODUCT" hoverable>
              <AreaChart />
            </Card>
          </Col>
          <Col lg={8} sm={24}>
            <Card className="box" title="TOTAL REFUND" hoverable>
              <PieChart />
            </Card>
          </Col>
          <Col lg={8} sm={24}>
            <Card className="box" title="COMBINED REPORT" hoverable>
              <DoughnutChart />
            </Card>
          </Col>
          <Col lg={8} sm={24}>
            <Card
              className="box"
              title="UNIQUE NUMBER OF PRODUCS SOLD"
              hoverable
            >
              <PolarChart />
            </Card>
          </Col>
          <Col lg={8} sm={24}>
            <Card className="box" hoverable>
              <Meta title="TOTAL CUSTOMER" description="31312" />
              <BarChart />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DashboardContent;
