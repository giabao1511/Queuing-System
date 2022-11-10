import SelectBox from "@shared/components/SelectBox";
import TableLayout from "../components/TableLayout";
import "../style.scss";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@shared/hook/reduxHooks";
import { getAllDeviceInitiate } from "../../../redux/actions/ActionDevice";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import SideButton from "@shared/components/SideButton";
import { PlusOutlined } from "@ant-design/icons";
import { truncateText } from "@shared/helper/functions";

const Device = () => {
  // const [openService, setOpenService] = useState(false);

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
      dataIndex: "service",
      key: "service",
      render: (list: any) => (
        <>
          {/* {openService ? (
            <>
              <span
                style={{
                  position: "absolute",
                  width: "350px",
                  backgroundColor: "#fff",
                  border: "1px solid #FFC89B",
                  borderRadius: "8px",
                  padding: "4px 8px",
                  height: "100%",
                  zIndex: 1000,
                  top: "0px",
                }}
              >
                {list.join(", ")}
              </span>
            </>
          ) : (
            <> */}
          <span>{truncateText(list.join(", "), 20)}</span>,,
          {/* </>
          )} */}
          <div
            style={{
              textDecoration: "underline",
              color: "#4277FF",
              cursor: "pointer",
            }}
            // onClick={() => setOpenService(true)}
          >
            Xem thêm
          </div>
        </>
      ),
    },
    {
      title: "",
      key: "id",
      dataIndex: "id",
      render: (id: any) => (
        <Link
          to={`/device/detail/${id}`}
          style={{
            textDecoration: "underline",
            color: "#4277FF",
            cursor: "pointer",
          }}
        >
          Chi tiết
        </Link>
      ),
    },
    {
      title: "",
      key: "id",
      dataIndex: "id",
      render: (id: any) => (
        <Link
          to={`/device/update/${id}`}
          style={{
            textDecoration: "underline",
            color: "#4277FF",
            cursor: "pointer",
          }}
        >
          Cập nhật
        </Link>
      ),
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
