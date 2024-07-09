"use client";
import { User, UserInfo } from "../utils/types";
import { IoIosArrowForward } from "react-icons/io";
import { IoCardSharp } from "react-icons/io5";
import { TbPigMoney } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import BlackBackground from "../utils/blackback";
import { useEffect, useState } from "react";
import Transfer from "./transfer";
import TransactionConfirmation from "./transactionConfirmation";
import Price from "./price";
import DashboardTransactions from "./dashboardTransactions";

export interface TransactionInfo {
  showReceiverInfo: boolean;
  showPricing: boolean;
  transaction: Transaction;
  receiverInfo: ReceiverInfo;
}

export interface Transaction {
  value: number;
  payer_id: string;
  receiver_id: string;
  transaction_type: string;
  date: string;
  status: string;
}
[];

interface ReceiverInfo {
  name: string;
  email: string;
  cpf: string;
  user_id: string;
}

const DashboardMain = ({ user }: { user: User }) => {
  const [transfer, setTransfer] = useState<boolean>(false);
  const [transactionInfo, setTransactionInfo] = useState<TransactionInfo>({
    showReceiverInfo: false,
    showPricing: false,
    transaction: {
      value: 0,
      payer_id: "",
      receiver_id: "",
      transaction_type: "",
      date: "",
      status: "",
    },
    receiverInfo: {
      name: "",
      email: "",
      cpf: "",
      user_id: "",
    },
  });

  useEffect(() => {
    setTransactionInfo({
      showReceiverInfo: false,
      showPricing: false,
      transaction: {
        value: 0,
        payer_id: "",
        receiver_id: "",
        transaction_type: "",
        date: "",
        status: "",
      },
      receiverInfo: { name: "", email: "", cpf: "", user_id: "" },
    });
  }, [transfer]);
  return (
    <>
      <main className="md:my-20 mx-2 md:mx-12">
        <p>Hello, {user.userInfo.name}</p>
        <section>
          <div className="p-5 flex flex-col shadow-md my-6 max-w-[400px] gap-5">
            <p>Digital Account</p>
            <p className="font-extrabold flex justify-between items-center">
              R$ {user.balance.balance}
              <span>
                <IoIosArrowForward />
              </span>
            </p>
            <div className="flex gap-5 ">
              <p className="flex items-center py-1 px-3 rounded-md bg-primary text-white gap-2">
                Save
                <TbPigMoney />
              </p>
              <p className="flex items-center py-1 px-3 rounded-md bg-primary text-white gap-2">
                Cards <IoCardSharp />
              </p>
              <p
                className="flex items-center py-1 px-3 rounded-md bg-primary text-white gap-2 cursor-pointer hover:bg-purple-500  duration-300"
                onClick={() => setTransfer(true)}
              >
                Transfer{" "}
                <span>
                  <FaMoneyBillTransfer />
                </span>
              </p>
            </div>
          </div>
          <DashboardTransactions user={user} />
        </section>
        <BlackBackground setDisplay={setTransfer} display={transfer}>
          {!transactionInfo.showPricing && (
            <Transfer setReceiverInfo={setTransactionInfo} />
          )}
          {transactionInfo.showPricing && (
            <Price
              setTransactionInfo={setTransactionInfo}
              transactionInfo={transactionInfo}
              userInfo={user.userInfo}
            />
          )}
          {transactionInfo.showReceiverInfo && (
            <>
              <TransactionConfirmation
                setReceiverInfo={setTransactionInfo}
                setTransfer={setTransfer}
                transactionInfo={transactionInfo}
              />
            </>
          )}
        </BlackBackground>
      </main>
    </>
  );
};

export default DashboardMain;
