import { Row, Col } from "antd";
import React from "react";

function DashboardContent() {
  return (
    <Row gutter={[16,16]} style={{ background: "#eee", padding: "20px" }}>
      <Col span={12}>
        <div className="box"></div>
      </Col>
      <Col span={12}>
        <div className="box"></div>
      </Col>
      <Col span={8}>
        <div className="box"></div>
      </Col>
      <Col span={8}>
        <div className="box"></div>
      </Col>
      <Col span={8}>
        <div className="box"></div>
      </Col>
      <Col span={8}>
        <div className="box"></div>
      </Col>
      <Col span={8}>
        <div className="box"></div>
      </Col>
      <Col span={8}>
        <div className="box"></div>
      </Col>
    </Row>
  );
}

export default DashboardContent;
