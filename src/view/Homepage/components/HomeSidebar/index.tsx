import { LogoutOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";
import logo from "../../../../shared/assets/images/logo.png";
import { ISideBar } from "./interface";

const HomeSideBar = ({
  tabItems,
  childrenComponent,
  setChildrenComponent,
}: ISideBar) => {
  return (
    <Col span={3} className="homepage__sidebar">
      <div className="homepage__sidebar__img">
        <img src={logo} alt="" />
      </div>
      <div className="homepage__sidebar__tab">
        {tabItems.map((item) => (
          <div
            className={`homepage__sidebar__tab__item ${
              item.key === childrenComponent.key && "active"
            }`}
            key={item.key}
            onClick={() => setChildrenComponent(item)}
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
  );
};

export default HomeSideBar;
