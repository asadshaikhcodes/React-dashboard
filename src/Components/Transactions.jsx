import React from "react";
import { Row, Col, Card, PageHeader, Divider, DatePicker, Layout } from "antd";

function Transactions() {
  return (
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
        <PageHeader title="Transactions" style={{ padding: "0px" }} />
      </Layout.Header>
    </Layout>
  );
}

export default Transactions;
