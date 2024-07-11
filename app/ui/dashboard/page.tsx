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
import { BarChart } from "@mui/x-charts";
import { Box } from "@mui/material";

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

  // const payments = [
  //   { amount: 100, date: "2024-01-15" },
  //   { amount: 200, date: "2024-02-15" },
  //   { amount: 150, date: "2024-02-18" },
  //   // Add more payments for the year...
  // ];

  const transactionReceived = user.transaction
    .filter((transaction) => user.userInfo.user_id == transaction.receiver_id)
    .map((transaction) => {
      return {
        amount: transaction.value,
        date: transaction.date.split("/").reverse().join("-"),
      };
    });

  const transactionSent = user.transaction
    .filter((transaction) => user.userInfo.user_id == transaction.payer_id)
    .map((transaction) => {
      return {
        // @ts-ignore
        amount: parseFloat(transaction.value),
        date: transaction.date.split("/").reverse().join("-"),
      };
    });

  console.log("-------------------------------");
  console.log(transactionSent);
  // Function to aggregate payments by month
  // It creates an array of 12 values separated by commas
  const aggregatePaymentsByMonth = (payments: any) => {
    const months = Array(12).fill(0);
    payments.forEach((payment: any) => {
      const month = new Date(payment.date).getMonth();
      months[month] += payment.amount;
    });
    return months;
  };

  // Aggregated payment data for each month
  const moneyReceivedArray = aggregatePaymentsByMonth(transactionReceived);
  const moneySpentArray = aggregatePaymentsByMonth(transactionSent);

  // Months of the year labels
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <main className="md:my-20 mx-2 my-6 md:mx-12">
        <p className="mx-4">Hello, {user.userInfo.name}</p>
        <section className="flex flex-col md:flex-row justify-between">
          <section>
            <div className="p-5 flex flex-col shadow-lg my-6 max-w-[400px] gap-5">
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
          </section>

          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: monthsOfYear,
                label: "Month of the Year",
              },
            ]}
            series={[
              { data: moneyReceivedArray, label: "Money Received" },
              { data: moneySpentArray, label: "Money Spent" },
            ]}
            width={600}
            height={400}
          />
        </section>
      </main>
    </>
  );
};

export default DashboardMain;
