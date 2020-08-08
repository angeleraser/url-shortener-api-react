import React from "react";
import "../../css/Main/AdvancedStatistic.css";
import StatisticCard from "./StatisticCard";
import { statistics } from "../../data";

const AdvancedStatistic = () => {
  return (
    <section className="flex-col items-center advanced-statistic flex w-full">
      <h1 className="w-full font-bold text-center">Advanced Statistics</h1>
      <p className="font-medium text-lg text-center w-full">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="cards-wrapper grid w-full relative">
        {statistics.map((info) => (
          <StatisticCard {...info} key={info.title} />
        ))}
        <div className="bg-line absolute"></div>
      </div>
    </section>
  );
};

export default AdvancedStatistic;
