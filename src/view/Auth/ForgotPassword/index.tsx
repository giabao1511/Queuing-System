import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate("/new-password");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="auth-page__title">Đặt lại mật khẩu</div>
      <div className="auth-page__description">
        * Vui lòng nhập email để đặt lại mật khẩu của bạn
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Mời nhập email của bạn!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button className="cancel-btn" onClick={() => navigate("/")}>
            Hủy
          </Button>
          <Button type="primary" htmlType="submit">
            Tiếp tục
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ForgotPassword;
