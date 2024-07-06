import HomeMain from "./ui/home/home";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default function Home() {
  const cookie = cookies();
  const accessToken = cookie.get("accessToken");
  if (accessToken) {
    const userInfo: any = jwt.verify(
      accessToken.value,
      `${process.env.ACCESS_TOKEN_SECRET}`,
      (err: any, decoded: any) => {
        if (err) {
          console.log("Failed: " + err);
        } else {
          redirect("/dashboard");
        }
      }
    );
  }

  return (
    <>
      <HomeMain />
    </>
  );
}
