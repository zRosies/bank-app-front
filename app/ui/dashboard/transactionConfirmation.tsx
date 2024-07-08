"use client";
import { GrNext } from "react-icons/gr";
import { UserInfo } from "../utils/types";
import { TransactionInfo } from "./page";

const TransactionConfirmation = ({
  transactionInfo,
  receiverInfo,
  setReceiverInfo,
}: {
  transactionInfo: TransactionInfo;
  receiverInfo: UserInfo;
  setReceiverInfo: Function;
}) => {
  const date = new Date();

  async function Transaction(e: any) {
    e.preventDefault();
    // Your code to send the transaction to the server
    // Use the user's information to make the API call
    // Set the state to indicate the transaction is being submitted

    // Success
    setReceiverInfo({
      showReceiverInfo: false,
      receiverInfo: {
        user_id: "",
        name: "",
        cpf: 0,
        email: "",
        password: "",
        store_owner: false,
      },
    });
  }

  return (
    <>
      <form className="absolute z-40 bg-white w-[400px] translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] p-4 rounded-[6px] gap-3 flex flex-col">
        <div className="flex flex-col gap-3">
          <p className="text-center font-bold">Confirm the transaction</p>
          <p className=" border-b border-gray-300 flex">
            Name: {receiverInfo.name}
          </p>
          <p className=" border-b border-gray-300">
            Email: {receiverInfo.email}
          </p>
          <p className=" border-b border-gray-300">
            Document: **{receiverInfo.cpf.toLocaleString().slice(1, 5)}**
          </p>
          <p className=" border-b border-gray-300">
            Date: {date.toLocaleDateString()}
          </p>
          <p>Value: ${"2000"}</p>
        </div>
        <button className="p-3 rounded-[8px] text-white bg-primary flex items-center justify-center my-6 text-center">
          Confirm
        </button>
      </form>
    </>
  );
};

export default TransactionConfirmation;
