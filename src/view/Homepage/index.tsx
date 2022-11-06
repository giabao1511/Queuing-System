import { tabItems } from "@shared/data/sideBarData";
import { Col, Row } from "antd";
import { useState } from "react";
import HomepageLayout from "./components/HomepageLayout";
import HomeSideBar from "./components/HomeSidebar";
import { IChildrenSidebar } from "./interface";
import "./style.scss";

const Homepage = () => {
  const [childrenComponent, setChildrenComponent] = useState<IChildrenSidebar>(
    tabItems[0]
  );

  console.log(childrenComponent);

  return <HomepageLayout content="" />;
};

export default Homepage;
