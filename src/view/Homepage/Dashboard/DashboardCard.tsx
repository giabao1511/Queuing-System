import { IDashboardCard } from "../interface";

const DashboardCard = (props: IDashboardCard) => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card__top">
        <img src={props.icon} alt="" />
        <span className="dashboard-card__top__content">{props.content}</span>
      </div>
      <div className="dashboard-card__bottom">
        <span className="dashboard-card__bottom__data">{props.data}</span>
        {props.trend ? (
          <span className="dashboard-card__bottom__rate increase">
            &#x2191; {props.rate}%
          </span>
        ) : (
          <span className="dashboard-card__bottom__rate decrease">
            &#x2193; {props.rate}%
          </span>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
