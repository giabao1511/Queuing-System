import "./style.scss";
import { Breadcrumb, Button, Col, Row } from "antd";
import React, { PropsWithChildren } from "react";
import { BellFilled, LogoutOutlined } from "@ant-design/icons";
import avatar from "../../../../shared/assets/images/avatar.jpg";
import logo from "../../../../shared/assets/images/logo.png";
import { tabItems } from "@shared/data/sideBarData";
import { useState } from "react";
import { IChildrenSidebar } from "@view/Homepage/interface";
import { useNavigate } from "react-router-dom";

const HomepageLayout: React.FC<PropsWithChildren<any>> = (props) => {
  const navigate = useNavigate();
  const [childrenComponent, setChildrenComponent] = useState<IChildrenSidebar>(
    tabItems[0]
  );

  const changeTabSidebar = (item: IChildrenSidebar) => (e: any) => {
    console.log(item);
    setChildrenComponent(item);
    navigate(item.route);
  };

  return (
    <Row className="homepage">
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
              onClick={changeTabSidebar(item)}
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
        <div className="home-layout">
          <Breadcrumb>
            <Breadcrumb.Item className="home-layout__breadcrumb">
              Dashboard
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="home-layout__title">Biểu đồ cấp số</div>
          <div className="home-layout__content">{props.children}</div>
          <div className="home-layout__avatar">
            <span className="home-layout__avatar__icon">
              <BellFilled />
            </span>
            <span className="home-layout__avatar__content">
              <span className="home-layout__avatar__content__img">
                <img src={avatar} alt="" />
              </span>
              <span className="home-layout__avatar__content__name">
                Châu Gia Bảo
              </span>
            </span>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HomepageLayout;
