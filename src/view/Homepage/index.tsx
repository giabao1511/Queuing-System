import { tabItems } from "@shared/data/sideBarData";
import { useState } from "react";
import HomepageLayout from "./components/HomepageLayout";
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
