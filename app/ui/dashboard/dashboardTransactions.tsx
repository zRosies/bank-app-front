import { useState } from "react";
import { User, UserInfo } from "../utils/types";
import { Transaction } from "./page";
import { PiChartLineUp } from "react-icons/pi";

import { PiChartLineDown } from "react-icons/pi";
import BlackBackground from "../utils/blackback";
import AllTransactions from "./allTransacion";

const DashboardTransactions = ({ user }: { user: User }) => {
  const [allTransactions, setAllTransacions] = useState<boolean>(false);
  // console.log(user.transaction);

  const spent = user.transaction
    .filter((transaction) => transaction.payer_id == user.userInfo.user_id)
    .reduce(
      // @ts-ignore
      (acc, transaction) => acc + parseFloat(transaction.value),
      0
    );
  const earned = user.transaction
    .filter((transaction) => transaction.payer_id != user.userInfo.user_id)
    .reduce(
      // @ts-ignore
      (acc, transaction) => acc + parseFloat(transaction.value),
      0
    );

  return (
    <>
      <div className="p-5 flex flex-col shadow-lg my-3  md:max-w-[400px] gap-5">
        <p className="text-[0.8rem]">Last Transactions</p>
        <h1 className="font-semibold text-[0.9rem]">Transactions</h1>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-col">
            {user.transaction.length > 0 ? (
              <>
                {user.transaction
                  .slice(-5)
                  .reverse()
                  .map((transaction, index) => (
                    <div
                      key={index}
                      className="flex gap-3 bg-slate-100 p-2 justify-between"
                    >
                      <p className="text-[0.7rem] md:text-[0.9rem]">
                        U${transaction.value}
                      </p>
                      {user.userInfo.user_id == transaction.payer_id ? (
                        <>
                          <p className="font-semibold text-[0.7rem] md:text-[.8rem]">
                            Payment sent
                          </p>
                          <span>
                            {/* @ts-ignore */}
                            <PiChartLineDown className="text-red-600" />
                          </span>
                        </>
                      ) : (
                        <>
                          <p className="font-semibold text-[0.7rem] md:text-[.8rem]">
                            Transaction received
                          </p>
                          <span>
                            {/* @ts-ignore */}
                            <PiChartLineUp className="text-green-600" />
                          </span>
                        </>
                      )}
                    </div>
                  ))}
              </>
            ) : (
              <div>
                <p>No transactions found.</p>
                <p>Make some transactions to see the data.</p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex text-[.7rem] md:text-[0.9rem] justify-between w-[110px] px-2">
              <p>Earned</p>{" "}
              <span className="text-green-500 text-md">$ {earned}</span>
            </div>
            <div className="flex justify-between text-[.7rem]  md:text-[0.9rem] w-[110px] px-2">
              <p>Spent</p> <span className="text-red-500">$ {spent}</span>
            </div>
            <div className="flex justify-between text-[.7rem]  md:text-[0.9rem] w-[110px] px-2">
              <p>Balance</p>{" "}
              <span
                className={`${
                  earned - spent < 0 ? "text-red-600" : "text-green-800"
                }`}
              >
                ${earned - spent}
              </span>
            </div>
          </div>
        </div>
        <button
          className="bg-primary text-white p-1 w-[110px] rounded-[.5rem] hover:bg-purple-500 duration-200 text-center justify-center flex self-end"
          onClick={() => setAllTransacions(true)}
        >
          See all
        </button>

        <BlackBackground
          display={allTransactions}
          setDisplay={setAllTransacions}
        >
          <AllTransactions user={user} transactions={user.transaction} />
        </BlackBackground>
      </div>
    </>
  );
};

export default DashboardTransactions;
