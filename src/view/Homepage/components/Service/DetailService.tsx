import { EditFilled } from "@ant-design/icons";
import SelectBox from "@shared/components/SelectBox";
import SideButton from "@shared/components/SideButton";
import { Badge, Col, Form, Input, Row } from "antd";
import TableLayout from "../TableLayout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hook/reduxHooks";
import { getDetailServiceInitiate } from "@redux/actions/ActionService";
import { useParams } from "react-router-dom";

const DetailService = () => {
  const [form] = Form.useForm();
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const detailService = useAppSelector((state) => state.service.detailService);

  const mockData = [
    {
      order: "201001",
      status: "done",
    },
    {
      order: "201002",
      status: "doing",
    },
    {
      order: "201003",
      status: "absent",
    },
    {
      order: "201004",
      status: "doing",
    },
    {
      order: "201005",
      status: "done",
    },
  ];

  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: any) => {
        if (status === "done") {
          return (
            <span>
              <Badge status="success" />
              Đã hoàn thành
            </span>
          );
        } else if (status === "doing") {
          return (
            <span>
              <Badge status="processing" />
              Đang thực hiện
            </span>
          );
        } else {
          return (
            <span>
              <Badge status="error" />
              Vắng
            </span>
          );
        }
      },
    },
  ];

  useEffect(() => {
    dispatch(getDetailServiceInitiate(id));
  }, [dispatch, id]);

  useEffect(() => {
    form.setFieldsValue({
      min: detailService?.min,
      max: detailService?.max,
      prefix: detailService?.prefix,
      surfix: detailService?.surfix,
    });
  }, [detailService, form]);

  return (
    <>
      <SideButton
        icon={<EditFilled />}
        route={`/service/update/${detailService?.id}`}
        textTop="Cập nhật"
        textBottom="danh sách"
      />
      <Row style={{ height: "77vh" }}>
        <Col span={7} className="form__input">
          <div className="form__title">Thông tin dịch vụ</div>
          <div>
            <span className="detail__title">Mã dịch vụ: </span>
            <span className="detail__content">{detailService?.serviceID}</span>
          </div>
          <div>
            <span className="detail__title">Tên dịch vụ: </span>
            <span className="detail__content">{detailService?.name}</span>
          </div>
          <div>
            <span className="detail__title">Mô tả: </span>
            <span className="detail__content">
              {detailService?.description}
            </span>
          </div>

          <Form form={form}>
            <div className="form__title" style={{ marginTop: 20 }}>
              Quy tắc dịch vụ
            </div>
            <span className="detail__title">Tăng tự động: </span>
            <Form.Item
              name="min"
              style={{
                display: "inline-block",
                margin: "0 10px",
                position: "relative",
                bottom: "5px",
              }}
            >
              <Input disabled style={{ width: "80px" }} />
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
              <Input disabled style={{ width: "80px" }} />
            </Form.Item>
            <div>
              <span className="detail__title">Prefix: </span>
              <Form.Item
                name="prefix"
                style={{
                  display: "inline-block",
                  margin: "0 10px",
                  position: "relative",
                  bottom: "5px",
                }}
              >
                <Input disabled style={{ width: "80px" }} />
              </Form.Item>
            </div>
          </Form>

          <div style={{ marginTop: 10 }}>
            <div className="detail__title">Reset mỗi ngày</div>
            <div>Ví dụ: 201-2001</div>
          </div>
        </Col>

        <Col span={16}>
          <div className="form__input" style={{ marginRight: 110 }}>
            <SelectBox
              statusService={true}
              datePicker={true}
              searchSize="small"
            />

            <TableLayout columns={columns} data={mockData} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DetailService;
