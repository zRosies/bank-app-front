import Link from "next/link";
import S7Icon from "./s7Icon";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <header className="flex justify-between shadow-md items-center py-2">
        <Link href="/">
          <S7Icon />
        </Link>
        <div className="md:flex gap-5 hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <span className="flex md:hidden">
          {/* @ts-ignore */}
          <RiMenu3Line className="h-7 w-7 mx-3 text-purple-800" />
        </span>
        <div className="md:flex hidden"></div>
      </header>
    </>
  );
};

export default Header;
