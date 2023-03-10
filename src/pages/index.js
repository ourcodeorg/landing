import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { clsx } from "clsx";
import data from "../data/Features";
import FeatureCard from "@/components/FeatureCard";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ourcode</title>
        <meta
          name="description"
          content="A place for you to find partners for personal projects, hackathons or research"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={clsx(
          "lg:h-screen h-fit w-full flex flex-col items-center justify-center py-3",
          styles.heroDiv
        )}
      >
        <div className="w-[70%] text-center flex justify-center items-center flex-col mt-10">
          <h1 className="text-7xl text-gray-200 font-bold my-3">
            Welcome to <span className={styles.brandName}>OurCode</span>
          </h1>
          <p className="text-lg text-gray-400 text-center lg:w-1/2 md:w-full">
            A place for you to find partners for personal projects, hackathons
            or research
          </p>
          <button className="px-4 py-2 rounded-lg my-3 hover:scale-110 transition-all duration-150 ease-in-out font-semibold text-gray-300 bg-slate-900 border border-gray-600">
            Coming Soon
          </button>
        </div>
        {/* Feature section */}
        <div className="mt-10 flex flex-col justify-center items-center w-[75%]">
          <h1 className="text-4xl text-gray-300 font-semibold my-5">
            Features
          </h1>
          <div className="flex w-full py-2 px-3 lg:justify-between flex-wrap justify-center">
            {data.map((e, idx) => {
              return (
                <FeatureCard
                  icon={e.icon}
                  key={idx}
                  title={e.title}
                  description={e.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
