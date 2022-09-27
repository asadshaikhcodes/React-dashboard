import { Row, Col, Card } from "antd";
import React from "react";

function DashboardContent() {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Card className="boxBig" />
      </Col>
      <Col span={12}>
        <Card className="boxBig" />
      </Col>
      <Col span={8}>
        <Card className="box" />
      </Col>
      <Col span={8}>
        <Card className="box" />
      </Col>
      <Col span={8}>
        <Card className="box" />
      </Col>
      <Col span={8}>
        <Card className="box" />
      </Col>
      <Col span={8}>
        <Card className="box" />
      </Col>
      <Col span={8}>
        <Card className="box" />
      </Col>
    </Row>
  );
}

export default DashboardContent;
