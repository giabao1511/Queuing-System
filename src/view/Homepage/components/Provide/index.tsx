import { PlusOutlined } from "@ant-design/icons";
import { getAllProvideInitiate } from "@redux/actions/ActionProvide";
import SelectBox from "@shared/components/SelectBox";
import SideButton from "@shared/components/SideButton";
import { useAppDispatch, useAppSelector } from "@shared/hook/reduxHooks";
import { Badge } from "antd";
import moment from "moment";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import TableLayout from "../TableLayout";

const Provide = () => {
  const dispatch = useAppDispatch();
  const provide = useAppSelector((state) => state.provide.allProvide);

  const columns = [
    {
      title: "STT",
      dataIndex: "provideID",
      key: "provideID",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "serviceName",
      key: "serviceName",
    },
    {
      title: "Thời gian cấp",
      dataIndex: "provideTime",
      key: "provideTime",
      render: (data: any = true) => (
        <span>{moment(data.toMillis()).format("HH:mm - DD/MM/YYYY")}</span>
      ),
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "expireTime",
      key: "expireTime",
      render: (data: any = true) => (
        <span>{moment(data.toMillis()).format("HH:mm - DD/MM/YYYY")}</span>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: any = "done") => {
        if (status === "done") {
          return (
            <span>
              <Badge status="default" />
              Đã sử dụng
            </span>
          );
        } else if (status === "doing") {
          return (
            <span>
              <Badge status="processing" />
              Đang chờ
            </span>
          );
        } else {
          return (
            <span>
              <Badge status="error" />
              Bỏ qua
            </span>
          );
        }
      },
    },
    {
      title: "Nguồn cấp",
      dataIndex: "source",
      key: "source",
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
  ];

  useEffect(() => {
    dispatch(getAllProvideInitiate());
  }, [dispatch]);
  return (
    <>
      <SelectBox
        serviceType={true}
        statusProvide={true}
        sourceProvide={true}
        datePicker={true}
      />
      <div className="device__content">
        {provide && <TableLayout columns={columns} data={provide} />}
        {provide &&
          console.log(
            moment(provide[0].provideTime.toMillis()).format(
              "HH:mm - DD/MM/YYYY"
            ),
            "provide"
          )}
        <SideButton
          route="/provide/add"
          icon={<PlusOutlined />}
          textTop="Cấp"
          textBottom="số mới"
        />
      </div>
    </>
  );
};

export default Provide;
