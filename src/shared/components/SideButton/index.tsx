import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style.scss";

type ISideButton = {
  icon: React.ReactNode;
  textTop: string;
  textBottom: string;
  route: string;
};

const SideButton = (props: ISideButton) => {
  return (
    <Link to={props.route}>
      <div className="side-button">
        <div className="side-button__icon">{props.icon}</div>
        <div className="side-button__title">
          <div>{props.textTop}</div>
          <div>{props.textBottom}</div>
        </div>
      </div>
    </Link>
  );
};

export default SideButton;
