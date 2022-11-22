import { CameraOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row } from "antd";
import { useEffect } from "react";
import avatar from "../../../../shared/assets/images/avatar.jpg";

const AccountInfo = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: "Gia Bao",
      tel: "0339253073",
      email: "giabao@gmail.com",
      loginName: "giabao",
      password: "giabao",
      role: "Kế toán",
    });
  }, [form]);
  return (
    <Row className="info">
      <Col span={5} className="info__avatar">
        <div className="info__avatar__img">
          <img src={avatar} alt="" />
          <span className="info__avatar__img__icon">
            <CameraOutlined />
          </span>
        </div>
        <div className="info__avatar__name">Châu Gia Bảo</div>
      </Col>

      <Col span={10} style={{ paddingRight: "30px" }}>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          autoComplete="off"
          disabled={true}
          form={form}
        >
          <Form.Item label="Tên người dùng" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="Số điện thoại" name="tel">
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
        </Form>
      </Col>

      <Col span={9}>
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          autoComplete="off"
          disabled={true}
          form={form}
        >
          <Form.Item label="Tên đăng nhập" name="loginName">
            <Input />
          </Form.Item>

          <Form.Item label="Mật khẩu" name="password">
            <Input />
          </Form.Item>

          <Form.Item label="Vai trò" name="role">
            <Input />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default AccountInfo;
