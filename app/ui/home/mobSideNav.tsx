import { IoIosExit } from "react-icons/io";

const MobSideNav = () => {
  function Logout(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    window.location.href = "/";
  }

  return (
    <>
      <div className="fixed top-0 left-0 bg-white w-[70%] h-full z-50 flex flex-col justify-center items-center gap-5">
        <p className="border-b-1 border-purple-400">About</p>
        <p className="border-b-1 border-purple-400">FAQ</p>
        <p
          className="flex items-center gap-1 text-[0.9rem] text-red-600 hover:scale-105 duration-200 mr-5 cursor-pointer text-center"
          onClick={() => Logout("accessToken")}
        >
          Log out
          {/* @ts-ignore */}
          <IoIosExit className="h-5 w-5" />
        </p>
      </div>
    </>
  );
};

export default MobSideNav;
