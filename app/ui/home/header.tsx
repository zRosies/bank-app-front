"use client";
import Link from "next/link";
import S7Icon from "./s7Icon";
import { RiMenu3Line } from "react-icons/ri";

import jwt from "jsonwebtoken";
import { IoIosExit } from "react-icons/io";
import MobSideNav from "./mobSideNav";
import BlackBackground from "../utils/blackback";
import { useState } from "react";

const Header = () => {
  const accessToken = document.cookie
    .split(";")
    .some((cookie) => cookie.trim().startsWith("accessToken="));

  if (accessToken) {
    console.log("exits");
  }
  function Logout(name: string) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    window.location.href = "/";
  }

  const [openNav, setOpenNav] = useState<boolean>(false);

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
        {accessToken && (
          <span className="flex md:hidden" onClick={() => setOpenNav(true)}>
            {/* @ts-ignore */}
            <RiMenu3Line className="h-7 w-7 mx-3 text-purple-800" />
          </span>
        )}
        <div className="md:flex hidden"></div>
        {accessToken && (
          <span
            className="items-center gap-1 text-[0.9rem] hover:scale-105 duration-200 mr-5 cursor-pointer hidden md:flex"
            onClick={() => Logout("accessToken")}
          >
            Log out
            {/* @ts-ignore */}
            <IoIosExit className="h-5 w-5 text-red-600" />
          </span>
        )}
        <BlackBackground display={openNav} setDisplay={setOpenNav}>
          <MobSideNav />
        </BlackBackground>
      </header>
    </>
  );
};

export default Header;
