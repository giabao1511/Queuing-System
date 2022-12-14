import { CaretRightOutlined } from "@ant-design/icons";
import { DatePicker, Select } from "antd";
import Search from "antd/lib/input/Search";
import { ISelectBox } from "./interface";
import "./style.scss";

const SelectBox = (props: ISelectBox) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => console.log(value);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const statusOpts = [
    {
      value: "all",
      label: "Tất cả",
    },
    {
      value: "active",
      label: "Đang hoạt động",
    },
    {
      value: "inactive",
      label: "Không hoạt động",
    },
  ];

  const connectOpts = [
    {
      value: "all",
      label: "Tất cả",
    },

    {
      value: "connect",
      label: "Kết nối",
    },
    {
      value: "disconnect",
      label: "Mất kết nối",
    },
  ];

  const statusSeviceOpts = [
    {
      value: "all",
      label: "Tất cả",
    },

    {
      value: "done",
      label: "Đã hoàn thành",
    },
    {
      value: "doing",
      label: "Đang thực hiện",
    },
    {
      value: "absent",
      label: "Vắng",
    },
  ];

  const serviceOpts = [
    {
      value: "all",
      label: "Tất cả",
    },
    {
      value: "Khám tim mạch",
      label: "Khám tim mạch",
    },
  ];

  const statusProvide = [
    {
      value: "all",
      label: "Tất cả",
    },
    {
      value: "Đang chờ",
      label: "Đang chờ",
    },
    {
      value: "Đã sử dụng",
      label: "Đã sử dụng",
    },
    {
      value: "Bỏ qua",
      label: "Bỏ qua",
    },
  ];

  const sourceProvide = [
    {
      value: "all",
      label: "Tất cả",
    },
    {
      value: "Kiosk",
      label: "Kiosk",
    },
    {
      value: "Hệ thống",
      label: "Hệ thống",
    },
  ];
  return (
    <>
      <div className="select-box">
        <div className="select-box__left">
          {props.statusActive && (
            <div className="select-box__left__item">
              <div className="select-box__left__item__label">
                Trạng thái hoạt động
              </div>
              <Select
                defaultValue="all"
                style={{ width: 180 }}
                onChange={handleChange}
                options={statusOpts}
              />
            </div>
          )}

          {props.statusService && (
            <div className="select-box__left__item">
              <div className="select-box__left__item__label">Trạng thái</div>
              <Select
                defaultValue="all"
                style={{ width: 180 }}
                onChange={handleChange}
                options={statusSeviceOpts}
              />
            </div>
          )}

          {props.serviceType && (
            <div className="select-box__left__item">
              <div className="select-box__left__item__label">Tên dịch vụ</div>
              <Select
                defaultValue="all"
                style={{ width: 180 }}
                onChange={handleChange}
                options={serviceOpts}
              />
            </div>
          )}

          {props.statusProvide && (
            <div className="select-box__left__item">
              <div className="select-box__left__item__label">Tình trạng</div>
              <Select
                defaultValue="all"
                style={{ width: 180 }}
                onChange={handleChange}
                options={statusProvide}
              />
            </div>
          )}

          {props.sourceProvide && (
            <div className="select-box__left__item">
              <div className="select-box__left__item__label">Nguồn cấp</div>
              <Select
                defaultValue="all"
                style={{ width: 180 }}
                onChange={handleChange}
                options={sourceProvide}
              />
            </div>
          )}

          {props.datePicker && (
            <div className="select-box__left__item">
              <div className="select-box__left__item__label">
                Chọn thời gian
              </div>
              <DatePicker format={dateFormatList} placeholder="01/01/2015" />
              <CaretRightOutlined
                style={{
                  fontSize: "8px",
                  margin: "0px 10px",
                  color: "#535261",
                }}
              />
              <DatePicker format={dateFormatList} placeholder="01/01/2015" />
            </div>
          )}

          {props.statusConnect && (
            <div className="select-box__left__item">
              <div className="select-box__left__item__label">
                Trạng thái kết nối
              </div>
              <Select
                defaultValue="all"
                style={{ width: 180 }}
                onChange={handleChange}
                options={connectOpts}
              />
            </div>
          )}
        </div>
        <div className="select-box__right">
          <div className="select-box__left__item__label">Từ khóa</div>
          <Search
            placeholder="Nhập từ khóa"
            onSearch={onSearch}
            style={{
              width: `${props.searchSize === "small" ? "110px" : "250px"}`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SelectBox;
