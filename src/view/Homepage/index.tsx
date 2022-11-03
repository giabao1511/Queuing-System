import {
  AppstoreOutlined,
  BarChartOutlined,
  LaptopOutlined,
  LogoutOutlined,
  MessageOutlined,
  ReadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useState } from "react";
import logo from "../../shared/assets/images/logo.png";
import Dashboard from "./Dashboard/index";
import TableLayout from "./components/TableLayout";
import "./style.scss";
import HomepageLayout from "./components/HomepageLayout";
import Device from "./Device";

const Homepage = () => {
  const [childrenComponent, setChildrenComponent] = useState<
    "" | React.ReactNode
  >(<Dashboard />);

  const tabItems = [
    {
      label: (
        <>
          <AppstoreOutlined /> Dashboard
        </>
      ),
      key: 1,
      children: <Dashboard />,
    },
    {
      label: (
        <>
          <LaptopOutlined /> Thiết bị
        </>
      ),
      key: 2,
      children: <Device />,
    },
    {
      label: (
        <>
          <MessageOutlined /> Dịch vụ
        </>
      ),
      key: 3,
      children: "Content 2",
    },
    {
      label: (
        <>
          <ReadOutlined /> Cấp số
        </>
      ),
      key: 4,
      children: "Content 2",
    },
    {
      label: (
        <>
          <BarChartOutlined /> Báo cáo
        </>
      ),
      key: 5,
      children: "Content 2",
    },
    {
      label: (
        <>
          <SettingOutlined /> Cài đặt hệ thống
        </>
      ),
      key: 6,
      children: "Content 2",
    },
  ];

  console.log(childrenComponent);

  return (
    <Row className="homepage">
      <Col span={3} className="homepage__sidebar">
        <div className="homepage__sidebar__img">
          <img src={logo} alt="" />
        </div>
        <div className="homepage__sidebar__tab">
          {tabItems.map((item) => (
            <div
              className="homepage__sidebar__tab__item"
              key={item.key}
              onClick={() => setChildrenComponent(item.children)}
            >
              <div className="homepage__sidebar__tab__item__label">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button
            type="primary"
            htmlType="submit"
            className="homepage__sidebar__logoutBtn"
          >
            <LogoutOutlined />
            Đăng xuất
          </Button>
        </div>
      </Col>

      <Col span={21} className="homepage__content">
        <HomepageLayout>{childrenComponent}</HomepageLayout>
      </Col>
    </Row>
  );
};

export default Homepage;
