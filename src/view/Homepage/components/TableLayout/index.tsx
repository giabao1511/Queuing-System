import { Badge, Table } from "antd";
import "./style.scss";

const TableLayout = () => {
  const dataSource = [
    {
      key: "1",
      id: "KIO_01",
      name: "Kiosk",
      address: "102.168.1.10",
      sad: "10 Downing Street",
      addasdasress: "10 Downing Street",
      adasdadress: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
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
      key: "status-active",
      render: () => (
        <span>
          <Badge status="error" />
          Hoạt động
        </span>
      ),
    },
    {
      title: "Trạng thái kết nối",
      key: "status-active",
      render: () => (
        <span>
          <Badge status="success" />
          Hoạt động
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
      dataIndex: "detail",
      key: "detail",
    },
    {
      title: "",
      dataIndex: "detail",
      key: "detail",
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
