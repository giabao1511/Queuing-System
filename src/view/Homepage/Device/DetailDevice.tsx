import { EditFilled } from "@ant-design/icons";
import SideButton from "@shared/components/SideButton";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import "./style.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hook/reduxHooks";
import { getDetailDeviceInitiate } from "@redux/actions/ActionDevice";

const DetailDevice = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const detailDevice = useAppSelector((state) => state.device.detailDevice);

  useEffect(() => {
    dispatch(getDetailDeviceInitiate(id));
  }, [dispatch, id]);

  return (
    <div className="detail-page">
      {detailDevice && (
        <div className="detail">
          <div className="form__title">Thông tin thiết bị</div>
          <Row>
            <Col span={12}>
              <Row>
                <Col span={7}>
                  <span className="detail__title">Mã thiết bị: </span>
                </Col>

                <Col span={5}>
                  <span className="detail__content">
                    {detailDevice.deviceID}
                  </span>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row>
                <Col span={7}>
                  <span className="detail__title">Loại thiết bị: </span>
                </Col>

                <Col span={5}>
                  <span className="detail__content">{detailDevice.type}</span>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row>
                <Col span={7}>
                  <span className="detail__title">Tên thiết bị: </span>
                </Col>

                <Col span={5}>
                  <span className="detail__content">{detailDevice.name}</span>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row>
                <Col span={7}>
                  <span className="detail__title">Tên đăng nhập: </span>
                </Col>

                <Col span={5}>
                  <span className="detail__content">
                    {detailDevice.username}
                  </span>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row>
                <Col span={7}>
                  <span className="detail__title">Địa chỉ IP: </span>
                </Col>

                <Col span={5}>
                  <span className="detail__content">
                    {detailDevice.IPAddress}
                  </span>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row>
                <Col span={7}>
                  <span className="detail__title">Mật khẩu: </span>
                </Col>

                <Col span={5}>
                  <span className="detail__content">
                    {detailDevice.password}
                  </span>
                </Col>
              </Row>
            </Col>

            <Col span={24}>
              <div className="detail__title">Dịch vụ sử dụng: </div>
              <div className="detail__content">
                {detailDevice.service.join(", ")}
              </div>
            </Col>
          </Row>
        </div>
      )}

      <SideButton
        icon={<EditFilled />}
        route="/device/update"
        textTop="Cập nhật"
        textBottom="thiết bị"
      />
    </div>
  );
};

export default DetailDevice;
