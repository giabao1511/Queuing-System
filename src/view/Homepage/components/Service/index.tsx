import { PlusOutlined } from "@ant-design/icons";
import { getAllServiceInitiate } from "@redux/actions/ActionService";
import SelectBox from "@shared/components/SelectBox";
import SideButton from "@shared/components/SideButton";
import { useAppDispatch, useAppSelector } from "@shared/hook/reduxHooks";
import { Badge } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TableLayout from "../TableLayout";

const Service = () => {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.service.allServices);

  console.log(services, "sevices");

  const columns = [
    {
      title: "Mã dịch vụ",
      dataIndex: "serviceID",
      key: "serviceID",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
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
      title: "",
      key: "id",
      dataIndex: "id",
      render: (id: any) => (
        <Link
          to={`/service/detail/${id}`}
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
          to={`/service/update/${id}`}
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
    dispatch(getAllServiceInitiate());
  }, [dispatch]);
  return (
    <>
      <SelectBox statusActive={true} datePicker={true} />
      <div className="device__content">
        {services && <TableLayout columns={columns} data={services} />}
        <SideButton
          route="/service/add"
          icon={<PlusOutlined />}
          textTop="Thêm"
          textBottom="dịch vụ"
        />
      </div>
    </>
  );
};

export default Service;
