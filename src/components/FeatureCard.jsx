import React from "react";
import styles from "@/styles/Home.module.css";
import clsx from "clsx";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      className={clsx(
        "p-3 flex flex-col text-indigo-500/70 lg:my-0 my-2 justify-center items-center lg:w-[30%] w-full",
        styles.featureCard
      )}
    >
      {icon}
      <p className="text-gray-200 text-2xl font-semibold my-3 ">{title}</p>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
