import React from "react";
import { Row, Col, Card, PageHeader, Divider, DatePicker, Layout } from "antd";
import Meta from "antd/lib/card/Meta";
import BarChart from "./BarChart";
import AreaChart, { LineChart } from "./AreaChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import PolarChart from "./PolarChart";
import DashboardTimeline from "./DashboardTimeline";
import MultiAxisChart from "./MultiAxisChart";
import MultiTypeChart from "./MultiTypeChart";

function DashboardContent({
  pieChartData,
  barChartData,
  areaChartData,
  doughnutData,
  lineChartData,
  options,
}) {
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
            <Col span={18}>
              <Row justify="space-between" align="middle">
                <Col sm={24} lg={12}>
                  <PageHeader
                    title="INDIA"
                    subTitle="CORONA VIRUS Covid19 STATISTICS"
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
            <Col span={6}>
              <h3>LATEST ACTIVITY</h3>
            </Col>
          </Row>
        </Layout.Header>
        <Layout.Content>
          <Row>
            <Col lg={18} sm={24}>
              <div
                style={{ padding: "16px", height: "100vh", overflowY: "auto" }}
              >
                <Row gutter={[16, 16]}>
                  <Col lg={12} sm={24}>
                    <Card className="boxBig" hoverable title="Recovery By Year">
                      <BarChart data={barChartData} />
                    </Card>
                  </Col>
                  <Col lg={12} sm={24}>
                    <Card className="boxBig" title="NEW CASES" hoverable>
                      <LineChart data={lineChartData} options={options} />
                    </Card>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Card
                      className="box"
                      title="CURRENT STATS"
                      hoverable
                      style={{ height: "400px" }}
                    >
                      <PieChart data={pieChartData} options={options} />
                    </Card>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Card
                      className="box"
                      title="RECOVERY/DEATH RATE"
                      hoverable
                      style={{ height: "400px" }}
                    >
                      <DoughnutChart data={doughnutData} options={options} />
                    </Card>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Card
                      className="box linechartCard"
                      title="Deaths By Year"
                      hoverable
                      style={{ height: "400px" }}
                    >
                      <AreaChart data={areaChartData} />
                    </Card>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Card
                      className="box linechartCard"
                      title="COMBINED REPORT"
                      hoverable
                      style={{ height: "400px" }}
                    >
                      <MultiAxisChart />
                    </Card>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Card
                      className="box"
                      title="UNIQUE NUMBER OF PRODUCS SOLD"
                      hoverable
                      style={{ height: "400px" }}
                    >
                      <PolarChart />
                    </Card>
                  </Col>
                  <Col lg={8} sm={24}>
                    <Card
                      className="box linechartCard"
                      title="TOTAL CUSTOMER"
                      hoverable
                      style={{ height: "400px" }}
                    >
                      <MultiTypeChart />
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} sm={24}>
              <Card>
                <DashboardTimeline />
              </Card>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </>
  );
}

export default DashboardContent;
