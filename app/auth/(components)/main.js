"use client";
import { useState } from "react";
import Login from "@/app/auth/(components)/login";
import Register from "@/app/auth/(components)/register";

export default function AuthMain() {
  const [isLogin, setIsLogin] = useState(true);

  const props = { isLogin, setIsLogin };

  return isLogin ? <Login props={props} /> : <Register props={props} />;
}
