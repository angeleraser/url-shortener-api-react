import React from "react";
import "../../css/Main/StatisticCard.css";
const StatisticCard = ({ title, description, icon }) => {
  return (
    <article className="flex relative text-center flex-col card items-center">
      <div className="icon relative rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h2 className="font-bold w-full">{title}</h2>
      <p className="font-medium">{description}</p>
    </article>
  );
};

export default StatisticCard;
