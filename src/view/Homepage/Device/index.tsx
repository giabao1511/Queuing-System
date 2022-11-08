import SelectBox from "@shared/components/SelectBox";
import TableLayout from "../components/TableLayout";
import "../style.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hook/reduxHooks";
import { getAllDeviceInitiate } from "../../../redux/actions/ActionDevice";
import { Badge } from "antd";
import { Link } from "react-router-dom";

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
      key: "detail",
      render: () => <Link to="/home">Chi tiết</Link>,
    },
    {
      title: "",
      key: "update",
      render: () => <Link to="/home">Cập nhật</Link>,
    },
  ];

  useEffect(() => {
    dispatch(getAllDeviceInitiate());
  }, [dispatch]);

  useEffect(() => {
    console.log(devices);
  }, [devices]);
  return (
    <>
      <SelectBox statusActive={true} statusConnect={true} />
      {devices && <TableLayout columns={columns} data={devices} />}
    </>
  );
};

export default Device;
