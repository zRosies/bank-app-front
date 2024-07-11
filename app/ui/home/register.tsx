"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineLoading } from "react-icons/ai";
import BlackBackground from "../utils/blackback";
import SuccessfulCreation from "../utils/sucessMessage";

const Register = ({
  setTranslateX,
  translate,
}: {
  setTranslateX: Function;
  translate: boolean;
}) => {
  interface ErrorMessage {
    message: string;
  }
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [created, setAccountCreated] = useState<boolean>(false);
  const [error, setError] = useState<ErrorMessage>({ message: "" });

  // Registering user to MongoDB
  const RegisterUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError({ message: "" });
    // if (isSubmitting) {
    //   return;
    // }
    setIsSubmitting(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;
    const passwor2 = (form.elements.namedItem("password2") as HTMLInputElement)
      .value;

    const cpf = (form.elements.namedItem("cpf") as HTMLInputElement).value;

    if (passwor2 != password) {
      setError({ message: "As senhas não coincidem." });
      setIsSubmitting(false);
      return;
    }

    // console.log(crypto.randomUUID());

    // return;
    try {
      const response = await fetch(`http://localhost:8080/api/accounts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: crypto.randomUUID(),
          email: email,
          password: password,
          cpf: cpf,
          store_owner: false,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // console.log(data);
        setError({ message: data.message });
        setIsSubmitting(false);
        return;
      }

      if (response.status == 201) {
        setError({ message: "" });
        setIsSubmitting(false);
        setAccountCreated(true);
      }
    } catch (error: any) {
      setIsSubmitting(false);
      console.log(error);
    }
  };

  return (
    <>
      <form
        className={`flex flex-col absolute top-[6rem] right-2 duration-300 ${
          !translate && "translate-x-[500px]"
        } self-center px-8 py-8 gap-2 w-full text-base text-black bg-white rounded-xl shadow-md shadow-gray-300 max-w-[398px] mx-auto`}
        onSubmit={RegisterUser}
      >
        <button
          type="button"
          className="text-start flex items-center hover:scale-[1.03] duration-200 ml-[-10px] text-[0.85rem] text-blue-500"
          onClick={() => setTranslateX(false)}
        >
          <IoIosArrowBack />
          Voltar
        </button>
        <p className="text-center font-bold text-lg">Register</p>
        <label htmlFor="cpf">
          CPF
          <input
            className="bg-light py-1 w-full"
            type="text"
            name="cpf"
            id="cpf"
          />
        </label>
        <label htmlFor="email">
          E-mail
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
        <label htmlFor="password2">
          Re-enter password
          <input
            className="bg-light w-full py-1 "
            type="text"
            name="password2"
            id="password2"
          />
        </label>
        {error && <p className="text-red-500">{error.message}</p>}

        <button className="p-2 my-6 bg-primary text-white font-semibold">
          {" "}
          Register now
        </button>
      </form>
      <BlackBackground display={created} setDisplay={setAccountCreated}>
        <SuccessfulCreation
          setTranslateX={setTranslateX}
          hideSuccessfulMessage={setAccountCreated}
        />
      </BlackBackground>
    </>
  );
};

export default Register;
