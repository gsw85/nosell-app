"use client";
import { useState } from "react";
import Login from "@/app/auth/(components)/login";
import Register from "@/app/auth/(components)/register";
import { useCurrentUser } from "@/store/user";
import { useRouter } from "next/navigation";
import { PageLoading } from "@/components/page-loading";

export default function AuthMain() {
  const [isLogin, setIsLogin] = useState(true);

  const props = { isLogin, setIsLogin };
  const loginEL = isLogin ? (
    <Login props={props} />
  ) : (
    <Register props={props} />
  );

  return <IsLogin>{loginEL}</IsLogin>;
}

function IsLogin({ children }) {
  const userData = useCurrentUser();
  const router = useRouter();

  const userID = userData?.userID;
  if (userID) router.push("/");

  return userID ? <PageLoading /> : children;
}
