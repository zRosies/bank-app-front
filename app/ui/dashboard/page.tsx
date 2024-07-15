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
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { IoIosExit } from "react-icons/io";

import Image from "next/image";
import { CardSkeleton, TransactionSkeleton } from "../utils/skelectons";

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

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <main className="md:my-20 w-[98%] md:w-full my-6 md:px-12">
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
          <section className="flex flex-col-reverse md:flex-col">
            <section className="flex flex-col md:flex-row">
              <div className="flex flex-col mx-auto max-w-[280px] shadow-md p-4 rounded-md my-2">
                <div className="flex justify-between ">
                  <div className="">
                    <h1 className="font-bold">Trust our team </h1>
                    <p className="text-[0.7rem]">
                      Stop worrying too much with your money. Our team will
                      provide you
                    </p>
                    <p className="font-extrabold text-[1.1rem] text-purple-600">
                      120% PROFIT
                    </p>
                  </div>
                  <Image
                    className="w-[120px] h-[120px]"
                    src={"/team.png"}
                    alt="businessTeam"
                    width={200}
                    height={200}
                  />
                </div>
                <button
                  type="button"
                  className="bg-primary hover:bg-purple-500 duration-200 text-white p-1 rounded-md  mt-4 "
                >
                  More
                </button>
              </div>

              <div className="flex flex-col  mx-auto max-w-[280px] shadow-md p-4 rounded-md my-2">
                <div className="flex justify-between ">
                  <div className="">
                    <h1 className="font-bold">New Cards </h1>
                    <p className="text-[0.7rem]">
                      Trust S7 for your purchases and receive your card now!
                    </p>
                    <p className="font-extrabold text-[1.1rem] text-purple-600">
                      Gain Credit
                    </p>
                  </div>
                  <Image
                    className="w-[120px] h-[120px]"
                    src={"/cards.png"}
                    alt="businessTeam"
                    width={200}
                    height={200}
                  />
                </div>
                <button
                  type="button"
                  className="bg-primary hover:bg-purple-500 duration-200 text-white p-1 rounded-md  mt-4 "
                >
                  More
                </button>
              </div>
            </section>

            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: monthsOfYear,
                  label: "Transactions",
                  labelStyle: {
                    fontSize: 10,
                  },
                },
              ]}
              series={[
                {
                  data: moneyReceivedArray,
                  label: "Received",
                  color: "#B577DB",
                },
                {
                  data: moneySpentArray,
                  label: "Spent",
                  color: "#E15F5F",
                },
              ]}
              width={isSmallScreen ? 370 : 600}
              height={isSmallScreen ? 500 : 400}
            />
          </section>
        </section>
        {/* <TransactionSkeleton /> */}
      </main>
    </>
  );
};

export default DashboardMain;

const CustomLegend = () => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
    <Box sx={{ mr: 4 }}>
      <Typography sx={{ color: "#B577DB", fontWeight: "bold" }}>
        Received
      </Typography>
    </Box>
    <Box>
      <Typography sx={{ color: "#E15F5F", fontWeight: "bold" }}>
        Spent
      </Typography>
    </Box>
  </Box>
);
