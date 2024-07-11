"use client";
import { GrNext } from "react-icons/gr";
import { UserInfo } from "../utils/types";
import { TransactionInfo } from "./page";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

interface SubmitMessage {
  submitting: boolean;
  error: string | null;
  successMessage?: boolean | null;
}

const TransactionConfirmation = ({
  transactionInfo,
  setTransfer,
  setReceiverInfo,
}: {
  transactionInfo: TransactionInfo;
  setTransfer: Function;
  setReceiverInfo: Function;
}) => {
  const [submit, setSubmitting] = useState<SubmitMessage>({
    submitting: false,
    error: null,
  });

  // console.log(transactionInfo);

  const date = new Date();
  async function Transaction(e: any) {
    e.preventDefault();
    setSubmitting({ submitting: true, error: null });
    // Your code to send the transaction to the server
    // Use the user's information to make the API call
    // Set the state to indicate the transaction is being submitted

    // Success

    const response: any = await fetch(
      "http://localhost:8080/api/transactions",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionInfo.transaction),
      }
    );

    const data = await response.json();

    if (data.error) {
      setSubmitting({ submitting: false, error: data.error });
      return;
    }
    // console.log(response);
    setSubmitting({
      submitting: false,
      error: data.error,
      successMessage: true,
    });

    // setReceiverInfo({
    //   showReceiverInfo: false,
    //   receiverInfo: {
    //     user_id: "",
    //     name: "",
    //     cpf: 0,
    //     email: "",
    //     password: "",
    //     store_owner: false,
    //   },
    // });
  }

  // console.log(transactionInfo);

  return (
    <>
      <form
        onSubmit={Transaction}
        className="absolute z-40 animate-left bg-white w-[360px] md:w-[400px] translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] p-4 rounded-[6px] gap-3 flex flex-col"
      >
        <p
          className="text-red-500 flex items-center hover:scale-105 duration-200 cursor-pointer"
          onClick={() =>
            setReceiverInfo({
              ...transactionInfo,
              showReceiverInfo: false,
              showPricing: true,
            })
          }
        >
          <IoIosArrowBack /> Return
        </p>
        <div className="flex flex-col gap-5 my-6">
          <p className="text-center font-bold">Confirm the transaction</p>
          <p className=" border-b border-gray-300 flex">
            Name: {transactionInfo.receiverInfo.name}
          </p>
          <p className=" border-b border-gray-300">
            Email: {transactionInfo.receiverInfo.email}
          </p>
          <p className=" border-b border-gray-300">
            Document: **
            {transactionInfo.receiverInfo.cpf.toLocaleString().slice(1, 5)}**
          </p>
          <p className=" border-b border-gray-300">
            Date: {date.toLocaleDateString()}
          </p>
          <p>Value: ${transactionInfo.transaction.value}</p>
        </div>
        {submit.error && <p className="text-red-500">{submit.error}</p>}
        {submit.successMessage ? (
          <div className="my-3">
            <p className="text-center">Transaction made successfuly</p>
            <p
              className="p-3 rounded-[8px] text-white bg-green-600 hover:bg-green-400 duration-200 flex items-center justify-center  text-center"
              onClick={() => {
                setTransfer(false);
                window.location.reload();
              }}
            >
              Thanks!
              {submit.submitting && (
                /* @ts-ignore */
                <AiOutlineLoading className="animate-loading text-white h-5 w-5" />
              )}
            </p>
          </div>
        ) : (
          <button className="p-3 rounded-[8px] text-white bg-primary hover:bg-purple-500 duration-200 flex items-center justify-center  text-center">
            Confirm
          </button>
        )}
      </form>
    </>
  );
};

export default TransactionConfirmation;
