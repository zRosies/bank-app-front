"use client";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";
import { MdOutlineAppBlocking } from "react-icons/md";
import { GrNext } from "react-icons/gr";

import { useState } from "react";
import { UserInfo } from "../utils/types";

interface Message {
  submitting: boolean;
  error: string | null;
  user: UserInfo | null;
}

const Transfer = ({ setReceiverInfo }: { setReceiverInfo: Function }) => {
  const [submitting, isSubmitting] = useState<Message>({
    submitting: false,
    error: "",
    user: null,
  });
  // const [error, setErrorMessage] = useState<string>("");

  async function getUser(e: any) {
    isSubmitting({ submitting: true, error: null, user: null });
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    // console.log(searchValue);
    const db = await fetch(`http://localhost:8080/api/accounts/${searchValue}`);
    const user = await db.json();
    if (!user._id) {
      isSubmitting({
        submitting: false,
        error: "No contact found!",
        user: null,
      });
      return;
    }
    isSubmitting({ submitting: false, error: null, user: user });
  }

  const date = new Date();

  return (
    <>
      <form
        onSubmit={getUser}
        className="absolute animate-up z-40 bg-white w-[400px] translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] p-4 rounded-[6px] gap-3 flex flex-col"
      >
        <h1>Who you want to transfer to?</h1>
        <div className="flex justify-between">
          <label htmlFor="search" className="flex items-center">
            <input
              name="search"
              type="text"
              placeholder="Search for the contact"
              className="border-2 h-8"
            />
          </label>
          <button className="bg-primary text-white rounded-[50%] p-2">
            {/* @ts-ignore */}
            <IoSearch className="h-5 w-5" />
          </button>
        </div>
        {submitting.submitting && (
          <span className="my-12 justify-center items-center flex">
            {" "}
            {/* @ts-ignore */}
            <AiOutlineLoading className="animate-spin h-12 w-12 text-purple-500" />{" "}
          </span>
        )}
        {submitting.error && (
          <>
            <p className="text-red-500 text-center font-bold flex items-center self-center my-6">
              {submitting.error}
              <p className="text-red-500 text-center">
                {/* @ts-ignore */}
                <MdOutlineAppBlocking className="h-7 w-7" />
              </p>
            </p>
          </>
        )}
        {submitting.user && (
          <>
            <p className="text-center font-bold">Transfer to</p>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.9rem]">Name: {submitting.user.name}</p>
                <p className="text-[0.9rem] ">Email: {submitting.user.email}</p>
                <p className="text-[0.9rem] ">
                  Document: **{submitting.user.cpf.toLocaleString().slice(1, 5)}
                  **
                </p>
              </div>

              <GrNext
                /* @ts-ignore */
                className="p-2 rounded-[50%] text-white bg-primary w-[35px] h-[35px] flex items-center justify-center my-6 text-center cursor-pointer"
                /* @ts-ignore */
                onClick={() =>
                  setReceiverInfo({ showPricing: true, receiverInfo: {} })
                }
              />
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default Transfer;
