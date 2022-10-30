import { Button, Col, Row, Tabs } from "antd";
import "./style.scss";
import logo from "../../shared/assets/images/logo.png";
import sidebarIcon_1 from "../../shared/assets/images/icons/sidebar-icon-1.png";
import sidebarIcon_2 from "../../shared/assets/images/icons/sidebar-icon-2.png";
import sidebarIcon_3 from "../../shared/assets/images/icons/sidebar-icon-3.png";
import sidebarIcon_4 from "../../shared/assets/images/icons/sidebar-icon-4.png";
import sidebarIcon_5 from "../../shared/assets/images/icons/sidebar-icon-5.png";
import sidebarIcon_6 from "../../shared/assets/images/icons/sidebar-icon-6.png";
import logoutIcon from "../../shared/assets/images/icons/logout-icon.png";

const Homepage = () => {
  const tabItems = [
    {
      label: (
        <span>
          <img src={sidebarIcon_1} alt="" /> Dashboard
        </span>
      ),
      key: "1",
      children: "Hello",
    }, // remember to pass the key prop
    {
      label: (
        <span>
          <img src={sidebarIcon_2} alt="" /> Thiết bị
        </span>
      ),
      key: "2",
      children: "Content 2",
    },
    {
      label: (
        <span>
          <img src={sidebarIcon_3} alt="" /> Dịch vụ
        </span>
      ),
      key: "3",
      children: "Content 2",
    },
    {
      label: (
        <span>
          <img src={sidebarIcon_4} alt="" /> Cấp số
        </span>
      ),
      key: "4",
      children: "Content 2",
    },
    {
      label: (
        <span>
          <img src={sidebarIcon_5} alt="" /> Báo cáo
        </span>
      ),
      key: "5",
      children: "Content 2",
    },
    {
      label: (
        <span>
          <img src={sidebarIcon_6} alt="" /> Cài đặt hệ thống
        </span>
      ),
      key: "6",
      children: "Content 2",
    },
  ];

  return (
    <Row className="homepage">
      <Col span={3} className="homepage__left">
        <div className="homepage__left__img">
          <img src={logo} alt="" />
        </div>
        <Tabs tabPosition="left" type="card" items={tabItems} />
        <Button
          type="primary"
          htmlType="submit"
          className="homepage__left__logoutBtn"
        >
          <img src={logoutIcon} alt="" />
          Đăng xuất
        </Button>
      </Col>
      <Col offset={14} span={7}>
        1
      </Col>
    </Row>
  );
};

export default Homepage;
