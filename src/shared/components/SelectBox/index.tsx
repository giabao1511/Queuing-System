import { PlusOutlined } from "@ant-design/icons";
import { Select } from "antd";
import Search from "antd/lib/input/Search";
import "./style.scss";

const SelectBox = () => {
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
    <div className="select-box">
      <div className="select-box__left">
        <span className="select-box__left__item">
          <div className="select-box__left__item__label">
            Trạng thái hoạt động
          </div>
          <Select
            defaultValue="all"
            style={{ width: 200 }}
            onChange={handleChange}
            options={statusOpts}
          />
        </span>
        <span className="select-box__left__item">
          <div className="select-box__left__item__label">
            Trạng thái hoạt động
          </div>
          <Select
            defaultValue="lucy"
            style={{ width: 200 }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "disabled",
                disabled: true,
                label: "Disabled",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </span>
        <span className="select-box__left__item">
          <div className="select-box__left__item__label">
            Trạng thái hoạt động
          </div>
          <Select
            defaultValue="all"
            style={{ width: 200 }}
            onChange={handleChange}
            options={connectOpts}
          />
        </span>
      </div>
      <div className="select-box__right">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
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
    </div>
  );
};

export default SelectBox;
