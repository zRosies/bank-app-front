import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { initDb } from "../ui/utils/connection";
import { User } from "../ui/utils/types";
import { Collection } from "mongodb";
import DashboardMain from "../ui/dashboard/page";

interface UserInfo {
  email: string;
  iat: number;
  exp: number;
}

export default async function Dashboard() {
  //   const accessToken = GetCookie("accessToken");
  const cookie = cookies();
  const accessToken = cookie.get("accessToken");
  if (!accessToken) {
    redirect("/");
  }

  const userInfo: any = jwt.verify(
    accessToken.value,
    `${process.env.ACCESS_TOKEN_SECRET}`,
    (err: any, decoded: any) => {
      if (err) {
        console.log("Failed: " + err);
        redirect("/");
      } else {
        return decoded;
      }
    }
  );

  let db = await initDb("picpay", "user_account");
  const response: any = await db.findOne({
    email: userInfo.email,
  });

  console.log(response.user_id);

  //   db = await initDb("picpay", "balance");

  const transaction: any = await fetch(
    `${process.env.API_URL}/api/transactions/${response.user_id}`,
    {
      credentials: "include", // Ensure credentials are included
      headers: {
        Cookie: `accessToken=${accessToken.value}`,
      },
    }
  );
  const balance: any = await fetch(
    `${process.env.API_URL}/api/balance/${response.user_id}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken.value}`,
      },
    }
  );
  const balanceData = await balance.json();
  const transactionData = await transaction.json();
  const user: User = {
    userInfo: response,
    trasaction: transactionData || {},
    balance: balanceData || {},
  };

  //   console.log(user);

  return (
    <>
      <DashboardMain user={user} />
    </>
  );
}

// export function GetCookie(cookieName: string): string | undefined {
//   const cookies = document.cookie.split("; ");
//   const cookie = cookies.find((cookie) => cookie.split("=")[0] === cookieName);

//   return cookie;
// }
