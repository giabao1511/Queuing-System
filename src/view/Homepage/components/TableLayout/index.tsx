import { Badge, Table } from "antd";
import { Link } from "react-router-dom";
import "./style.scss";

type ITable = {
  columns: {
    title?: string;
    dataIndex?: string;
    key?: string;
    render?: (status?: boolean) => React.ReactNode;
  }[];

  data: any;
};

const TableLayout = (props: ITable) => {
  console.log(props.columns, props.data);

  return (
    <Table
      bordered
      dataSource={props.data}
      columns={props.columns}
      className="table-layout"
    />
  );
};

export default TableLayout;
