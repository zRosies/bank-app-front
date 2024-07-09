import { Transaction } from "./page";
import { ImCheckboxChecked } from "react-icons/im";
import { MdBlockFlipped } from "react-icons/md";

const AllTransactions = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <>
      <div className="absolute z-40 animate-left shadow-md shadow-black bg-white w-[360px] md:w-[550px] max-h-[400px] overflow-y-scroll translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] p-4 rounded-[6px] gap-3 flex flex-col ">
        <div className="flex justify-between font-semibold">
          <p>Date</p>
          <p>Value</p>
          <p>Status</p>
        </div>
        {transactions.map((transaction, index) => (
          <div key={index} className="flex justify-between bg-gray-200 p-2">
            <p>{transaction.date}</p>
            <p>U$ {transaction.value}</p>
            <p className="flex items-center gap-2">
              {transaction.status == "success" ? (
                <>
                  <p> Complete</p>
                  {/* @ts-ignore */}
                  <ImCheckboxChecked className="text-green-600" />
                </>
              ) : (
                <>
                  <p> Blocked</p>
                  {/*  @ts-ignore */}
                  <MdBlockFlipped className="text-red-600" />
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTransactions;
