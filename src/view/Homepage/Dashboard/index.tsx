import dashboardIcon_1 from "../../../shared/assets/images/icons/dashboard-icon-1.png";
import dashboardIcon_2 from "../../../shared/assets/images/icons/dashboard-icon-2.png";
import dashboardIcon_3 from "../../../shared/assets/images/icons/dashboard-icon-3.png";
import dashboardIcon_4 from "../../../shared/assets/images/icons/dashboard-icon-4.png";
import Chart from "./Chart";
import DashboardCard from "./DashboardCard";
import "./style.scss";

const Dashboard = () => {
  const cardData = [
    {
      icon: dashboardIcon_1,
      content: "Số thứ tự đã cấp",
      data: 4221,
      trend: true,
      rate: "32,41",
    },
    {
      icon: dashboardIcon_2,
      content: "Số thứ tự đã sử dụng",
      data: 3721,
      trend: false,
      rate: "32,41",
    },
    {
      icon: dashboardIcon_3,
      content: "Số thứ tự đang chờ",
      data: 468,
      trend: false,
      rate: "32,41",
    },
    {
      icon: dashboardIcon_4,
      content: "Số thứ tự đã bỏ qua",
      data: 32,
      trend: false,
      rate: "32,41",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <div className="dashboard-cards">
          {cardData.map((item) => (
            <>
              <DashboardCard
                icon={item.icon}
                content={item.content}
                data={item.data}
                trend={item.trend}
                rate={item.rate}
              />
            </>
          ))}
        </div>
        <div className="dashboard__chart">
          <Chart />
        </div>
      </div>
      <div className="dashboard__background">
        <div className="dashboard__right">
          <div className="dashboard__right__title">Tổng quan</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
