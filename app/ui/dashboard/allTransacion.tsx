import { Transaction } from "./page";
import { ImCheckboxChecked } from "react-icons/im";
import { MdBlockFlipped } from "react-icons/md";
import { User, UserInfo } from "../utils/types";
import { PiChartLineDown, PiChartLineUp } from "react-icons/pi";

const AllTransactions = ({
  transactions,
  user,
}: {
  transactions: Transaction[];
  user: User;
}) => {
  return (
    <>
      <div className="absolute z-40 animate-left shadow-md shadow-black bg-white w-[360px] md:w-[550px]  translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] p-4 rounded-[6px] gap-3 flex flex-col ">
        <div className="flex justify-between font-semibold">
          <p>Date</p>
          <p>Value</p>
          <p>Transaction</p>
          <p>Status</p>
        </div>
        <div
          className="max-h-[400px] overflow-y-scroll flex gap-3 flex-col"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#ad60dd #ffffff " }}
        >
          {transactions.toReversed().map((transaction, index) => (
            <div
              key={index}
              className="grid grid-cols-[repeat(4,80px)] md:grid-cols-4 bg-[#fff] p-2 gap-2"
            >
              <p className="text-[0.7rem]">{transaction.date}</p>
              <p className="text-[0.7rem]">U$ {transaction.value}</p>
              {user.userInfo.user_id == transaction.payer_id ? (
                <>
                  {/* @ts-ignore */}
                  <PiChartLineDown className="text-red-600 text-start" />
                </>
              ) : (
                <>
                  {" "}
                  {/* @ts-ignore */}
                  <PiChartLineUp className="text-green-600 text-start" />
                </>
              )}
              <p className="flex items-center gap-2 text-start">
                {transaction.status == "success" ? (
                  <>
                    <p className="text-[0.7rem]"> Complete</p>
                    {/* @ts-ignore */}
                    <ImCheckboxChecked className="text-green-600" />
                  </>
                ) : (
                  <>
                    <p className="text-[0.7rem]"> Blocked</p>
                    {/*  @ts-ignore */}
                    <MdBlockFlipped className="text-red-600" />
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllTransactions;
