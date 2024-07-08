"use client";
import { User, UserInfo } from "../utils/types";
import { IoIosArrowForward } from "react-icons/io";
import { IoCardSharp } from "react-icons/io5";
import { TbPigMoney } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import BlackBackground from "../utils/blackback";
import { useState } from "react";
import Transfer from "./transfer";
import TransactionConfirmation from "./transactionConfirmation";
import Price from "./price";

export interface TransactionInfo {
  showReceiverInfo: boolean;
  showPricing: boolean;
  transaction: Transaction;
}

interface Transaction {
  value: number;
  payer_id: string;
  receiver_id: string;
  transaction_type: string;
  date: string;
  status: string;
}
[];

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
  });
  return (
    <>
      <main className="my-12 mx-12">
        <p>Hello, {user.userInfo.name}</p>
        <section>
          <div className="p-5 flex flex-col shadow-md my-3 max-w-[400px] gap-5">
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
          <div className="p-5 flex flex-col shadow-md my-3 max-w-[400px] gap-5">
            <p className="text-[0.8rem]">Last Transactions</p>
            <h1 className="font-semibold text-[0.9rem]">Transactions</h1>
            <div className="flex justify-between">
              <div></div>
              <div>
                <p>
                  Earned <span></span>
                </p>
                <p>
                  Spent <span></span>
                </p>
                <p>
                  Balance <span></span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <BlackBackground setDisplay={setTransfer} display={transfer}>
          {!transactionInfo.showPricing && (
            <Transfer setReceiverInfo={setTransactionInfo} />
          )}
          {transactionInfo.showPricing && (
            <Price
              setTransactionInfo={setTransactionInfo}
              transactionInfo={transactionInfo}
            />
          )}
          {transactionInfo.showReceiverInfo && (
            <>
              <TransactionConfirmation
                setReceiverInfo={setTransactionInfo}
                receiverInfo={user.userInfo}
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
