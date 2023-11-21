"use client";

import TelegramLoginButton from "telegram-login-button";

export default function LoginButton() {
  return (
    <TelegramLoginButton
      botName="nosellbot"
      dataOnauth={(user) => console.log(user)}
    />
  );
}
