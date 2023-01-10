import React, { useEffect, useState } from "react";
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

const api = "https://covid-193.p.rapidapi.com/statistics";
const api2 = "https://corona-api.com/countries/IN";
const apiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2c027a563fmshc0b3d515d7e2b2dp150d92jsn24d466a12756",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};
const chartDataOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

//get data for pie chart
const getPieChartData = async () => {
  const chartLabels = [];
  const chartData = {
    labels: [...chartLabels],
    datasets: [],
  };
  const backgroundColors = ["#eb2f96", "#722ed1", "#2f54eb", "#1890ff"];

  const borderColr = ["#eb2f96", "#722ed1", "#2f54eb", "#1890ff"];
  const dataset = {
    data: [],
    backgroundColor: [],
    borderColor: [],
    borderWidth: 1,
  };
  return new Promise((resolve, reject) => {
    fetch(api2)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const caseLabels = Object.getOwnPropertyNames(
          responseData.data["latest_data"]
        )
          .filter((propertyName) => {
            return propertyName != "calculated";
          })
          .map((filteredLabels) => {
            dataset.data.push(responseData.data["latest_data"][filteredLabels]);
            return filteredLabels.toUpperCase();
          });
        chartData.labels = caseLabels;
        dataset.backgroundColor = backgroundColors.slice(
          0,
          dataset.data.length + 1
        );
        dataset.borderColor = borderColr.slice(0, dataset.data.length + 1);
        chartData.datasets.push(dataset);
        resolve(chartData);
      })
      .catch((responseErr) => {
        console.log("response error: ", responseErr);
      });
  });
};

//get data for doughnut chart
const getDoughnutData = async () => {
  const chartLabels = [];
  const chartData = {
    labels: [],
    datasets: [],
  };
  const dataset = {
    data: [],
    backgroundColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
    borderWidth: 1,
  };
  return new Promise((resolve, reject) => {
    fetch(api2)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const caseLabels = Object.getOwnPropertyNames(
          responseData.data["latest_data"].calculated
        ).map((filteredLabels) => {
          dataset.data.push(
            Math.ceil(
              responseData.data["latest_data"].calculated[filteredLabels]
            )
          );
          return filteredLabels.toUpperCase();
        });
        chartData.labels = caseLabels;
        dataset.backgroundColor = dataset.backgroundColor.slice(
          0,
          caseLabels.length
        );
        dataset.borderColor = dataset.borderColor.slice(0, caseLabels.length);
        chartData.datasets.push(dataset);
        resolve(chartData);
      })
      .catch((responseErr) => {
        console.log("response error: ", responseErr);
      });
  });
};

//get bar chart data
const getBarChartData = () => {
  const yearTwentyStart = new Date("2020/03/01");
  const yearTwentyEnd = new Date("2020/12/31");
  const yearTwentyOneEnd = new Date("2021/12/31");
  let twentyTwenty = 0;
  let twnetyOne = 0;
  const chartData = {
    labels: ["2020", "2021"],
    datasets: [],
  };
  const dataset = {
    label: "Recovery By Year",
    data: [],
    backgroundColor: "#1890ff",
  };
  return new Promise((resolve, reject) => {
    fetch(api2)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        //calculate data by year
        responseData.data.timeline.forEach((timelineObj) => {
          if (
            new Date(timelineObj.date) > yearTwentyStart &&
            new Date(timelineObj.date) <= yearTwentyEnd
          ) {
            twentyTwenty += timelineObj.recovered;
          } else if (
            new Date(timelineObj.date) > yearTwentyEnd &&
            new Date(timelineObj.date) <= yearTwentyOneEnd
          ) {
            twnetyOne += timelineObj.recovered;
          }
        });
        dataset.data = [twentyTwenty, twnetyOne];
        chartData.datasets.push(dataset);
        resolve(chartData);
      })
      .catch((responseErr) => {
        console.log("response error: ", responseErr);
      });
  });
};

//get area chart data
const getAreaChartData = () => {
  const yearTwentyStart = new Date("2020/03/01");
  const yearTwentyEnd = new Date("2020/12/31");
  const yearTwentyOneEnd = new Date("2021/12/31");
  let twentyTwenty = 0;
  let twnetyOne = 0;
  const chartData = {
    labels: ["2020", "2021"],
    datasets: [],
  };
  const dataset = {
    fill: true,
    label: "Deaths By Year",
    data: [],
    backgroundColor: "#fa541c",
  };
  return new Promise((resolve, reject) => {
    fetch(api2)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log("response data", responseData);
        //calculate data by year
        responseData.data.timeline.forEach((timelineObj) => {
          if (
            new Date(timelineObj.date) > yearTwentyStart &&
            new Date(timelineObj.date) <= yearTwentyEnd
          ) {
            twentyTwenty += timelineObj.deaths;
          } else if (
            new Date(timelineObj.date) > yearTwentyEnd &&
            new Date(timelineObj.date) <= yearTwentyOneEnd
          ) {
            twnetyOne += timelineObj.deaths;
          }
        });
        dataset.data = [twentyTwenty, twnetyOne];
        chartData.datasets.push(dataset);
        resolve(chartData);
      })
      .catch((responseErr) => {
        console.log("response error: ", responseErr);
      });
  });
};

//get last seven day data
const getSevenDayData = async () => {
  const chartData = {
    labels: [],
    datasets: [],
  };
  const dataset = {
    fill:true,
    label: "New Cases(Last Seven Days)",
    data: [],
    backgroundColor: "#FFD75A",
  };
  return new Promise((resolve, reject) => {
    fetch(api2)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const propertyName = "new_confirmed";
        console.log("response data", responseData);
        //get last seven days timeline from api response
        responseData.data.timeline.slice(0, 7).forEach((timelineObj) => {
          chartData.labels.push(
            new Date(timelineObj.date).toLocaleDateString()
          );
          dataset.data.push(timelineObj[propertyName]);
        });
        chartData.datasets.push(dataset);
        console.log("line chart data", chartData);
        resolve(chartData);
      })
      .catch((responseErr) => {
        console.log("response error: ", responseErr);
      });
  });
};

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

//Main Dashboard Component
function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [areaChartData, setAreaChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [doughnutData, setdougnutData] = useState({
    labels: [],
    datasets: [],
  });

  const [lineChartData, setLineChartdata] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getPieChartData().then((chartDataResponse) => {
      setChartData({ ...chartDataResponse });
    });
    getBarChartData().then((barChartDataResponse) => {
      setBarChartData({ ...barChartDataResponse });
    });
    getAreaChartData().then((areaChartResponseData) => {
      setAreaChartData({ ...areaChartResponseData });
    });

    getDoughnutData().then((doughnutResponseData) => {
      setdougnutData({ ...doughnutResponseData });
    });

    getSevenDayData().then((lineChartDataResponse) => {
      setLineChartdata({ ...lineChartDataResponse });
    });
  }, []);

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
              <Route
                path="/"
                element={
                  <DashboardContent
                    pieChartData={chartData}
                    barChartData={barChartData}
                    areaChartData={areaChartData}
                    doughnutData={doughnutData}
                    lineChartData={lineChartData}
                    options={chartDataOptions}
                  />
                }
              />
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
