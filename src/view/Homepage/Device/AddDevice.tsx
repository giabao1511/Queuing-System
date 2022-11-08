import { useAppDispatch } from "@shared/hook/reduxHooks";
import type { SelectProps } from "antd";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { createDeviceInitiate } from "../../../redux/actions/ActionDevice";
import "./style.scss";

const AddDevice = () => {
  const options: SelectProps["options"] = [
    {
      label: "Khám tim mạch",
      value: "Khám tim mạch",
    },
    {
      label: "Khám sản phụ khoa",
      value: "Khám sản phụ khoa",
    },
    {
      label: "Khám răng hàm mặt",
      value: "Khám răng hàm mặt",
    },
    {
      label: "Khám tai mũi họng",
      value: "Khám tai mũi họng",
    },
    {
      label: "Khám hô hấp",
      value: "Khám hô hấp",
    },
    {
      label: "Khám tổng quát",
      value: "Khám tổng quát",
    },
  ];

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    dispatch(createDeviceInitiate(values));
    navigate("/device");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      className="form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 24 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="form__input">
        <div className="form__title">Thông tin thiết bị</div>
        <Form.Item
          label="Mã thiết bị"
          name="deviceID"
          rules={[{ required: true, message: "Mời nhập mã thiết bị!" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginRight: "10px",
          }}
        >
          <Input placeholder="Nhập mã thiết bị" />
        </Form.Item>

        <Form.Item
          label="Loại thiết bị"
          name="type"
          rules={[{ required: true, message: "Mời nhập mật khẩu!" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
        >
          <Select placeholder="Chọn loại thiết bị" allowClear>
            <Select.Option value="Kiosk">Kiosk</Select.Option>
            <Select.Option value="Display counter">
              Display counter
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Tên thiết bị"
          name="name"
          rules={[{ required: true, message: "Mời nhập tên thiết bị!" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginRight: "10px",
          }}
        >
          <Input placeholder="Nhập tên thiết bị" />
        </Form.Item>

        <Form.Item
          label="Tên đăng nhập"
          name="username"
          rules={[{ required: true, message: "Mời nhập tên đăng nhập!" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
        >
          <Input placeholder="Nhập tài khoản" />
        </Form.Item>

        <Form.Item
          label="Địa chỉ IP"
          name="IPAddress"
          rules={[{ required: true, message: "Mời nhập địa chỉ IP!" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            marginRight: "10px",
          }}
        >
          <Input placeholder="Nhập địa chỉ IP" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Mời nhập mật khẩu!" }]}
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
          }}
        >
          <Input placeholder="Nhập mật khẩu" />
        </Form.Item>

        <Form.Item
          className="form__tags"
          label="Dịch vụ sử dụng"
          name="service"
          rules={[{ required: true, message: "Mời nhập dịch vụ sử dụng!" }]}
        >
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Nhập dịch vụ sử dụng"
            onChange={handleChange}
            options={options}
          />
        </Form.Item>

        <div className="form__notice">
          <span style={{ color: "red" }}>*</span>
          Là trường thông tin bắt buộc
        </div>
      </div>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className="cancel-btn" onClick={() => navigate("/device")}>
          Hủy bỏ
        </Button>
        <Button type="primary" htmlType="submit">
          Thêm thiết bị
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddDevice;
