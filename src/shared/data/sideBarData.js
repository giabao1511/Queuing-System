import {
  AppstoreOutlined,
  BarChartOutlined,
  LaptopOutlined,
  MessageOutlined,
  ReadOutlined,
  SettingOutlined
} from "@ant-design/icons";


export const tabItems = [
  {
    label: (
      <>
        <AppstoreOutlined /> Dashboard
      </>
    ),
    key: 1,
    route: "/dashboard",
  },
  {
    label: (
      <>
        <LaptopOutlined /> Thiết bị
      </>
    ),
    key: 2,
    route: "/device",
  },
  {
    label: (
      <>
        <MessageOutlined /> Dịch vụ
      </>
    ),
    key: 3,
    route: "/home",
  },
  {
    label: (
      <>
        <ReadOutlined /> Cấp số
      </>
    ),
    key: 4,
    route: "/home",
  },
  {
    label: (
      <>
        <BarChartOutlined /> Báo cáo
      </>
    ),
    key: 5,
    route: "/home",
  },
  {
    label: (
      <>
        <SettingOutlined /> Cài đặt hệ thống
      </>
    ),
    key: 6,
    route: "/home",
  },
];
