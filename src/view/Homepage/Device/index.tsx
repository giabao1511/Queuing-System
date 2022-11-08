import SelectBox from "@shared/components/SelectBox";
import TableLayout from "../components/TableLayout";
import "../style.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hook/reduxHooks";
import { getAllDeviceInitiate } from "../../../redux/actions/ActionDevice";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import SideButton from "@shared/components/SideButton";
import { PlusOutlined } from "@ant-design/icons";

const Device = () => {
  const dispatch = useAppDispatch();
  const devices = useAppSelector((state) => state.device.allDevices);
  const columns = [
    {
      title: "Mã thiết bị",
      dataIndex: "deviceID",
      key: "deviceID",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "IPAddress",
      key: "IPAddress",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "statusActive",
      key: "statusActive",
      render: (status: boolean = true) => (
        <span>
          <Badge status={status ? "success" : "error"} />
          {status ? "Hoạt động" : "Ngưng hoạt động"}
        </span>
      ),
    },
    {
      title: "Trạng thái kết nối",
      dataIndex: "statusConnect",
      key: "statusConnect",
      render: (status: boolean = false) => (
        <span>
          <Badge status={status ? "success" : "error"} />
          {status ? "Kết nối" : "Ngưng kết nối"}
        </span>
      ),
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "status-active",
      key: "status-active",
    },
    {
      title: "",
      key: "id",
      dataIndex: "id",
      render: (id: any) => <Link to={`/device/detail/${id}`}>Chi tiết</Link>,
    },
    {
      title: "",
      key: "id",
      dataIndex: "id",
      render: (id: any) => <Link to={`/device/update/${id}`}>Cập nhật</Link>,
    },
  ];

  useEffect(() => {
    dispatch(getAllDeviceInitiate());
  }, [dispatch]);
  return (
    <>
      <SelectBox statusActive={true} statusConnect={true} />
      <div className="device__content">
        {devices && <TableLayout columns={columns} data={devices} />}
        <SideButton
          route="/device/add"
          icon={<PlusOutlined />}
          textTop="Thêm"
          textBottom="thiết bị"
        />
      </div>
    </>
  );
};

export default Device;
