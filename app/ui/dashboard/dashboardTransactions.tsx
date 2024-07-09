import { useState } from "react";
import { User, UserInfo } from "../utils/types";
import { Transaction } from "./page";
import { PiChartLineUp } from "react-icons/pi";

import { PiChartLineDown } from "react-icons/pi";
import BlackBackground from "../utils/blackback";
import AllTransactions from "./allTransacion";

const DashboardTransactions = ({ user }: { user: User }) => {
  const [allTransactions, setAllTransacions] = useState<boolean>(false);
  console.log(user.transaction);
  return (
    <>
      <div className="p-5 flex flex-col shadow-md my-3  md:max-w-[400px] gap-5">
        <p className="text-[0.8rem]">Last Transactions</p>
        <h1 className="font-semibold text-[0.9rem]">Transactions</h1>
        <div className="flex justify-between">
          <div className="flex gap-2 flex-col">
            {user.transaction.length > 0 ? (
              <>
                {user.transaction.slice(-5).map((transaction, index) => (
                  <div
                    key={index}
                    className="flex gap-3 bg-slate-100 p-2 justify-between"
                  >
                    <p className="text-[0.9rem]">U${transaction.value}</p>
                    {user.userInfo.user_id == transaction.payer_id ? (
                      <>
                        <p className="font-semibold text-[.8rem]">
                          Payment sent
                        </p>
                        <span>
                          {/* @ts-ignore */}
                          <PiChartLineDown className="text-red-600" />
                        </span>
                      </>
                    ) : (
                      <>
                        <p className="font-semibold text-[.8rem]">
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
            <div className="flex justify-between w-[110px]">
              <p>Earned</p> <span>200</span>
            </div>
            <div className="flex justify-between w-[110px]">
              <p>Spent</p> <span>500</span>
            </div>
            <div className="flex justify-between w-[110px]">
              <p>Balance</p> <span>300</span>
            </div>
          </div>
        </div>
        <button
          className="bg-primary text-white p-1 w-[110px] rounded-[1rem] hover:bg-purple-500 duration-200 text-center justify-center flex self-end"
          onClick={() => setAllTransacions(true)}
        >
          See all
        </button>

        <BlackBackground
          display={allTransactions}
          setDisplay={setAllTransacions}
        >
          <AllTransactions transactions={user.transaction} />
        </BlackBackground>
      </div>
    </>
  );
};

export default DashboardTransactions;
