import "./style.scss";
import { Breadcrumb } from "antd";
import React, { PropsWithChildren } from "react";
import { BellFilled } from "@ant-design/icons";
import avatar from "../../../../shared/assets/images/avatar.jpg";

const HomepageLayout: React.FC<PropsWithChildren<any>> = (props) => {
  return (
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
  );
};

export default HomepageLayout;
