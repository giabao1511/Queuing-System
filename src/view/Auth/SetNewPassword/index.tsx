import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const SetNewPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="auth-page__title">Đặt lại mật khẩu mới</div>
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Nhập lại mật khẩu"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Vui lòng nhập lại mật khẩu!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu nhập lại không khớp!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="bg-orange">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SetNewPassword;
