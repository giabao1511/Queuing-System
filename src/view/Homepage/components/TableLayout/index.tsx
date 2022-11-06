import { Badge, Table } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

const TableLayout = () => {
  const dataSource = [
    {
      key: "1",
      id: "KIO_01",
      name: "Kiosk",
      address: "102.168.1.10",
      statusActive: false,
      statusConnect: true,
      adasdadress: "10 Downing Street",
    },
    {
      key: "2",
      id: "KIO_01",
      name: "Kiosk",
      address: "102.168.1.10",
      statusActive: true,
      statusConnect: true,
      adasdadress: "10 Downing Street",
    },
    {
      key: "3",
      id: "KIO_01",
      name: "Kiosk",
      address: "102.168.1.10",
      statusActive: false,
      statusConnect: false,
      adasdadress: "10 Downing Street",
    },
    {
      key: "4",
      id: "KIO_01",
      name: "Kiosk",
      address: "102.168.1.10",
      statusActive: true,
      statusConnect: true,
      adasdadress: "10 Downing Street",
    },
    {
      key: "5",
      id: "KIO_01",
      name: "Kiosk",
      address: "102.168.1.10",
      statusActive: false,
      statusConnect: true,
      adasdadress: "10 Downing Street",
    },
    {
      key: "6",
      id: "KIO_01",
      name: "Kiosk",
      address: "102.168.1.10",
      statusActive: false,
      statusConnect: true,
      adasdadress: "10 Downing Street",
    },
    {
      key: "7",
      id: "KIO_01",
      name: "Kiosk",
      address: "102.168.1.10",
      statusActive: true,
      statusConnect: true,
      adasdadress: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Mã thiết bị",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "statusActive",
      key: "statusActive",
      render: (status: boolean) => (
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
      render: (status: boolean) => (
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

  return (
    <Table
      bordered
      dataSource={dataSource}
      columns={columns}
      className="table-layout"
    />
  );
};

export default TableLayout;
