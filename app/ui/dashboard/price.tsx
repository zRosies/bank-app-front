import { GrNext } from "react-icons/gr";
import { TransactionInfo } from "./page";

const Price = ({
  transactionInfo,
  setTransactionInfo,
}: {
  transactionInfo: TransactionInfo;
  setTransactionInfo: Function;
}) => {
  return (
    <>
      <div className="absolute z-40 bg-white w-[400px] translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] p-4 rounded-[6px] gap-3 flex flex-col">
        <h1 className="font-semibold">Select the amount</h1>
        <div className="flex justify-between">
          <label htmlFor="price" className="flex items-center gap-3">
            U$
            <input
              name="price"
              type="text"
              placeholder="00.00"
              className="border-2 h-8"
            />
          </label>
          <button
            className="bg-primary text-white rounded-[50%] p-2"
            onClick={() =>
              setTransactionInfo({
                ...transactionInfo,
                showPricing: false,
                showReceiverInfo: true,
              })
            }
          >
            {/* @ts-ignore */}
            <GrNext className="p-2 rounded-[50%] text-white bg-primary w-[35px] h-[35px] flex items-center justify-center text-center cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Price;
