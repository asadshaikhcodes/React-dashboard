import React from "react";
import { Row, Col, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import PolarChart from "./PolarChart";

function DashboardContent() {
  return (
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
        <Card className="box" title="AVERAGE REVENUE PER CUSTOMER" hoverable>
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
        <Card className="box" title="UNIQUE NUMBER OF PRODUCS SOLD" hoverable>
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
  );
}

export default DashboardContent;
