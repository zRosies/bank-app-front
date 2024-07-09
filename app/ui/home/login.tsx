"use client";
import { useState } from "react";
import { redirect } from "next/navigation";

import { AiOutlineLoading } from "react-icons/ai";
import jwt from "jsonwebtoken";

export default function LoginComponent({
  setTranslateX,
  translate,
}: {
  setTranslateX: Function;
  translate: boolean;
}) {
  interface ErrorMessage {
    message: string;
  }
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<ErrorMessage>({ message: "" });

  async function Login(e: any) {
    e.preventDefault();
    setError({ message: "" });
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const email = (form.elements.namedItem("email") as HTMLInputElement)
        .value;
      const password = (form.elements.namedItem("password") as HTMLInputElement)
        .value;

      console.log(password, email);

      const response = await fetch(`http://localhost:8080/authentication`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      console.log(data.jwtToken);

      if (!response.ok) {
        console.log(data);
        setError({ message: data.message });
        setIsSubmitting(false);
        return;
      }

      if (response.status == 200) {
        //   console.log("test");
        setError({ message: "" });
        let date = new Date();
        date.setTime(date.getTime() + 60 * 5 * 1000);
        document.cookie = `accessToken=${
          data.jwtToken
        }; path=/; expires=${date.toUTCString()}; secure; domain=127.0.0.1; samesite=strict`;
        window.location.href = "/dashboard";

        setIsSubmitting(false);
        //   // setAccountCreated(true);
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className={`flex flex-col items-center self-center py-12 mt-16 w-full text-base duration-300 ${
          translate && "translate-x-[-500px] "
        } bg-white rounded-xl  max-w-[398px] mx-auto`}
      >
        <form
          className="flex flex-col px-8 py-12 self-center shadow-md max-w-[360px] mx-auto gap-5 rounded-md "
          onSubmit={Login}
        >
          <p className="text-center font-bold text-lg">Login</p>
          <label htmlFor="email">
            Email
            <input
              className="bg-light py-1 w-full"
              type="text"
              name="email"
              id="email"
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              className="bg-light w-full py-1 "
              type="text"
              name="password"
              id="password"
            />
          </label>

          <button className="p-2 bg-primary text-white font-semibold flex justify-center gap-3">
            {" "}
            Sign in
            {isSubmitting && (
              // @ts-ignore
              <AiOutlineLoading className="animate-loading text-white h-5 w-5" />
            )}
          </button>
          {error && <p className="text-sm text-red-500">{error.message}</p>}
          <p className="text-sm text-center">
            Do not have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setTranslateX(true)}
            >
              Register Now
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
