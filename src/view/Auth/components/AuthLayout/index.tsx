import "../../style.scss";
import { Col, Row } from "antd";
import React, { PropsWithChildren } from "react";
import logo from "../../../../shared/assets/images/logo.png";
import authImg from "../../../../shared/assets/images/auth-img.png";

const AuthLayout: React.FC<PropsWithChildren<any>> = (props) => {
  console.log("hello");

  return (
    <>
      <Row className="auth-page">
        <Col span={8} className="auth-page__left">
          <div className="auth-page__left__img">
            <img src={logo} alt="" />
          </div>
          {props.children}
        </Col>
        <Col span={16} className="auth-page__right">
          <div className="auth-page__right__img">
            <img src={authImg} alt="" />
          </div>
          <div className="auth-page__right__content color-orange">
            <div>Hệ thống</div>
            <div className="title">Quản lý xếp hàng</div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(AuthLayout);
