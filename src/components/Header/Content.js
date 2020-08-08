import React from "react";
import "../../css/Header/Content.css";
import BaseButton from "../BaseComponents/BaseButton";
export const Content = () => {
  return (
    <section className="flex overflow-hidden header-content flex-col items-center w-full">
      <img
        className="relative w-full inline-block"
        src="../images/illustration-working.svg"
        alt="illustration"
      />
      <article className="flex-col text-center flex items-center">
        <h1 className="font-bold">More than just shorter links</h1>
        <p className="">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <BaseButton label="Get Started" classes={"get-started"} />
      </article>
    </section>
  );
};
