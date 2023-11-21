import botHandler from "./telegram/index.js";

const { onRequest } = require("firebase-functions/v2/https");

export const telegram = onRequest(
  {
    timeoutSeconds: 1200,
  },
  botHandler
);
