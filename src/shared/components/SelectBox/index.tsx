import { PlusOutlined } from "@ant-design/icons";
import { Select } from "antd";
import Search from "antd/lib/input/Search";
import "./style.scss";
import { ISelectBox } from "./interface";

const SelectBox = (props: ISelectBox) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => console.log(value);

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
                style={{ width: 200 }}
                onChange={handleChange}
                options={statusOpts}
              />
            </div>
          )}

          {props.statusConnect && (
            <div className="select-box__left__item">
              <div className="select-box__left__item__label">
                Trạng thái kết nối
              </div>
              <Select
                defaultValue="all"
                style={{ width: 200 }}
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
            style={{ width: 250 }}
          />
        </div>
      </div>
      <div className="select-box__add">
        <div className="select-box__add__icon">
          <PlusOutlined />
        </div>
        <div className="select-box__add__title">
          <div>Thêm</div>
          <div>thiết bị</div>
        </div>
      </div>
    </>
  );
};

export default SelectBox;
