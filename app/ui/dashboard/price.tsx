import { GrNext } from "react-icons/gr";
import { TransactionInfo } from "./page";
import { IoIosArrowBack } from "react-icons/io";
import { UserInfo } from "../utils/types";

const Price = ({
  userInfo,
  transactionInfo,
  setTransactionInfo,
}: {
  transactionInfo: TransactionInfo;
  setTransactionInfo: Function;
  userInfo: UserInfo;
}) => {
  const handleAddPrice = (e: any) => {
    e.preventDefault();
    setTransactionInfo({
      receiverInfo: transactionInfo.receiverInfo,
      transaction: {
        ...transactionInfo.transaction,
        value: parseFloat(e.target.elements.price.value),
        payer_id: userInfo.user_id,
      },
      showPricing: false,
      showReceiverInfo: true,
    });
  };

  return (
    <>
      <div className="absolute z-40 animate-left bg-white w-[400px] translate-x-[-50%] translate-y-[-50%]  top-[50%] left-[50%] p-4 rounded-[6px] gap-3 flex flex-col">
        <p
          className="text-red-500 flex items-center hover:scale-105 duration-200 cursor-pointer"
          onClick={() =>
            setTransactionInfo({
              showReceiverInfo: false,
              showPricing: false,
            })
          }
        >
          <IoIosArrowBack /> back
        </p>
        <h1 className="font-semibold">Select the amount</h1>

        <form onSubmit={handleAddPrice} className="flex justify-between">
          <label htmlFor="price" className="flex items-center gap-3">
            U$
            <input
              name="price"
              type="text"
              placeholder="00.00"
              className="border-2 h-8"
            />
          </label>
          <button className="bg-primary text-white rounded-[50%] p-2">
            {/* @ts-ignore */}
            <GrNext className="p-2 rounded-[50%] text-white bg-primary w-[30px] h-[30px] flex items-center justify-center text-center cursor-pointer" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Price;
