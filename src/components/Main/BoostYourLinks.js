import React from "react";
import BaseButton  from "../../components/BaseComponents/BaseButton";
import "../../css/Main/BoostYourLinks.css";
const BoostYourLinks = () => {
  return (
    <section className="flex-col items-center relative flex w-full boost-your-links">
      <h1 className="w-full font-bold text-center">Boost your links today</h1>
      <BaseButton label='Get Started'/>
      <div className="bg-pattern w-full bg-center bg-no-repeat bg-cover bottom-0 h-full absolute"></div>
    </section>
  );
};

export default BoostYourLinks;
