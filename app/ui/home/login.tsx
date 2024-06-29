"use client";
import { useState } from "react";
import { redirect } from "next/navigation";

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

    try {
      const form = e.currentTarget;
      const email = (form.elements.namedItem("email") as HTMLInputElement)
        .value;
      const password = (form.elements.namedItem("password") as HTMLInputElement)
        .value;

      console.log(password, email);

      //   const response = await signIn("credentials", {
      //     redirect: false,
      //     email,
      //     password,
      //   });

      //   if (response?.error) {
      //     setError({ message: "Invalid email or password" });
      //   }
      //   if (response?.url) {
      //     window.location.href = "/profile";
      //   } else {
      //     setError({ message: "" });
      //   }
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
          <label htmlFor="cpf">
            CPF
            <input
              className="bg-light py-1 w-full"
              type="text"
              name="cpf"
              id="cpf"
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

          <button className="p-2 bg-primary text-white font-semibold">
            {" "}
            Sign in
          </button>
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
