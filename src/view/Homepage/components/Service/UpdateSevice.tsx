import {
  getDetailServiceInitiate,
  updateServiceInitiate,
} from "@redux/actions/ActionService";
import { useAppDispatch, useAppSelector } from "@shared/hook/reduxHooks";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSevice = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const detailService = useAppSelector((state) => state.service.detailService);

  const onFinish = (values: any) => {
    dispatch(updateServiceInitiate({ id, ...values }));
    navigate("/service");
  };

  useEffect(() => {
    dispatch(getDetailServiceInitiate(id));
  }, [dispatch, id]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    form.setFieldsValue({
      serviceID: detailService?.serviceID,
      name: detailService?.name,
      description: detailService?.description,
      min: detailService?.min,
      max: detailService?.max,
      prefix: detailService?.prefix,
      surfix: detailService?.surfix,
      isReset: detailService?.isReset,
    });
  }, [detailService, form]);

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
      form={form}
    >
      <div className="form__input">
        <div className="form__title">Thông tin dịch vụ</div>
        <Row>
          <Col span={12} style={{ paddingRight: "16px" }}>
            <Form.Item
              label="Mã dịch vụ"
              name="serviceID"
              rules={[{ required: true, message: "Mời nhập mã dịch vụ!" }]}
            >
              <Input placeholder="Nhập mã thiết bị" />
            </Form.Item>

            <Form.Item
              label="Tên dịch vụ"
              name="name"
              rules={[{ required: true, message: "Mời nhập tên dịch vụ!" }]}
            >
              <Input placeholder="Nhập tên dịch vụ" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Mô tả"
              name="description"
              rules={[{ required: true, message: "Mời nhập mô tả!" }]}
            >
              <TextArea rows={5} placeholder="Nhập mô tả" />
            </Form.Item>
          </Col>
        </Row>

        <div className="form__title">Quy tắc cấp số</div>

        <Form.Item name="range" valuePropName="checked">
          <Checkbox>
            Tăng tự động từ
            <Form.Item
              name="min"
              style={{
                display: "inline-block",
                margin: "0 10px",
                position: "relative",
                bottom: "5px",
              }}
            >
              <Input style={{ width: "80px" }} />
            </Form.Item>
            đến
            <Form.Item
              name="max"
              style={{
                display: "inline-block",
                marginLeft: "10px",
                position: "relative",
                bottom: "5px",
              }}
            >
              <Input style={{ width: "80px" }} />
            </Form.Item>
          </Checkbox>
        </Form.Item>

        <Form.Item
          name="prefixCheck"
          valuePropName="checked"
          style={{ marginTop: "-40px" }}
        >
          <Checkbox>
            Prefix
            <Form.Item
              name="prefix"
              style={{
                display: "inline-block",
                margin: "0 10px",
                position: "relative",
                bottom: "5px",
              }}
            >
              <Input style={{ width: "80px" }} />
            </Form.Item>
          </Checkbox>
        </Form.Item>

        <Form.Item
          name="surfixCheck"
          valuePropName="checked"
          style={{ marginTop: "-15px" }}
        >
          <Checkbox>
            Surfix
            <Form.Item
              name="surfix"
              style={{
                display: "inline-block",
                margin: "0 10px",
                position: "relative",
                bottom: "5px",
              }}
            >
              <Input style={{ width: "80px" }} />
            </Form.Item>
          </Checkbox>
        </Form.Item>

        <Form.Item
          name="isReset"
          valuePropName="checked"
          style={{ marginTop: "-25px" }}
        >
          <Checkbox>Reset mỗi ngày</Checkbox>
        </Form.Item>

        <div className="form__notice" style={{ paddingBottom: "20px" }}>
          <span style={{ color: "red" }}>*</span>
          Là trường thông tin bắt buộc
        </div>
      </div>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className="cancel-btn" onClick={() => navigate("/service")}>
          Hủy bỏ
        </Button>
        <Button type="primary" htmlType="submit">
          Thêm thiết bị
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateSevice;
