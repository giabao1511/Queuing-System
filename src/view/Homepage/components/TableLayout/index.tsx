import { Breadcrumb } from "antd";
import React from "react";

const TableLayout = () => {
  return (
    <div className="table-layout">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>

      <div className="table-layout__title">Danh sách thiết bị</div>
      <div className="table-layout__content">
        
      </div>
    </div>
  );
};

export default TableLayout;
