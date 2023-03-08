import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { clsx } from "clsx";
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
          "w-screen h-screen flex flex-col justify-center items-center",
          styles.heroDiv
        )}
      >
        <div className="w-[70%] text-center flex justify-center items-center flex-col">
          <h1 className="text-7xl text-gray-200 font-bold my-3">
            Welcome to <span className={styles.brandName}>OurCode</span>
          </h1>
          <p className="text-lg text-gray-400 text-center w-1/2">
            A place for you to find partners for personal projects, hackathons
            or research
          </p>
          <button className="px-4 py-2 rounded-lg my-3 hover:scale-110 transition-all duration-150 ease-in-out font-semibold text-gray-300 bg-slate-900 border border-gray-600">
            Coming Soon
          </button>
        </div>
      </div>
    </>
  );
}
