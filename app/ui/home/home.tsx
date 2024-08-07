"use client";
import Image from "next/image";
import LoginComponent from "./login";
import { useState } from "react";
import Register from "./register";
import { Transaction } from "mongodb";
import { ChartSkelecton, TransactionSkeleton } from "../utils/skelectons";

export default function HomeMain() {
  const [translateXLogin, setTranslateX] = useState<boolean>(false);
  return (
    <>
      <main className="flex flex-col md:flex-row justify-between ">
        <section className="w-full">
          <div className="max-w-[420px] h-[750px] mx-auto relative overflow-hidden">
            <LoginComponent
              setTranslateX={setTranslateX}
              translate={translateXLogin}
            />
            <Register
              setTranslateX={setTranslateX}
              translate={translateXLogin}
            />
          </div>
        </section>
        <section className="w-full flex max-h-[800px]">
          <Image
            src={"/cover.png"}
            width={1920}
            height={500}
            alt="cover"
            className="top-0 w-full h-full object-fill"
          />
        </section>
      </main>
      {/* <ChartSkelecton /> */}
    </>
  );
}
