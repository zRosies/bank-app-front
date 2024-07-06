import { GrNext } from "react-icons/gr";
import { UserInfo } from "../utils/types";

const UserConfirmation = ({ user }: { user: UserInfo }) => {
  const date = new Date();

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-center font-bold">Confirm the transaction</p>
        <p className=" border-b border-gray-300 flex">Name: {user.name}</p>
        <p className=" border-b border-gray-300">Email: {user.email}</p>
        <p className=" border-b border-gray-300">
          Document: **{user.cpf.toLocaleString().slice(1, 5)}**
        </p>
        <p className=" border-b border-gray-300">
          Date: {date.toLocaleDateString()}
        </p>
        <p>Value: ${"2000"}</p>
        {/* @ts-ignore */}
        <GrNext className="p-3 rounded-[50%] text-white bg-primary w-[40px] h-[40px] flex items-center justify-center my-6 text-center" />
      </div>
    </>
  );
};

export default UserConfirmation;
